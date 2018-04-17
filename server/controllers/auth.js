const User = require('../models/user');
const Activities = require('../models/activities');

module.exports = function(req, res){
  User.findOne({ username: req.tokenPayload.username}, function(err, doc){
    if (err) console.log(err);
    if (!doc) {
      res.status(401).json({ success: false, message: 'User does not exist.' });
    }else{
      Activities.findOne({ username: req.tokenPayload.username }, function(err, doc){
        if (err) {
          res.status(400).json({ success: false });
          console.log(err);
        }
        console.log(doc);

        res.status(200).json({ username: req.tokenPayload.username, activities: doc.myActivities });
      });
    }
  })
};