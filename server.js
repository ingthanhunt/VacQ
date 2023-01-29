const express = require('express');
const dotenv = require('dotenv');

const hospitals = require('./routes/hospitals');

dotenv.config('./config/config.env');

const app = express();

app.use('/api/v1/hospitals', hospitals);

const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log('Server running in ', process.env.NODE_ENV, ' mode on port ', PORT));