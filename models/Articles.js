const mongoose = require('mongoose');

const ArticleSchema = mongoose.Schema({
  user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'users'
  },
  source: {
    type: String,
    required: true
  },
  heading: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true
  },
  property: {
      type: String,
      required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('article', ArticleSchema);