const express = require('express');
const app = express();
//connect to db with mongoose
const mongoose = require('mongoose');
const mongoURI = `mongodb+srv://samsmolen:EBZHXV2CYV9sPRLz@cluster0.i3hzkyb.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(mongoURI)
console.log('mongoose connected!');

// SCHEMA //
const carSchema = mongoose.Schema({
  brand:String,
  model:String,
  year:Number,
  avail:Boolean
});

const Car = mongoose.model('Car',carSchema);
////////////



const port = process.env.PORT || 3001;
app.listen(port);
console.log(`Server listening on port ${port}`);