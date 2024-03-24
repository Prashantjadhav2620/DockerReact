require('dotenv').config;
const express = require('express');
const app = express();
const router = require("./router/auth-router");
const ConnectDb = require("./utils/db");


//middleware
app.use(express.json());

app.use("/api/auth",router);

ConnectDb().then(()=>{

    app.listen(5000,()=>{console.log("Server started on port 5000")});
})
