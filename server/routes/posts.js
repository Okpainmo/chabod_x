const express = require('express');
const router = express.Router();

const {
  createPost,
  getAllPosts,
  getPost,
  updatePost,
} = require('../controllers/posts');

router.post('/create-post', createPost);
router.get('/get-all-posts', getAllPosts);
router.route('/:id').get(getPost).patch(updatePost);
// router.route('/:id').get(getPost).patch(updateJob).delete(deleteJob);

module.exports = router;
