const express = require("express");
const mongoose =require("mongoose");
require('dotenv').config({ path: 'config/keys.env' });

const app = express();

app.use(express.json());



app.listen(process.env.PORT,()=>{
    console.log(`RESTful API is up and running on PORT ${process.env.PORT}`);

    mongoose.connect(process.env.MONGO_DB_CONNECTION_STRING)
    .then(()=>{
        console.log(`Connected to MongoDB`)
    })
    .catch(err=>{
        console.log(`Error ${err}`);
    })


})