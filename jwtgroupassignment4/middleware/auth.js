/*
Group Assignment 4
Filename:auth.js
Student name: Yogesh Neupane (200570557) and Roshan Khatri (200575702)
Date: 2024/04/05
 */

const jwt = require("jsonwebtoken");
const routes = require("../routes/routes")


const verifyToken = (req,res,next) =>{
    const token = req.body.token || req.query.token || req.headers["x-access-token"];

    if(!token){
        return res.status(499).send("Authentication Token Required")
    }
    try{
        const decodeToken = jwt.verify(token, process.env.TOKEN_KEY)
        req.user = decodeToken;

    }
    catch(err){
        return res.status(401).send("Invalid Token");
    }
    return next();
}

module.exports = verifyToken;