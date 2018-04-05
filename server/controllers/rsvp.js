const Activities = require('../models/activities');
const Bars = require('../models/bars');

module.exports = function(req, res){
 // res.status(200).json({ username: req.tokenPayload.username });
  const username = req.tokenPayload.username;

  const data = { 
    name: req.body.name,
    location: req.body.location.city,
    phone: req.body.phone, 
  };
  var date = new Date();
  var todaysDate = (date.getMonth() + 1) + '/' + date.getDate() + '/' +  date.getFullYear();

  Activities.findOne(
    { username: username }, 
    function(err, doc){
    if(err) {
      res.status(400).json({ success: false });
      console.log(err);
    }
    let bars = [];
    bars.push(data);
    console.log(doc);
    if(doc.myActivities.length === 0){
      console.log('Pushing data to empty array');
      doc.myActivities.push({ date: todaysDate, bars: bars });
      Bars.findOne({ bar: data.name }, function(err, barDoc){
        if(err) console.log(err);
        console.log(barDoc);
        if(!barDoc){
          let newBar = new Bars({ bar: data.name, people_attending: 1 });
          newBar.save();
        }else{
          barDoc.people_attending++;
          barDoc.save();
          console.log('+1 to bar');
        }
      });
    }else{
      // Check to see if todays date is present in db
      const dateIndex = doc.myActivities.findIndex(item => item.date === todaysDate );
      
      if(dateIndex !== -1){
        console.log('Date exists: ', dateIndex);
        // Now we check to see if the rsvp place is already present in the bars array
        const barIndex = doc.myActivities[dateIndex].bars.findIndex(item => item.name === data.name );
    
        // Check bars array to see if bar exists
        if(barIndex !== -1){
          console.log('Bar already added');
        }else{
          console.log('Bar has been added');
          const index = doc.myActivities.findIndex(item => item.date === todaysDate);
          console.log('index: ', index);
          doc.myActivities[index].bars.push(data);
          Bars.findOne({ bar: data.name }, function(err, barDoc){
            if (err) console.log(err);
            if(!barDoc){
              let newBar = new Bars({ bar: data.name, people_attending: 1 });
              newBar.save();
              console.log('added bar');
            }else{
              barDoc.people_attending++;
              barDoc.save();
              console.log('+1 to bar');
            }
          })
        }
      }else{
        console.log('date doesnt exist');
        doc.myActivities.push({ date: todaysDate, bars: bars });
        Bars.findOne({ bar: data.name }, function(err, barDoc){
          if (err) console.log(err);
          if(!barDoc){
            let newBar = new Bars({ bar: data.name, people_attending: 1 });
            newBar.save();
            console.log('added bar');
          }else{
            barDoc.people_attending++;
            barDoc.save();
            console.log('+1 to bar');
          }
        })
      }
    }
    doc.save(function(err){
      if(err) {
        res.status(400).json({ success: false });
        console.log(err);
      }
      res.status(200).json({ success: true })
    })
  });

};