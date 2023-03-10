const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema(
  {
    categoryName: {
      type: String,
      required: [true, 'please provide a value as "category name"'],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('category', categorySchema);
