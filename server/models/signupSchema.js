const mdb=require("mongoose");
const signupSchema=mdb.Schema({
    firstname:String,
    lastname:String,  
    email:String,
    password:String,
});
const signup_schema=mdb.model("signup",signupSchema);
exports.module=signup_schema;