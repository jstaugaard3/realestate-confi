const mongoose = require('mongoose');

const BuildingSchema = mongoose.Schema({
  street: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true
  },
  lat: {
    type: String,
    required: true
  },
  lng: {
    type: String,
    required: true
  }

});

module.exports = mongoose.model('building', BuildingSchema);