const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is required"]
  },
  address: {
    type: String,
    required: [true, "Address is required"]
  },
  rent: {
    type: Number,
    required: [true, "Rent amount is required"]
  },
  available: {
    type: Boolean,
    default: true
  },
  landlord: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', 
    required: [true, "Landlord reference is required"]
  },
  description: {
    type: String
  },
  images: {
    type: [String] 
  }
}, { timestamps: true });

const Property = mongoose.model('Property', propertySchema);
module.exports = Property;
