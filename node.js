const express = require("express");

const node = express();

// server.js
require('dotenv').config() 
console.log(`The server will run on port ${process.env.SERVER_PORT}`);
console.log(`The secret key will be used to connect to the third party API`);
console.log(`The server will connect to the database with the user and the password`);

const port = process.env.SERVER_PORT;


const testHandler = (req,res) => {
    res.send(`I am ${process.env.MY_NAME}, wilder in ${process.env.MY_CITY}, and I love ${process.env.MY_LANGUAGE}`)
}

node.get("/", testHandler)

node.listen(port, () =>  {
    console.log(`The server will run on port ${process.env.SERVER_PORT}`);
console.log(`MY_NAME: ${process.env.MY_NAME}`);
console.log(`MY_CITY: ${process.env.MY_CITY}`);
console.log(`MY_LANGUAGE: ${process.env.MY_LANGUAGE}`);

});