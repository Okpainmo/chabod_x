//mongoose message model
const messageModel = require('../models/message');

const sendMessage = async (req, res) => {
  const message = await messageModel.create(req.body);
  res.status(201).json({ requestStatus: 'success', message });
};

const getAllMessages = async (req, res) => {
  const allMessages = await messageModel.find({});
  res
    .status(200)
    .json({ requestStatus: 'success', count: allMessages.length, allMessages });
};

// description: Delete message
// request | route: DELETE | "/api/v1/message/delete-message/:id"
// access: Public

const deletedMessage = async (req, res) => {
  const { id } = req.params;
  //   console.log(id);

  try {
    const deleteMessage = await messageModel.findById(id);

    if (!deleteMessage) {
      return res
        .status(404)
        .json({ responseMessage: `admin with id: ${id} not found` });
    }

    const deleteProfile = await messageModel.findByIdAndRemove({ _id: id })

    res.status(200).json({
      responseMessage: 'Message deleted successfully',
      deletedMessage,
    });
  } catch (error) {
    res.status(500).json({
      responseMessage: 'delete message failed: please try again',
      error: error.message,
    });

  }

}
module.exports = {
  sendMessage,
  getAllMessages,
  deletedMessage,
};
