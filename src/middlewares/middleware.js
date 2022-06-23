const jwt= require("jsonwebtoken")
const blogModel = require("../models/blogModel")
const authentication= async function(req,res,next){
   try{
    let token= req.headers["X-Api-key"];
    if(!token) token= req.headers["x-api-key"]

    //If no token is present in the request header return error
    if (!token) return res.send({ status: false, msg: "token must be present" }); 

    let decodedtoken= jwt.verify(token,"functionup-radon")

    if(!decodedtoken) return res.status(400).send({status:false,msg:"You Enter The InValid Token "})
    next()
}
catch(err){
    res.status(500).send({status:false,msg:err.message})
}
}


const authorisation = async function (req,res,next){
    let token= req.headers["X-Api-key"];
    if(!token) token= req.headers["x-api-key"]

    //If no token is present in the request header return error
    if (!token) return res.send({ status: false, msg: "token must be present" }); 

    let decodedtoken= jwt.verify(token,"functionup-radon")
    console.log(decodedtoken.authorId)
    
    let userIdFromParams= req.params.blogId
    let authId= await blogModel.findById(userIdFromParams)
    console.log(authId.authorId)
    if(decodedtoken.authorId ==authId.authorId) {
        next()
    }
    else{
        return res.status(403).send({status:false,msg:"The Login User Are not authorize to do this Or Given Token in header Is Invalid"})
    }


}

module.exports.authentication=authentication
module.exports.authorisation=authorisation