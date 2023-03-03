//mongoose message model
const adminModel = require('../models/admin');

const createAdmin = async (req, res) => {
  const admin = await adminModel.create(req.body);
  res.status(201).json({ requestStatus: 'success', admin });
};

const getAllAdmins = async (req, res) => {
  const allAdmins = await adminModel.find({});
  res.status(200).json({ count: allAdmins.length, allAdmins });
};

module.exports = {
  createAdmin,
  getAllAdmins,
};
