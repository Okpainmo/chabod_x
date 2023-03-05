//mongoose message model
const postModel = require('../models/post');

const createPost = async (req, res) => {
  const post = await postModel.create(req.body);
  res.status(201).json({ requestStatus: 'success', post });
};

const getAllPosts = async (req, res) => {
  const allPosts = await postModel.find({});
  res.status(200).json({ count: allPosts.length, allPosts });
};

module.exports = {
  createPost,
  getAllPosts,
};
