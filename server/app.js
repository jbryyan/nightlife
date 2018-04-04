// server/app.js
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const config = require('./config/main');
const mongoose = require('mongoose');
const register = require('./controllers/register');
const login = require('./controllers/login');
const expressjwt = require('express-jwt');

// Setup logger
app.use(morgan('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors({
  exposedHeaders:['Authorization']
}));

//Connect to db using mongoose
//mongoose.connect(process.env.URL, { useMongoClient: true });
mongoose.connect(config.database);

var auth = expressjwt({ secret: config.secret, requestProperty: 'tokenPayload'});

// Register user 
app.post('/api/register', register);

// Login user with user credentials
app.post('/api/login', login);



// Return error if not authorized
app.use(function(err, req, res, next){
  console.log(err);
  
  if(err.name === 'UnauthorizedError') {
    res.status(401).send('Invalid token...');
  }
  return res.status(err.status || 500).send(err); 
})


module.exports = app;