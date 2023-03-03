const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema(
  {
    adminName: {
      type: String,
      required: [true, 'please provide your name'],
    },
    adminBio: {
      type: String,
      required: [true, 'please provide a brief bio of yourself'],
    },
    adminNiches: {
      type: String,
      required: [true, 'please type in niche(s)'],
    },
    adminPassword: {
      type: String,
      required: [true, 'please add a password'],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('admin', adminSchema);
