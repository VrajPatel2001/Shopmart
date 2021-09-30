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
    
    if(req.query.category)
    {
        productModel.find({productCategory : req.query.category})
        .then(products=>{
            res.json({
                message: `A list of products with category ${req.query.category}`,
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

    else if(req.query.bestSeller)
    {
        productModel.find({bestSeller : req.query.bestSeller})
        .then(products=>{
            res.json({
                message: `A list of products with category ${req.query.bestSeller}`,
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

else{
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
}


exports.getCategories = (req, res)=>{

    productModel.distinct("productCategory")
    .then(categories=>{
        res.json({
            message: "All Product Categories",
            data: categories,
            totalcategories: categories.length
        })
    })
    .catch(err=>{
        res.status(500).json({
            message:err
        })
    })

}

// implemented in all products route
/*exports.getBestSeller = (req,res)=>{
    productModel.find({bestSeller : true})
    .then(product=>{
        res.json({
            message:"All best seller products",
            data: product,
            totalBestSeller: product.length
        })
    })
    .catch(err=>{
        res.status(500).json({
            message:err
        })
    })
}*/








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