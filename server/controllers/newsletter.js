//mongoose subscriber model
const subscriberModel = require('../models/subscriber');

const createSubscriber = async (req, res) => {
  const subscriber = await subscriberModel.create(req.body);
  res.status(201).json({ requestStatus: 'success', subscriber });
};

const getAllSubscribers = async (req, res) => {
  const allSubscribers = await subscriberModel.find({});
  res.status(200).json({
    requestStatus: 'success',
    count: allSubscribers.length,
    allSubscribers,
  });
};

module.exports = {
  createSubscriber,
  getAllSubscribers,
};
