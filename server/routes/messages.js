const express = require('express');
const router = express.Router();

const { sendMessage, getAllMessages } = require('../controllers/messages');

router.post('/send-message', sendMessage);
router.get('/get-all-messages', getAllMessages);
// router.route('/:id').get(getJob).patch(updateJob).delete(deleteJob);

module.exports = router;
