//mongoose message model
const categoryModel = require("../models/category");

const createCategory = async (req, res) => {
  const category = await categoryModel.create(req.body);
  res.status(201).json({ requestStatus: "success", category });
};

const getAllCategories = async (req, res) => {
  const allCategories = await categoryModel.find({});
  res.status(200).json({
    requestStatus: "success",
    count: allCategories.length,
    allCategories,
  });
};

const deleteCategory = async (req, res) => {
  const { id } = req.params;
  try {
    const categoryToDelete = await categoryModel.findById(id);

    if (!categoryToDelete) {
      return res.status(404).json({
        responseMessage: `category delete failed, profile with ${id} not found`,
      });
    }

    const deletedCategory = await categoryModel.findByIdAndRemove({ _id: id });

    res.status(200).json({
      requestStatus: "category deleted successfully",
      deletedCategory,
    });
  } catch (error) {
    res.status(400).json({
      responseMessage: "failed",
      error: error.message,
    });
  }
};
module.exports = {
  createCategory,
  getAllCategories,
  deleteCategory,
};
