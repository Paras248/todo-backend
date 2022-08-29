require("dotenv").config();

const config = {
    port: process.env.PORT || 4000,
    db_url: process.env.DB_URL,
};

module.exports = config;
