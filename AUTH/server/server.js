const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const app = express();
// CONNECT TO MONGO WITH MONGOOSE
const mongoose = require('mongoose');
const mongoURI = `mongodb+srv://samsmolen:EBZHXV2CYV9sPRLz@cluster0.i3hzkyb.mongodb.net/Auth?retryWrites=true&w=majority`;

mongoose.connect(mongoURI)
console.log('mongoose connected!');
/////////////////////////////////////

// MIDDLWARES
app.use(bodyParser.json());
app.use(cookieParser());
// IMPORT MODELS
const {User} = require('./models/user.js');

// SERVER ROUTING

// ADD AND SAVE NEW USER TO DB

app.post('/api/user/login',async(req,res)=>{
    try{
        // 1 -find the user,if good, -> move forward
        let user = await User.findOne({'email':req.body.email});
        if(!user) throw 'User not found';

        // 2 - compare the password with the HASHED password on the DB, -> move forward
            user.comparePassword(req.body.password,(err,isMatch)=>{
                if(err) throw 'Bad password';
                if(!isMatch) return  res.status(400).json({
                    message:'Bad password'
                })

                // 3 - send response
                user.generateToken((err,user)=>{
                    if(err) throw err;
                    res.cookie('auth',user.token).send('ok')
                })
            })
    } catch(error){
        res.json({message:error})
    }
})

app.get('/api/books',async(req,res)=>{
    let token = req.cookies.auth;

    User.findByToken(token,(err,user)=>{
        if(err) throw err;
        if(!user) return  res.status(400).json({
            message:'Bad token'
        });
        res.status(200).send(user)
    });
})



const port = process.env.PORT || 3000;
app.listen(port, ()=> {
    console.log(`Server listening on port ${port}!`);
});