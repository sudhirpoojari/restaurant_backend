const express = require('express');
const router = express.Router();
const Razorpay = require('razorpay');
const MenuItem = require('../models/MenuItem');
const Order = require('../models/Order');

// Initialize Razorpay with your Test Credentials
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID || 'rzp_test_TI2Nzshv0kOhqe',
  key_secret: process.env.RAZORPAY_KEY_SECRET || 'oTS7N0rpw4uDrVzRUAow02oZ'
});

// Get active menu items
router.get('/menu', async (req, res) => {
  try {
    const items = await MenuItem.find({ isAvailable: true });
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Create Razorpay Order
router.post('/razorpay-order', async (req, res) => {
  try {
    const { amount } = req.body;

    if (!amount || amount <= 0) {
      return res.status(400).json({ error: 'Bill total must be greater than 0' });
    }

    const options = {
      amount: Math.round(Number(amount) * 100), // Amount in paise
      currency: "INR",
      receipt: `rcpt_${Date.now()}`
    };

    const order = await razorpay.orders.create(options);
    res.json(order);
  } catch (error) {
    console.error("Razorpay Order Creation Error:", error);
    res.status(500).json({ error: error.error?.description || error.message || "Razorpay API error" });
  }
});

// Save final completed order
router.post('/orders', async (req, res) => {
  try {
    const { tableNumber, customerName, items, taxRate = 0.05, discount = 0, paymentMode, paymentId } = req.body;

    if (!items || items.length === 0) {
      return res.status(400).json({ error: 'Cannot place empty order' });
    }

    const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const tax = Number((subtotal * taxRate).toFixed(2));
    const grandTotal = Number((subtotal + tax - discount).toFixed(2));
    const billNumber = `INV-${Date.now().toString().slice(-6)}`;

    const newOrder = new Order({
      billNumber,
      tableNumber: tableNumber || 'Takeaway',
      customerName: customerName || 'Guest',
      items,
      subtotal,
      tax,
      discount,
      grandTotal,
      paymentMode,
      paymentId: paymentId || null,
      status: 'Completed'
    });

    await newOrder.save();
    res.status(201).json(newOrder);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get reports & analytics
router.get('/reports', async (req, res) => {
  try {
    const orders = await Order.find({ status: 'Completed' }).sort({ createdAt: -1 });

    const totalRevenue = orders.reduce((sum, o) => sum + o.grandTotal, 0);
    const totalOrders = orders.length;

    const paymentStats = {
      Cash: orders.filter(o => o.paymentMode === 'Cash').reduce((s, o) => s + o.grandTotal, 0),
      UPI: orders.filter(o => o.paymentMode === 'UPI').reduce((s, o) => s + o.grandTotal, 0),
      Card: orders.filter(o => o.paymentMode === 'Card').reduce((s, o) => s + o.grandTotal, 0)
    };

    res.json({
      summary: {
        totalRevenue,
        totalOrders,
        paymentStats
      },
      orders
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post('/menu', async (req, res) => {
  try {
    const { name, category, price, isAvailable = true } = req.body;
    if (!name || !price) {
      return res.status(400).json({ error: 'Name and price are required' });
    }

    const newItem = new MenuItem({ name, category, price, isAvailable });
    await newItem.save();
    res.status(201).json(newItem);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;