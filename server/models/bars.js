const mongoose = require('mongoose');

const now = new Date();
console.log(now);
const timeToExpire = new Date(
  now.getFullYear(),
  now.getMonth(),
  now.getDate(), 3, 0, 0, 0
);

timeToExpire.setDate(timeToExpire.getDate() + 1)

const BarsSchema = new mongoose.Schema({
  bar: String,
  people_attending: Number,
  expireAt: { type: Date, default: timeToExpire, expires: 0 }
}, {collection: 'bars' });

module.exports = mongoose.model('Bars', BarsSchema);

