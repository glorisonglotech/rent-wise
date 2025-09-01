const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
  },
  password:{
    type:String,
    required:[true,"Password is required"],
  },
  role:{
    type:String,
    enum:["admin","landlord","tenant"],
    default:"tenant"
  }
},{timestamps:true});

const User = mongoose.model('User',userSchema);

module.exports = User;