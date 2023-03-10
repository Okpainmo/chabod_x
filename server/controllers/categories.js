//mongoose message model
const categoryModel = require('../models/category');

const createCategory = async (req, res) => {
  const category = await categoryModel.create(req.body);
  res.status(201).json({ requestStatus: 'success', category });
};

const getAllCategories = async (req, res) => {
  const allCategories = await categoryModel.find({});
  res.status(200).json({
    requestStatus: 'success',
    count: allCategories.length,
    allCategories,
  });
};

module.exports = {
  createCategory,
  getAllCategories,
};
