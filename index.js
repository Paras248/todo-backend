const app = require("./app");
const config = require("./config/config");

const connectDb = require("./config/db");

const port = config.port;

connectDb();

app.listen(port, () => {
    console.log(`Server started successfully at port ${port}`);
});
