// dotenv import
require('dotenv').config();

// cors(cross origin resource sharing)
const cors = require('cors');

// //mongoose subscriber model
// const subscriberModel = require('./models/subscriber');

// //mongoose message model
// const messageModel = require('./models/message');

// node-mailer
// const nodemailer = require('nodemailer');

// express init
const express = require('express');
const app = express();

// connect DB
const dbConnector = require('./db/connector');

// express middleware for handling json data in post-requests
app.use(express.json());

// use cors
app.use(cors());

// routers
const messagesRouter = require('./routes/messages');
const newsletterRouter = require('./routes/newsletter');

// use-routes
app.use('/api/v1/messages', messagesRouter);
app.use('/api/v1/newsletter', newsletterRouter);

// pre-routes
app.get('/', (req, res) => {
  res.status(200).send('app is live');
});

// app.post('/newsletter/create-subscriber', async (req, res) => {
//   const subscriber = await subscriberModel.create(req.body);
//   res.status(201).json({ subscriber });
// });

// app.get('/newsletter/get-all-subscribers', async (req, res) => {
//   const allSubscribers = await subscriberModel.find({});
//   res.status(200).json({ count: allSubscribers.length, allSubscribers });
// });

// app.post('/messages/send-message', async (req, res) => {
//   const message = await messageModel.create(req.body);
//   res.status(201).json({ message });
// });

// app.get('/messages/get-all-messages', async (req, res) => {
//   const allMessages = await messageModel.find({});
//   res.status(200).json({ count: allMessages.length, allMessages });
// });

// serve
const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await dbConnector(process.env.MONGO_DB_URI);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
