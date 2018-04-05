const mongoose = require('mongoose');
const BarsSchema = new mongoose.Schema({
  bar: String,
  people_attending: Number,
}, {collection: 'bars' });

module.exports = mongoose.model('Bars', BarsSchema);

//activities: { date: [] } 