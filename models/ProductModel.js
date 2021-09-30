const mongoose = require('mongoose');
const {Schema} = mongoose;

const productSchema = new Schema({
    productName:{
        type: String,
        required: true
    },
    productPrice:{
        type: Number,
        required: true
    },
    productDesription:{
        type: String,
        
    },
    productCategory:{
        type: String,
        required: true
    },
    productQuantity:{
        type: Number,
        required: true
    },
    bestSeller:{
        type: Boolean,
        required: true
    },
    url:{
        type: String
    }
});

const Product = mongoose.model('Product',productSchema);


module.exports = Product;