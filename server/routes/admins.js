const express = require('express');
const router = express.Router();

const { createAdmin, getAllAdmins, deleteAdmin } = require('../controllers/admins.js');

router.post('/create-admin', createAdmin);
router.get('/get-all-admins', getAllAdmins);
router.delete('/delete-admin/:id', deleteAdmin);
// router.route('/:id').get(getJob).patch(updateJob).delete(deleteJob);

module.exports = router;
