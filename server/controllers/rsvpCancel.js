const User = require('../models/user');
const Activities = require('../models/activities');
const Bars = require('../models/bars');

module.exports = function(req, res){

  console.log(req.body);

  const username = req.tokenPayload.username;
  const data = { name: req.body.name };
    
  var date = new Date();
  var todaysDate = (date.getMonth() + 1) + '/' + date.getDate() + '/' +  date.getFullYear();
  const firstPromise = new Promise((resolve, reject) => {
    Activities.findOne({ username: username }, function(err, doc){
      console.log(doc);
      if(err) {
        reject(err);
        console.log(err);
      }

      const last = doc.myActivities.length - 1;
      const barIndex = doc.myActivities[last].bars
        .findIndex(item => item.name === data.name );
      doc.myActivities[last].bars.splice(barIndex, 1);

      doc.save(function(err){
        if (err){
          reject(err);
          console.log(err);
        } else {
          resolve({success: true, activities: doc.myActivities });
        }
      });
    });
  });

  firstPromise.then(prom => {
    if(prom.success){
      Bars.findOne({ bar: data.name }, function(err, doc){
        if (err) res.status(400).json({ success: false });
        
        doc.people_attending--;
        console.log(doc);
        doc.save(function (err){
          if(err) res.status(400).json({ success: false });
          else {
            res.status(200).json({ success: true, activities: prom.activities.reverse() });
          }
        });
      });
    }
  })
  .catch(err => {
    if (err) {
      console.log(err);
      res.status(400).json({ success: false });
    }
  });

  //res.status(200).json({ success: true });
};