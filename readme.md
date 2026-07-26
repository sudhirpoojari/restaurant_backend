# 🍽️ Gourmet Diner POS - Express & MongoDB Backend REST API

This repository contains the backend RESTful API service for the **Gourmet Diner Restaurant POS System**. Built with **Node.js, Express.js, and MongoDB (Mongoose)**, it manages menu catalogs, multi-table orders, payment processing integrations (Razorpay & dynamic UPI), and transaction analytics.

![Node.js](https://img.shields.io/badge/Node.js-v18%2B-green.svg)
![Express](https://img.shields.io/badge/Express.js-v4-black.svg)
![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose-47a248.svg)
![Razorpay](https://img.shields.io/badge/Payments-Razorpay%20SDK-blue.svg)

---

## 🌟 Key Backend Features

- **Menu Management API:** Complete CRUD endpoints for menu items, categories, pricing, and availability status.
- **Order Processing Engine:** Calculates subtotals, configurable GST rates, discounts, and total bill amounts dynamically on order placement.
- **Razorpay Payment Integration:** Backend SDK integration to generate Razorpay order payloads for credit/debit card processing.
- **Transaction Analytics & Reporting:** Aggregates completed sales data, payment channel metrics (Cash vs. UPI vs. Card), and transaction history.
- **Database Seeder:** Built-in seed script for fast initialization of default menu items.

---

## 🛠️ Tech Stack & Dependencies

- **Runtime Environment:** Node.js
- **Web Framework:** Express.js
- **Database / ODM:** MongoDB with Mongoose
- **Payment Processing:** Razorpay Node.js SDK
- **Environment Management:** `dotenv`
- **CORS Handling:** `cors`
- **Development Tooling:** `nodemon`

---

## 📁 Repository Structure

```text
backend/
├── config/
│   └── db.js            # MongoDB Mongoose connection setup
├── models/
│   ├── MenuItem.js      # Menu Schema (name, category, price, availability)
│   └── Order.js         # Order Schema (items, subtotal, tax, payment details)
├── routes/
│   └── billingRoutes.js # Express router handling menu, orders, payments & reports
├── seed.js              # Database seed script for initial food catalog
├── server.js            # Main server entry point
├── .env.example         # Template for environment variables
└── package.json