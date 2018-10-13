require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const yelp = require('yelp-fusion');

const categories = require('./categories.js')
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// const items = require('../database-mongo');

const app = express();

app.use(express.static(__dirname + '/../react-client/dist'));

const client = yelp.client(process.env.YELPAPI);

const randomBound = (min, max) => Math.round(Math.random() * (max - min) + min);

app.get('/api/random/:location', function (req, res) {
  const searchRequest = {
    radius: 16093,
    location: req.params.location,
    limit: 50,
    category: categories[randomBound(0, categories.length - 1)],
    open_now: true,
  };
  client.search(searchRequest).then(response => {
    const randomResult = response.jsonBody.businesses[randomBound(0, response.jsonBody.businesses.length - 1)];
    res.send(JSON.stringify(randomResult, null, 4)); 
    }).catch(e => {
      console.log(e);
    });
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

