const User = require('../models/user');
const Activities = require('../models/activities');
const jwt = require('jsonwebtoken');
const config = require('../config/main');

module.exports = function(req, res){
  console.log(req.body);
  if(!req.body.username || !req.body.pwd) {
    res.json({ success: false, message: 'Please enter a username and password to register.' });
  } else {
    console.log("In register let new user.")
    let newUser = new User({
      username: req.body.username,
      password: req.body.pwd,
    });
    console.log(newUser);
    // Attempt to save new user
    newUser.save((err) => {
        console.log(err);
        if (err && err.code === 11000) return res.status(401).json({ success: false, message: 'Username must be unique' });
        else if (err) return res.status(401).json({ success: false, message: err.errors.username.message });
        else{ 
          let newActivity = new Activities({ username: req.body.username });
          newActivity.save();

          jwt.sign({ username: req.body.username }, config.secret, { expiresIn: '1h' },
          function(err,token){
              if (err) throw err;
              res.setHeader('Authorization', 'Bearer ' + token);
              res.status(200).json({ success: true, username: req.body.username});
          });

        }
    });
  }
};
