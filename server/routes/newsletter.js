const express = require("express");
const router = express.Router();

const {
  createSubscriber,
  getAllSubscribers,
  deleteSubscriber,
} = require("../controllers/newsletter");

router.post("/create-subscriber", createSubscriber);
router.get("/get-all-subscribers", getAllSubscribers);
router.delete("/delete-subscriber/:id", deleteSubscriber);
// router.route('/:id').get(getJob).patch(updateJob).delete(deleteJob);

module.exports = router;
