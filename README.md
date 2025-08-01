# PushCart – Full Stack eCommerce Web App

A modern, responsive eCommerce web application built with **NestJS**, **Tailwind CSS**, and integrated with **Dodo Payments**. The store showcases and sells **planners** and **stickers** with an elegant UI/UX and a seamless checkout experience.

---

## ✅ What Has been Built

This project is a fully functional eCommerce platform featuring:

- 🛒 A dynamic **shopping cart** with real-time item updates
- 🧾 A **test-mode checkout** powered by **Dodo Payments**
- 🏷️ A **product listing** section categorized into planners and stickers
- 📩 A **contact form** and **FAQs page** for better user interaction
- 📱 A clean, responsive UI across devices

---

## ❓ Why This Project

The goal was to create a stylish and simple online storefront that simulates a real-world buying experience. Selling planners and stickers offers a visually appealing and minimal product set to showcase:

- 🧠 How full-stack concepts work together in a production-style app
- 🧪 Simulating **payment processing flows** using Dodo Payments in test mode
- 🛠️ Practicing advanced web development with **NestJS backend**, **modern UI** with Tailwind, and clean state management for the cart

---

## ⚙️ How It Was Built

### 🧩 Technologies Used

- **Frontend**:  
  - **Tailwind CSS** – for responsive and stylish UI  
  - **Vanilla JavaScript / React** – for interactivity  
  - **HTML** – semantically structured and accessible layout

- **Backend**:  
  - **NestJS** – modular backend with API endpoints for products and checkout logic  
  - **Dodo Payments API** – used to:
    - Retrieve product data (price, name, ID)
    - Handle **payment session creation** during checkout  
  - **NodeJS Runtime** – ensures compatibility with server-side calls

- **Data Handling**:
  - Product information is dynamically retrieved via Dodo’s API

### 💡 Features Implemented

- **Interactive Home Page**:  
  A full-bleed banner with buttons to scroll to the **stickers** or **planners** section.

- **Cart Functionality**:  
  - Add/remove products easily  
  - Increment/decrement quantity  
  - Typing `0` or negative numbers removes item  
  - Email input field for checkout

- **Checkout Flow**:  
  - Sends product and customer data to Dodo API in test mode  
  - Redirects to a **realistic payment page**  
  - On completion, user lands on the **status page** displaying:
    - ✅ Successful payment
    - ❌ Failed or cancelled status  
  - All end with a "Continue Shopping" button

- **Other Pages**:  
  - 📄 **FAQs** – Answers common questions  
  - 📬 **Contact Page** – For user queries or feedback

---

## 🧪 Testing Checkout (Test Mode)

Since the app integrates with Dodo Payments in **test mode**, you can safely go through the checkout process without real transactions.

1. Add items to your cart
2. Enter an email address
3. Click "Checkout"
4. Complete the test payment
5. You'll be redirected to the **status page**

---

## 🚀 Live Demo

👉 [PushCart](https://main.d3tey1bstzltb.amplifyapp.com/)
