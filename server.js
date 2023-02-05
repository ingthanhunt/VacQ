const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

const hospitals = require('./routes/hospitals');

//Load env vars
dotenv.config({path: './config/config.env'});

//Connect to database
connectDB();

//Route files
const app = express();

//Body parser
app.use(express.json());

app.use('/api/v1/hospitals', hospitals);

const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, console.log('Server running in ', process.env.NODE_ENV, ' mode on port ', PORT));

//Handle unhandled promise rejections
process.on('unhandledRejection', (err,promise) => {
    console.log(`Error: ${err.message}`);
    //Close Server & exit process
    server.close(() => process.exit(1));
})