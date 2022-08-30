const express = require("express");
const app = express();

// swagger setup
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");
const swaggerDocument = YAML.load("./swagger.yaml");

// file imports
const home = require("./routes/home");

// swagger middleware
app.use("/api/v1/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// express middlewares
app.use(express.json());

//router middleware
app.use("/api/v1", home);

module.exports = app;
