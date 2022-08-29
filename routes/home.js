const express = require("express");
const Router = express.Router();
const { getItems, postItem } = require("../controllers/homeController");

Router.route("/").get(getItems);
Router.route("/").post(postItem);

module.exports = Router;
