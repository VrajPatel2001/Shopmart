const express = require("express");
const mongoose =require("mongoose");
require('dotenv').config({ path: 'config/keys.env' });

const app = express();

app.use(express.json());
const userController = require("./controllers/UserController");
const productController = require("./controllers/ProductController");



app.use("/user",userController);
app.use("/product",productController)




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