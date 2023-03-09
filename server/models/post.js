const mongoose = require('mongoose');

const postSchema = new mongoose.Schema(
  {
    postTags: {
      type: String,
      required: [true, 'please add tags that are related to this post'],
    },
    postTitle: {
      type: String,
      required: [true, 'please add the title of the post'],
    },
    postSlug: {
      type: String,
      required: [true, 'please provide a slug for the post'],
    },
    postAuthor: {
      type: String,
      required: [true, 'please add an author name for the post'],
    },
    postDate: {
      type: String,
      required: [true, 'please add the date of the post'],
    },
    postCategory: {
      type: String,
      required: [true, 'please add a category for the post'],
    },
    postBrief: {
      type: String,
      required: [true, 'please add a brief summary of the post'],
    },
    createdBy: {
      type: String,
      required: [true, 'please add your name(initial name only)'],
    },
    reactions: {
      type: Number,
      default: 0,
    },
    postBody: {
      type: Array,
      default: [],
    },
    postTOC: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('post', postSchema);
