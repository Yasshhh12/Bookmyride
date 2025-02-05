const express = require("express");
// require('dotenv').config();

const {PORT} = require('./config/serverConfig');

const setupAndStartServer = async () =>{

    //creating the server object
    const app = express();
    app.listen(PORT,()=>{
        console.log(`Server started at ${PORT}`);
    });
}

setupAndStartServer();