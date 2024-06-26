const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
    fullName : {type : String,required : true},
    userName : {type : String,required : true},
    email : {type : String,required : true},
    avatar: {type : String,required :false},
    password: {type : String,required : true},
    resetToken:{type:String,required:false},
})

const UserModel = mongoose.model("asynquser",userSchema)

module.exports = {
    UserModel
}