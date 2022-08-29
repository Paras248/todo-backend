const mongoose = require("mongoose");

const config = require("./config");

const { db_url } = config;

const connectDb = async () => {
    await mongoose
        .connect(db_url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(() => {
            console.log("Database connected successfully");
        })
        .catch((error) => {
            console.log("DB connection issues");
            console.log(error);
            process.exit(1);
        });
};

module.exports = connectDb;
