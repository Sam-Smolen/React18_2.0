const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
const mongoURI = `mongodb+srv://samsmolen:EBZHXV2CYV9sPRLz@cluster0.i3hzkyb.mongodb.net/Auth?retryWrites=true&w=majority`;

mongoose.connect(mongoURI)
console.log('mongoose connected!');

// MIDDLWARES
app.use(bodyParser.json());

// IMPORT MODELS
const {User} = require('./models/user.js');

// SERVER ROUTING

const port = process.env.PORT || 3000;
app.listen(port, ()=> {
    console.log(`Server listening on port ${port}!`);
});