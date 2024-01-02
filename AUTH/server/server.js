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

app.post('/api/user',async(req,res)=> {
    try {
       const user = new User({
         email: req.body.email,
         password: req.body.password
       })
       let doc = await user.save()
       res.status(200).send(doc)
    }catch(err){
        res.status(400).send(err)
    }
})

app.post('/api/user/login',async(req,res)=>{
    try{
        // 1 -find the user,if good, -> move forward
        let user = await User.findOne({'email':req.body.email});
        if(!user) throw 'User not found';

        // 2 - compare the password with the HASHED password on the DB, -> move forward
        res.status(200).send(user);
    } catch(error){
        res.json({message:error})
    }
    

    // 3 - send response

})


const port = process.env.PORT || 3000;
app.listen(port, ()=> {
    console.log(`Server listening on port ${port}!`);
});