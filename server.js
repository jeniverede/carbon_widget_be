const express = require('express');
const mongoose = require('mongoose');
const driveRoutes = require('./routes/driveRoute');

const app = express();

/* npm i cors */
const cors = require('cors');
/* npm i dotenv */
require('dotenv').config();
/* import routes/subscribe */
const subscribe = require('./routes/subscribeRoute');

/* import connectDB from dbinit.js */
const connectDB = require('./dbinit');
/* calling connectDB */
connectDB();

/* middleware, standard for web applications */
/* specifies json files are being used  */
app.use(express.json());
/* determines who can/cannot connect to DB */
app.use(cors());
/* enables post request/form submission from an html page to the database */
/* extended: true enables access to more data types */
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3000;

/* routes */
app.get('/', (req, res) => {
    res.send('Hello Node API!');
});

app.use('/router/subscribe', subscribe);
app.use('/router/drive', driveRoutes);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost: ${PORT}`);
});