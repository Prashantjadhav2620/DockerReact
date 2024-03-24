
const mongoose = require("mongoose");
require('dotenv').config();
// const URI = "mongodb+srv://prashantjadhav9089:13QQen2eGu3nWTIT@reactdockerdemoservercl.qd4loz2.mongodb.net/DockerReactDb?retryWrites=true&w=majority&appName=ReactDockerDemoServerCluster";

const URI =process.env.MONGODBURI

const connectDb = async () => {
    try {
        await mongoose.connect(URI);
        console.log("Connection successful");
    } catch (error) {
        console.error("Connection failed:", error);
        process.exit(0); // Exit with failure
    }
};

module.exports = connectDb;
