

# Hi, I'm Sudhir Kumar K 👋
### Senior Full-Stack Web Developer (8+ Years Experience)

Specializing in architecting secure, scalable web applications, RESTful APIs, and database-driven portals across both **LAMP (PHP/MySQL)** and **MERN (MongoDB, Express, React, Node.js)** ecosystems. Extensive experience delivering high-availability e-governance infrastructure, third-party API integrations, and OWASP-compliant solutions.

---

### 🛠 Tech Stack & Tools

- **Languages:** JavaScript (ES6+), PHP, HTML5, CSS3, SQL
- **Frontend:** React.js, Tailwind CSS, Bootstrap 5, Axios, Responsive UI
- **Backend & APIs:** Node.js, Express.js, PHP (Vanilla & CodeIgniter), RESTful APIs
- **Databases:** MySQL (Schema Design, Indexing, Optimization), MongoDB (Mongoose)
- **DevOps & Environments:** Linux, Apache, cPanel/WHM, Git & GitHub, Postman
- **Security & Compliance:** OWASP Top 10 Hardening, S3WaaS (GIGW Web Accessibility Standards)

---

### 💼 What I Bring to the Table
- **8+ Years Enterprise Experience:** Architecting public-sector portals, travel aggregators, and administrative dashboards.
- **Security & Compliance First:** Proven record mitigating critical vulnerabilities (SQLi, XSS, CSRF) verified through formal cybersecurity audits.
- **Full-Stack Execution:** From complex relational database schemas to responsive single-page applications.

---

### 📌 Pinned Repositories / Featured Work
- **MERN Restaurant POS & Billing Platform:** Multi-table billing, UPI QR generation, Razorpay integration, and receipt printing.
- **Election Staff HRMS & QR Verification:** Administrative allocation engine with automated QR check-in workflows.
- **Custom PHP / CodeIgniter Travel Booking Engine:** Modular API aggregator for multi-vendor booking workflows.

---

### 📬 Connect With Me
- **LinkedIn:** (https://www.linkedin.com/in/sudhir-kumar-k-a6a6b6354/)
- **Email:** sudhir.poojary1@gmail.com

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


