//mongoose message model
const adminModel = require('../models/admin.js');

const createAdmin = async (req, res) => {
  const admin = await adminModel.create(req.body);
  res.status(201).json({ requestStatus: 'success', admin });
};

const getAllAdmins = async (req, res) => {
  const allAdmins = await adminModel.find({});
  res
    .status(200)
    .json({ requestStatus: 'success', count: allAdmins.length, allAdmins });
};


// description: Delete admins
// request | route: DELETE | "/api/v1/delete-admin/:id"
// access: Public

const deleteAdmin = async (req, res) => {
  const { id } = req.params;
  //   console.log(id);
  try {
    const profileToDelete = await adminModel.findById(id);

    if (!profileToDelete) {
      return res
        .status(404)
        .json({ responseMessage: `admin with id: ${id} not found` });
    }

    const deletedProfile = await adminModel.findByIdAndRemove({ _id: id });

    res.status(200).json({
      responseMessage: 'admin deleted successfully',
      deletedProfile,
    });
  } catch (error) {
    res.status(500).json({
      responseMessage: 'admin creation failed: please try again',
      error: error.message,
    });
  }
};

module.exports = {
  createAdmin,
  getAllAdmins,
  deleteAdmin,
};
