// dotenv import
require('dotenv').config();

// cors(cross origin resource sharing)
const cors = require('cors');

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
const adminsRouter = require('./routes/admins');

// use-routes
app.use('/api/v1/messages', messagesRouter);
app.use('/api/v1/newsletter', newsletterRouter);
app.use('/api/v1/admins', adminsRouter);

// home-route
app.get('/api', (req, res) => {
  res.status(200).send('app is live - welcome to chabod_x');
});

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
