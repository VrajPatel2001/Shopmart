const userModel = require("../models/UserModel");

exports.createAUser = (req,res)=>{


    const user = new userModel(req.body);
    user.save()
    .then((newUser)=>{
        res.json({
            message: "The user was successfullly created and stored in database",
            data: newUser
        })
    })
        .catch(err=>{
            res.status(500).json({
                message :err
            })
        })
    
};

exports.getAUser= (req,res)=>{

    userModel.findById(req.params.id)
    .then(user=>{


        if(user)
        {
            res.json({
                message: `User with the id ${req.params.id}`,
                data: user
            })
            console.log(user);
        }
        else{
            res.status(404).json({
                message: `There is no user with the id ${req.params.id}`
            })
        }

    })
    .catch(err=>{
        res.status(500).json({
            message :err
        })
    })
}