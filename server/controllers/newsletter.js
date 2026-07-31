//mongoose subscriber model
const subscriberModel = require("../models/subscriber");

const createSubscriber = async (req, res) => {
  const subscriber = await subscriberModel.create(req.body);
  res.status(201).json({ requestStatus: "success", subscriber });
};

const getAllSubscribers = async (req, res) => {
  const allSubscribers = await subscriberModel.find({});
  res.status(200).json({
    requestStatus: "success",
    count: allSubscribers.length,
    allSubscribers,
  });
};

const deleteSubscriber = async (req, res) => {
  const { id } = req.params;
  try {
    const subscriberToDelete = await subscriberModel.findById(id);

    if (!subscriberToDelete) {
      return res.status(404).json({
        responseMessage: `subcriber delete failed, profile with ${id} not found`,
      });
    }

    const deletedSubscriber = await subscriberModel.findByIdAndRemove({ _id: id });

    res.status(200).json({
      requestStatus: "subscriber deleted successfully",
      deletedSubscriber,
    });
  } catch (error) {
    res.status(400).json({
      responseMessage: "failed",
      error: error.message,
    });
  }
};

module.exports = {
  createSubscriber,
  getAllSubscribers,
  deleteSubscriber,
};
