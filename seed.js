const mongoose = require('mongoose');
const dotenv = require('dotenv');
const MenuItem = require('./models/MenuItem');

dotenv.config();

const sampleMenu = [
  { name: 'Butter Chicken', category: 'Main Course', price: 340 },
  { name: 'Paneer Tikka', category: 'Starters', price: 260 },
  { name: 'Garlic Naan', category: 'Breads', price: 60 },
  { name: 'Veg Biryani', category: 'Main Course', price: 220 },
  { name: 'Chicken Biryani', category: 'Main Course', price: 290 },
  { name: 'Cold Coffee', category: 'Beverages', price: 120 },
  { name: 'Masala Dosa', category: 'South Indian', price: 90 },
  { name: 'Fresh Lime Soda', category: 'Beverages', price: 80 },
  { name: 'Gulab Jamun (2 pcs)', category: 'Desserts', price: 100 }
];

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    await MenuItem.deleteMany({});
    await MenuItem.insertMany(sampleMenu);
    console.log('Sample menu seeded successfully!');
    process.exit();
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });