const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use(express.static('../frontend'));

const userRoutes = require('./routes/emproute');

app.use('/employer', userRoutes);

const mongoURI = process.env.MONGO_URI;

mongoose
  .connect(mongoURI)
  .then(() => {
    const PORT = process.env.PORT || 4000;
    app.listen(PORT, () => {
      console.log(`App started on port ${PORT}`);
    });
  }).catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });