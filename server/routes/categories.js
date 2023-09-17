const express = require("express");
const router = express.Router();

const { createCategory, getAllCategories, deleteCategory } = require("../controllers/categories");

router.post("/create-category", createCategory);
router.get("/get-all-categories", getAllCategories);
router.delete("/delete-category/:id", deleteCategory);
// router.route('/:id').get(getJob).patch(updateJob).delete(deleteJob);

module.exports = router;
