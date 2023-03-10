const express = require('express');
const router = express.Router();

const {
  createCategory,
  getAllCategories,
} = require('../controllers/categories');

router.post('/create-category', createCategory);
router.get('/get-all-categories', getAllCategories);
// router.route('/:id').get(getJob).patch(updateJob).delete(deleteJob);

module.exports = router;
