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

const updatePost = async (req, res) => {
  const postId = req.params.id;

  const post = await postModel.findByIdAndUpdate({ _id: postId }, req.body, {
    new: true,
    runValidators: true,
  });

  // if (!post) {
  //   throw new NotFoundError(`No job with id ${jobId}`);
  // }

  res.status(201).json({ requestStatus: 'success', post });
};


const deletePost = async (req, res) => {
  try {
    const postId = req.params.id;
    const deletedPost = await postModel.findByIdAndDelete({ _id: postId });
    if (!deletedPost) {
      return res
        .status(404)
        .json({ requestStatus: 'fail', message: 'Post not found' });
    }
    res.status(200).json({ requestStatus: 'success', deletedPost });
  } catch (error) {
    res.status(500).json({ requestStatus: 'error', message: error.message });
  }
};

module.exports = {
  createPost,
  getAllPosts,
  getPost,
  updatePost,
  deletePost
};
