const mongoose = require('mongoose');

const tenantSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  property: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Property', 
    required: true
  },
  leaseStart: {
    type: Date,
    default: Date.now
  },
  leaseEnd: {
    type: Date
  },
  status: {
    type: String,
    enum: ['active', 'terminated', 'pending'],
    default: 'active'
  }
}, { timestamps: true });

const Tenant = mongoose.model('Tenant', tenantSchema);
module.exports = Tenant;
