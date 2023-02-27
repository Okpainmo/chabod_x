//mongoose message model
const messageModel = require('../models/message');

const sendMessage = async (req, res) => {
  const message = await messageModel.create(req.body);
  res.status(201).json({ requestStatus: 'success', message });
};

const getAllMessages = async (req, res) => {
  const allMessages = await messageModel.find({});
  res.status(200).json({ count: allMessages.length, allMessages });
};

module.exports = {
  sendMessage,
  getAllMessages,
};
