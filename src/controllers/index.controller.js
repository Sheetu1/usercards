

const userModel = require("../model/user.model");


// -> /route
module.exports.indexController = function(req,res){
    res.render('index');
}

// -> /create
module.exports.createController = async function(req,res){
    const {name,email,image} = req.body;
    await userModel.create({
        name,
        email,
        image
    })
    res.redirect("/allUsers");
}

// -> /allUsers
module.exports.allUsersController = async function(req,res){
    const users = await userModel.find();
    res.render("read",{users});
}

// Details
module.exports.UserDetailsController = async function(req,res){
   const user =  await userModel.findOne({_id:req.params.id})
    res.render('details',{user});
}

// -> /delete
module.exports.deleteController = async function(req,res){
    await userModel.findOneAndDelete({_id:req.params.id});
    res.redirect("/allUsers");
}