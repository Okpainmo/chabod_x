const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'please provide your name'],
    },
    email: {
      type: String,
      require: [true, 'Please provide your email'],
      match: [
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        ,
        'Please provide a valid email address',
      ],
      //   unique: true,
    },
    message: {
      type: String,
      required: [true, 'please type in your message'],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('message', messageSchema);
