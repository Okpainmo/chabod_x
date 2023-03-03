const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'please provide your name'],
    },
    about: {
      type: String,
      required: [true, 'please type in your message'],
    },
    niche: {
      type: String,
      required: [true, 'please type in your message'],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('admin', adminSchema);
