const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    email:{
        type:String,
        required:true,
        trim:true,
        unique:1
    },
    password:{
        type:String,
        required:true,
        minlength:6
    }
});

userSchema.pre('save',function(next){
    var user = this;

    if(user.isModified('password')){
        bcrypt.genSalt(SALT_I,(err,salt)=>{
            bcrypt.hash(user.password,salt,(err,hash)=>{
                if(err) return next(err);
                user.password = hash;
                next();
            })
        })
    } else{
        next()
    }
})

userSchema.methods.comparePassword = function(candidatePassword,cb){
    // candidatePassword = req.body.password
    bcrypt.compare(candidatePassword,this.password,function(err,isMatch){
        if(err) cb(err);
        cb(null,isMatch)
    })
}

const User = mongoose.model('User',userSchema);
module.exports = { User };