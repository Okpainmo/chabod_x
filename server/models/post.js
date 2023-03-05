const mongoose = require('mongoose');

const postSchema = new mongoose.Schema(
  {
    postTags: {
      type: String,
      required: [true, 'please add tags that are related to this post'],
    },
    postTitle: {
      type: String,
      required: [true, 'please provide your name'],
    },
    postSlug: {
      type: String,
      required: [true, 'please provide your name'],
    },
    postAuthor: {
      type: String,
      required: [true, 'please provide your name'],
    },
    postDate: {
      type: String,
      required: [true, 'please provide your name'],
    },
    postCategory: {
      type: String,
      required: [true, 'please provide your name'],
    },
    postBrief: {
      type: String,
      required: [true, 'please provide your name'],
    },
    createdBy: {
      type: String,
      required: [true, 'please provide your name'],
    },
    reactions: {
      type: Number,
      default: 0,
    },
    postBody: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('post', postSchema);
