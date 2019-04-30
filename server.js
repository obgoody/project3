require('dotenv').config()
const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const morgan = require('morgan'); // used to see requests
const db = require('./models');
const PORT = process.env.PORT || 3001;

const isAuthenticated = require("./config/isAuthenticated");
const auth = require("./config/auth");

// Setting CORS so that any website can
// Access our API
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Content-type,Authorization');
  next();
});

//log all requests to the console
app.use(morgan('dev'));

// Setting up express to use json and set it to req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose
  .connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/appDB', { useNewUrlParser: true, useCreateIndex: true })
  .then(() => console.log("MongoDB Connected!"))
  .catch(err => console.error(err));


// LOGIN ROUTE
app.post('/api/login', (req, res) => {
  auth
    .logUserIn(req.body.email, req.body.password)
    .then(dbUser => res.json(dbUser))
    .catch(err => res.status(400).json(err));
});

// SIGNUP ROUTE
app.post('/api/signup', (req, res) => {
  db.User.create(req.body)
    .then(data => res.json(data))
    .catch(err => res.status(400).json(err));
});

// Any route with isAuthenticated is protected and you need a valid token
// to access
app.get('/api/user/:id', isAuthenticated, (req, res) => {
  db.User.findById(req.params.id).then(data => {
    if (data) {
      res.json(data);
    } else {
      res.status(404).send({ success: false, message: 'No user found' });
    }
  }).catch(err => res.status(400).send(err));
});

// Getting garage sales route depending on zip code
app.get("/api/sales/:zip", (req, res) => {
  console.log(`request${req.body.zip}`);
  db.AddSale
    .find({zip: req.params.zip})
    .then(data => res.json(data));
})

// Add garage sale route
app.post('/api/addsale', (req, res) => {
  db.AddSale.create({
    title: req.body.title,
    description: req.body.description,
    line1: req.body.line1,
    line2: req.body.line2,
    city: req.body.city,
    state: req.body.state,
    zip: req.body.zip,
    addDate: {
      date: req.body.date,
      startTime: req.body.startTime,
      endTime: req.body.endTime
    },
    images: {
      url: req.body.url,
      alt: req.body.alt
    }
  })
    .then(data => res.json(data))
    .catch(err => res.status(400).json(err));
});

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.get('/', isAuthenticated /* Using the express jwt MW here */, (req, res) => {
  res.send('You are authenticated'); //Sending some response when authenticated
});

// Error handling
app.use(function (err, req, res, next) {
  if (err.name === 'UnauthorizedError') { // Send the error rather than to show it on the console
    res.status(401).send(err);
  }
  else {
    next(err);
  }
});

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function () {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
