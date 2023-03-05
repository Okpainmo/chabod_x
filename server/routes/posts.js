const express = require('express');
const router = express.Router();

const { createPost, getAllPosts } = require('../controllers/posts');

router.post('/create-post', createPost);
router.get('/get-all-posts', getAllPosts);
// router.route('/:id').get(getJob).patch(updateJob).delete(deleteJob);

module.exports = router;
