const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator/check');

const User = require('../models/User');
const Building = require('../models/Buildings');

// @route     GET api/buildings
// @desc      Get all buildings
// @access    Private
router.get('/', auth, async (req, res) => {
 
  
  try {
    const buildings = await Building.find().sort({
      date: -1
    });
    res.json(buildings);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});


// @route     GET api/buildings/:id
// @desc      Get single building
// @access    Private
router.get('/:id', auth, async (req, res) => {
  
  try {
    const buildings = await Building.find( { _id: req.params.id}).sort({
      date: -1
    });
    res.json(buildings);
    console.log(buildings);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});







// @route     POST api/buildings
// @desc      Add new building
// @access    Private
router.post(
  '/',
  [
    auth,
    [
      check('street', 'Street is required')
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { street, city, state, lat, lng } = req.body;

    try {
      const newBuilding = new Building({
        street,
        city,
        state,
        lat,
        lng,
        user: req.user.id
      });

      const building = await newBuilding.save();

      res.json(building);
    } catch (err) {
      console.error(er.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route     PUT api/buildings/:id
// @desc      Update building
// @access    Private
router.put('/:id', auth, async (req, res) => {
  const { street, city, state, lat, lng } = req.body;

  // Build contact object
  const contactFields = {};
  if (street) contactFields.street = street;
  if (city) contactFields.city = city;
  if (state) contactFields.state = state;
  if (lat) contactFields.lat = lat;
  if (lng) contactFields.lng = lng;

  try {
    let building = await Building.findById(req.params.id);

    if (!building) return res.status(404).json({ msg: 'Building not found' });

    // Make sure user owns building
    if (building.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not authorized' });
    }

    building = await Building.findByIdAndUpdate(
      req.params.id,
      { $set: buildingFields },
      { new: true }
    );

    res.json(contact);
  } catch (err) {
    console.error(er.message);
    res.status(500).send('Server Error');
  }
});

// @route     DELETE api/buildings/:id
// @desc      Delete building
// @access    Private
router.delete('/:id', auth, async (req, res) => {
  try {
    let building = await Building.findById(req.params.id);
    if (!building) return res.status(404).json({ msg: 'Article not found' });

    await Building.findByIdAndRemove(req.params.id);

    res.json({ msg: 'Building removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;