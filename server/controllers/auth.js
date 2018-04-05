const User = require('../models/user');

module.exports = function(req, res){
  User.findOne({ username: req.tokenPayload.username}, function(err, doc){
    if (err) console.log(err);
    if (!doc) {
      res.status(401).json({ success: false, message: 'User does not exist.' });
    }else{
      res.status(200).json({ username: req.tokenPayload.username });
    }
  })
};