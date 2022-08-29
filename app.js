const express = require("express");
const app = express();

const home = require("./routes/home");

// express middlewares
app.use(express.json());

//router middleware
app.use("/api", home);

module.exports = app;
