const { request } = require("express");
const { decode } = require("jsonwebtoken");
const jwt = require("jsonwebtoken");

let authentication = function(req,res,next){



let token = req.headers["x-Auth-token"];
if (!token) token = req.headers["x-auth-token"];

//If no token is present in the request header return error
if (!token) return res.send({ status: false, msg: "token must be present" });

console.log(token);

let decodedToken = jwt.verify(token, "functionup-radon" );
  if (!decodedToken)
    return res.send({ status: false, msg: "token is invalid" })
    console.log(decodedToken)
    req.decodedToken = decodedToken

    next();


}



module.exports.authentication=authentication


