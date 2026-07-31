const express = require("express");
const router = express.Router();

const { createAdmin, getAllAdmins, updateAdmin } = require("../controllers/admins");

router.post("/create-admin", createAdmin);
router.get("/get-all-admins", getAllAdmins);
router.patch("/update-admin/:id", updateAdmin);
// router.route('/:id').get(getJob).patch(updateJob).delete(deleteJob);

module.exports = router;
