//mongoose message model
const postModel = require('../models/post');

const createPost = async (req, res) => {
  const post = await postModel.create(req.body);
  res.status(201).json({ requestStatus: 'success', post });
};

const getPost = async (req, res) => {
  // always name as only "id" from the front-end, then you can name it "whateverId" on the back-end.
  const { id: jobId } = req.params;
  // the above is same as - const jobId = req.params.id
  const post = await postModel.findOne({ _id: jobId });
  res.status(200).json({ requestStatus: 'success', post });
};

const getAllPosts = async (req, res) => {
  const allPosts = await postModel.find({});
  res
    .status(200)
    .json({ requestStatus: 'success', count: allPosts.length, allPosts });
};

module.exports = {
  createPost,
  getAllPosts,
  getPost,
};
