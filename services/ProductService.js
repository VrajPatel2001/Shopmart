const productModel = require("../models/ProductModel");

exports.createAProduct = (req,res)=>{

    const product = new productModel(req.body);
    product.save()
    .then((newProduct)=>{
        res.json({
            message:"The product is successfully created and stored in database",
            data: newProduct
        })
    })
    .catch(err=>{
        res.status(500).json({
            message:err
        })
    })
};

exports.getProducts = (req,res)=>{
    
    productModel.find()
    .then(products=>{
        res.json({
            message: "A list of All products",
            data: products,
            totalproducts: products.length
        })
    })
    .catch(err=>{
        res.status(500).json({
            message:err
        })
    })
}










// Receive product by id
exports.getAProduct = (req,res)=>{
    productModel.findById(req.params.id)
    .then(product=>{
        if(product)
        {
            res.json({
                message: `product with id ${req.params.id}`,
                data: product
            })
        }
        else{
            res.status(404).json({
                message: `There is no product in our databse with id ${req.params.id}`
            })
        }
    })
    .catch(err=>{
        res.status(500).json({
            message :err
        })
    })
}


exports.updateAProduct= (req,res)=>{
    productModel.findByIdAndUpdate(req.params.id,req.body,{new:true})
    .then(product=>{

        if(product)
        {
            res.json({
                message: `Product with id ${req.params.id} was updated`,
                data: product
            })
        }
        else{
            res.status(404).json({
                message:`product with id ${req,params.id} was not found`
            })
        }
    })
    .catch(err=>{
        res.status(500).json({
            message :err
        })
    })
}

exports.deleteAProduct = (req,res)=>{

    productModel.findByIdAndDelete(req.params.id)
    .then(product=>{
        
        if(product)
        {
            res.json({
                message: `Product with id ${req.params.id} was deleted`
            })
        }
        else{
            res.status(404).json({
                message: `Product with id ${req.params.id} was not found`
            })
        }
    })
    .catch(err=>{
        res.status(500).json({
            message :err
        })
    })
}