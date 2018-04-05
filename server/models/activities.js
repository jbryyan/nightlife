const mongoose = require('mongoose');
const AcSchema = new mongoose.Schema({
  username: String,
  myActivities: 
  [
    { date: String, bars: [] }
  ]
}, {collection: 'activities' });

module.exports = mongoose.model('Activities', AcSchema);

//activities: { date: [] } 