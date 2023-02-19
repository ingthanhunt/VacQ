const express = require('express');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const connectDB = require('./config/db');

//Route files
const hospitals = require('./routes/hospitals');
const auth = require('./routes/auth');

//Load env vars
dotenv.config({path: './config/config.env'});

//Connect to database
connectDB();

//Route files
const app = express();

//Body parser
app.use(express.json());

//Cookie parse
app.use(cookieParser());

app.use('/api/v1/hospitals', hospitals);
app.use('/api/vi/auth', auth);

const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, console.log('Server running in ', process.env.NODE_ENV, ' mode on port ', PORT));

//Handle unhandled promise rejections
process.on('unhandledRejection', (err,promise) => {
    console.log(`Error: ${err.message}`);
    //Close Server & exit process
    server.close(() => process.exit(1));
})