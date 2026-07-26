const mongoose = require('mongoose');

const orderItemSchema = new mongoose.Schema({
  menuItem: { type: mongoose.Schema.Types.ObjectId, ref: 'MenuItem', required: true },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true }
});

const orderSchema = new mongoose.Schema({
  billNumber: { type: String, required: true, unique: true },
  tableNumber: { type: String, required: true },
  customerName: { type: String, default: 'Guest' },
  items: [orderItemSchema],
  subtotal: { type: Number, required: true },
  tax: { type: Number, required: true },
  discount: { type: Number, default: 0 },
  grandTotal: { type: Number, required: true },
  paymentMode: { type: String, enum: ['Cash', 'UPI', 'Card'], default: 'Cash' },
  status: { type: String, enum: ['Completed', 'Cancelled'], default: 'Completed' }
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema);