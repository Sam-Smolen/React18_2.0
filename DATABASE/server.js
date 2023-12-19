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

app.get('/api/getcars',async(req, res)=> {
  try {
    let doc = await Car.find({})
    // let doc = await Car.find({brand:'Ford'})
    // let doc = await Car.find({_id:'6580dcfa5c14505a79de7a88'})
    // let doc = await Car.findOne({_id:'6580dd3c5c14505a79de7a8a'})
    // let doc = await Car.findById('6580dd935c14505a79de7a8c')
    res.json(doc)
  }catch(err){
    console.log(err)
  }
})

app.post('/api/removecar',async(req, res)=> {
  try {
    let brand = req.body.brand
    let doc = await Car.findOneAndDelete({brand:brand})
    res.json(doc)
  }catch(err){
    console.log(err)
  }
})


const port = process.env.PORT || 3001;
app.listen(port);
console.log(`Server listening on port ${port}`);