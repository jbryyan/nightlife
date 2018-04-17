const User = require('../models/user');
const Activities = require('../models/activities');
const jwt = require('jsonwebtoken');
const config = require('../config/main');

module.exports = function(req, res){
  User.findOne({
    username: req.body.username
    }, function(err, user){
    if (err) throw err;

    //Send user back to login if no user found
    if (!user) {
      res.status(401).json({ message: 'Username or password incorrect' });
    } else {
      // Check that the passwords match
      user.comparePassword(req.body.pwd, function(err, isMatch){
        console.log(isMatch);
        if (isMatch && !err) {
          //Create token
          let token = jwt.sign(
            //JSON.parse(JSON.stringify(user)), 
            { username: req.body.username },
            config.secret, 
            { expiresIn: '1h' }
          );
          Activities.findOne({ username: req.body.username }, function(err, doc){
            if (err) console.log(err);
            
            res.setHeader('Authorization', 'Bearer ' + token);
            res.status(200).json({ username: req.body.username, myActivities: doc.myActivities });
          });

        } else {
          res.status(401).json({ message: 'Username or password incorrect' });
        }
      });
    }
  });
};