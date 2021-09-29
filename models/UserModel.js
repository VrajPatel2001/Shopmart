const mongoose = require('mongoose');
const bcrypt = require("bcryptjs");

const {Schema} = mongoose;

const userSchema = new Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    email:
    {
        type:String,
        required: true,
    },
    password:
    {
        type:String,
        required: true
    },
    phoneNumbers:[{type:Number,default:[]}]
    
    })
    
    userSchema.pre("save",function(next)
    {
        //Salt random generated characters or strings
        bcrypt.genSalt(10)
        .then((salt)=>{
            bcrypt.hash(this.password,salt)
            .then((encryptPassword)=>{
                this.password = encryptPassword;
                next();
            })
    .catch(err=>{
        res.status(500).json({
            message :err
        })
    });
    
        })
        .catch(err=>{
            res.status(500).json({
                message :err
            })
        });
    
    
    });

const User = mongoose.model('User',userSchema);

module.exports = User;