const express = require('express');
const router = express.Router();

const {
  createSubscriber,
  getAllSubscribers,
} = require('../controllers/newsletter');

router.post('/create-subscriber', createSubscriber);
router.get('/get-all-subscribers', getAllSubscribers);
// router.route('/:id').get(getJob).patch(updateJob).delete(deleteJob);

module.exports = router;
