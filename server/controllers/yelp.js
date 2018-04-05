const User = require('../models/user');
const Bars = require('../models/bars');
const Activities = require('../models/activities');
const jwt = require('jsonwebtoken');
const config = require('../config/main');
const Request = require('superagent');

module.exports = function(req, res){
 
  let current_user = '';
  let date = new Date();
  let todaysDate = (date.getMonth() + 1) + '/' + date.getDate() + '/' +  date.getFullYear();

  if( req.header('Authorization') ){
    console.log('Header available');
    jwt.verify(req.header('Authorization').replace('Bearer ', ''), config.secret, function(err, decoded){
      if(err) console.log(err);
      current_user = decoded.username;
    });
  }

  let sortby = req.query.sort;
  if(sortby === 'review'){
    sortby = 'review_count';
  }

  //res.status(200).json({ success: true });

  Request.get(config.yelpsearch)
  .set({ Authorization: config.yelpkey })
  .query({ location: req.query.search })
  .query({ sort_by: sortby })
  .query({ categories: 'nightlife' })
  .then(yelpRes => {
    
    let businesses = yelpRes.body.businesses;
    let count = 0;
    businesses.forEach(item => {
      //console.log(item);
      item.going = false;
      item.totalgoing = 0;
      const firstPromise = new Promise((resolve, reject) => {
        Bars.findOne({ bar: item.name }, function(err, doc){
          if (err) {
            console.log(err);
            reject(err);
          }
          if(doc){
            item.totalgoing = doc.people_attending;
            //console.log(item);
          };
          resolve(true);
        });
      });

      firstPromise.then(success => {
        if(success){
          Activities.findOne({ username: current_user }, function(err, doc){
            if (err) { 
              res.status(400).json({ success: false });
              console.log(err)
            }
            if(doc){
              const dateIndex = doc.myActivities.findIndex(myItem => myItem.date === todaysDate );
              if(dateIndex !== -1){
                const barIndex = doc.myActivities[dateIndex].bars.findIndex(myItem => myItem.name === item.name );
                if(barIndex !== -1){
                  item.going = true;
                }
              }
            }
            count++;
            if(count === businesses.length){
              
              res.status(200).json({ success: true, data: businesses });
  
            }
          });
        }
      })
  
      
      //console.log(item);
    });
    //res.status(200).json({ success: true, data: businesses });
  })
  .catch(err => {
    console.log(err);
  })
};
