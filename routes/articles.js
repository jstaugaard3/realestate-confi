const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator/check');

const User = require('../models/User');
const Article = require('../models/Articles');
// **** const Contact = require('../models/Contacts');

// @route     GET api/articles
// @desc      Get all news articles
// @access    Private
router.get('/', auth, async (req, res) => {
  try {
    const articles = await Article.find().sort({
      date: -1
    });
    res.json(articles);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});


// @route     GET api/articles/:id
// @desc      Get all news articles
// @access    Private
router.get('/:id', auth, async (req, res) => {
  try {
    console.log("In router");
    console.log(req.params.id)
    const articles = await Article.find({ property: req.params.id }).sort({
      date: -1
    });
    res.json(articles);
  } catch (err) {
    console.log("in the error message");
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});











// @route     POST api/articles
// @desc      Add new article
// @access    Private
router.post(
  '/',
  [
    auth,
    [
      check('source', 'Source is required')
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { source, heading, link, property, date } = req.body;

    try {
      const newArticle = new Article({
        source,
        heading,
        link,
        property,
        date,
        user: req.user.id
      });

      const article = await newArticle.save();

      res.json(article);
    } catch (err) {
      console.error(er.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route     PUT api/articles/:id
// @desc      Update article
// @access    Private
router.put('/:id', auth, async (req, res) => {
  const { source, heading, link, property, date } = req.body;

  // Build article object
  const articleFields = {};
  if (source) articleFields.source = source;
  if (heading) articleFields.heading = heading;
  if (link) articleFields.link= link;
  if (property) articleFields.property = property;
  if (date) articleFields.date = date;

  try {
    let article = await Article.findById(req.params.id);

    if (!article) return res.status(404).json({ msg: 'Article not found' });

    // Make sure user owns article
    if (article.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not authorized' });
    }

    article = await Article.findByIdAndUpdate(
      req.params.id,
      { $set: articleFields },
      { new: true }
    );

    res.json(article);
  } catch (err) {
    console.error(er.message);
    res.status(500).send('Server Error');
  }
});

// @route     DELETE api/articles/:id
// @desc      Delete article
// @access    Private
router.delete('/:id', auth, async (req, res) => {
  try {
    let article = await Article.findById(req.params.id);

    if (!article) return res.status(404).json({ msg: 'Article not found' });

    // Make sure user owns article
    if (article.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not authorized' });
    }

    await Article.findByIdAndRemove(req.params.id);

    res.json({ msg: 'Article removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;