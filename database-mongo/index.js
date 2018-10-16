const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

const db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

const restaurantSchema = mongoose.Schema({
  alias: String,
  categories: [],
  coordinates: {latitude: Number, longitude: Number},
  display_phone: String,
  distance: Number,
  id: String,
  image_url: String,
  is_closed: Boolean,
  location: {address1: String, address2: String, address3: String, city: String, country: String, display_address: String, state: String, zip_code: String},
  name: String,
  phone: String,
  rating: Number,
  review_count: Number,
  transactions: [],
  url: String,
});

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

const insertRes = (restaur) => {
  Restaurant.create(restaur, (err) => {
    if (err) {
      console.log(err);
    }
  })
}

module.exports = {
  insertRes,
};