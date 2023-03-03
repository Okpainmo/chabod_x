const express = require('express');
const router = express.Router();

const { createAdmin, getAllAdmins } = require('../controllers/admins');

router.post('/create-admin', createAdmin);
router.get('/get-all-admins', getAllAdmins);
// router.route('/:id').get(getJob).patch(updateJob).delete(deleteJob);

module.exports = router;
