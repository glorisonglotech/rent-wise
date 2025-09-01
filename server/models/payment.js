const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  tenant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Tenant',
    required: [true, 'Tenant reference is required']
  },
  amount: {
    type: Number,
    required: [true, 'Payment amount is required']
  },
  date: {
    type: Date,
    default: Date.now
  },
  method: {
    type: String,
    enum: ['cash', 'bank', 'mobile'],
    required: [true, 'Payment method is required']
  },
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'failed'],
    default: 'pending'
  },
  receiptNumber: {
    type: String
  },
  notes: {
    type: String
  }
}, { timestamps: true });

const Payment = mongoose.model('Payment', paymentSchema);
module.exports = Payment;
