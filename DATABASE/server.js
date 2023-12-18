const express = require('express');
const app = express();
const bodyParser = require('body-parser')
//connect to db with mongoose
const mongoose = require('mongoose');
const mongoURI = `mongodb+srv://samsmolen:EBZHXV2CYV9sPRLz@cluster0.i3hzkyb.mongodb.net/myApp?retryWrites=true&w=majority`;

mongoose.connect(mongoURI)
console.log('mongoose connected!');

app.use(bodyParser.json())

// SCHEMA //
const carSchema = mongoose.Schema({
  brand:String,
  model:String,
  year:Number,
  avail:Boolean
});

const Car = mongoose.model('Car',carSchema);
////////////

app.post('/api/addcar',async(req,res)=>{
  try{
      const addCar = new Car({
          brand: req.body.brand,
          model: req.body.model,
          year: req.body.year,
          avail: req.body.avail
      })
      const newCar = await addCar.save();
      res.sendStatus(200)
  } catch(err){
      console.log(err)
  }
})


const port = process.env.PORT || 3001;
app.listen(port);
console.log(`Server listening on port ${port}`);