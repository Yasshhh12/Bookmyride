const express = require("express");
const bodyParser = require('body-parser');

const {PORT} = require('./config/serverConfig');

const setupAndStartServer = async () =>{

    //creating the server object
    const app = express();

    //middleware
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    app.listen(PORT,()=>{
        console.log(`Server started at ${PORT}`);
    });
}

setupAndStartServer();