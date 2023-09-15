const express = require('express');
const router = express.Router();

const { sendMessage, getAllMessages, deletedMessage } = require('../controllers/messages.js');

router.post('/send-message', sendMessage);
router.get('/get-all-messages', getAllMessages);
router.delete('/delete-message/:id', deletedMessage);
// router.route('/:id').get(getJob).patch(updateJob).delete(deleteJob);

module.exports = router;
