//mongoose message model
const adminModel = require("../models/admin");

const createAdmin = async (req, res) => {
  const admin = await adminModel.create(req.body);
  res.status(201).json({ requestStatus: "success", admin });
};

const getAllAdmins = async (req, res) => {
  const allAdmins = await adminModel.find({});
  res.status(200).json({ requestStatus: "success", count: allAdmins.length, allAdmins });
};

const updateAdmin = async (req, res) => {
  const { id } = req.params;

  try {
    const adminToUpdate = await adminModel.findById(id);

    if (!adminToUpdate) {
      return res.status(404).json({
        requestStatus: "update failed: request not successful",
        error: "profile not found",
      });
    }
    const updateAdmin = await adminModel.findByIdAndUpdate({ _id: id }, req.body, {
      new: true,
      runValidators: true,
    });

    return res.status(200).json({
      requestStatus: "update successful",
      updateAdmin,
    });
  } catch (error) {
    return res.status(500).json({
      requestStatus: "update failed: request not successful",
      error: error.message,
    });
  }
};

module.exports = {
  createAdmin,
  getAllAdmins,
  updateAdmin,
};
