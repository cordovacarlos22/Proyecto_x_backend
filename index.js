//! import devpendencies 
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');

// Load environment variables from .env file
dotenv.config();

// Connect to MongoDB
const app = express();
const PORT = process.env.PORT || 3000;
// middleware
app.use(cors());
app.use(bodyParser.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Conectado a MongoDB');
}).catch((err) => {
  console.error('Error conectando a MongoDB:', err.message);
});

/// rest route 
app.get("/", (req, res) => {
  res.send('Api is working successfully');
});

// listen to port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
