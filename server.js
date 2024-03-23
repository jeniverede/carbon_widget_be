const express = require("express");
const mongoose = require("mongoose");

/* import routes */
const driveRoutes = require("./routes/driveRoute");
const dietRoutes = require("./routes/dietRoute");
const subscribe = require("./routes/subscribeRoute");

const app = express();

/* npm i cors */
const cors = require("cors");

/* npm i dotenv */
require("dotenv").config();

/* import connectDB from dbinit.js */
const connectDB = require("./dbinit");

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
app.get("/", (req, res) => {
  res.send("Hello Node API!");
});

app.use("/drive", driveRoutes);
app.use("/diet", dietRoutes);
app.use("/subscribe", subscribe);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost: ${PORT}`);
});
