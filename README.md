# 🛒 Bazar Dor — বাজার দর

**Essential commodity prices at a glance.**

Bazar Dor is a responsive web application that helps users explore essential product prices, compare market rates, and stay informed about price changes. The application provides product-wise pricing information in Bangla, making market data easier to understand and access.

## 🌐 Live Demo

- **Live Website:** https://assignment-7-seven-alpha.vercel.app/

## ✨ Features

- **🛒 Live Product Information** — Browse essential grocery products and their pricing information fetched from an API.
- **📈 Price Trends** — Track products with rising and falling prices to understand market changes.
- **📂 Category-Based Browsing** — Explore products by category and sort listings to find what you need.
- **📊 Detailed Price Insights** — View current, minimum, maximum, and average prices, along with market-wise price comparisons.
- **🔐 Secure Authentication** — Sign up and sign in with Better Auth.
- **👤 Profile Management** — View your account information and update your profile name.
- **🛡️ Protected Routes** — Restrict access to product detail pages to authenticated users.
- **📱 Fully Responsive Design** — Enjoy a consistent experience across mobile, tablet, and desktop devices.
- **🔔 Toast Notifications** — Receive clear feedback for authentication actions, successful operations, and errors.
- **🚧 Custom 404 Page** — Display a dedicated not-found page for invalid routes.
- **🇧🇩 Bangla-Friendly Interface** — Present product information and prices in a user-friendly Bengali interface.

## 🛠️ Technologies Used

- **Next.js** — React framework and App Router
- **React** — Component-based user interface
- **TypeScript** — Type-safe development
- **Tailwind CSS** — Responsive styling
- **Better Auth** — Authentication and session management
- **MongoDB Atlas** — Database for authentication-related data
- **React Toastify** — Toast notifications
- **React Icons** — Icons for the interface
- **Bazar Dor API** — Product, category, and market price data

## 📡 API

Bazar Dor uses the following API endpoints for product and category data:

| Endpoint | Description |
|---|---|
| `/api/bazardor/products` | Retrieve products |
| `/api/bazardor/products?category=chal` | Retrieve products by category |
| `/api/bazardor/products/1` | Retrieve product details by ID |
| `/api/bazardor/categories` | Retrieve categories |
| `/api/bazardor/categories/chal` | Retrieve category details |

**API Base URL:** `https://openapi.programming-hero.com/api/bazardor`

## 📁 Project Structure

```text
src/
├── app/
│   ├── api/
│   │   └── auth/
│   ├── category/
│   │   └── [slug]/
│   ├── components/
│   ├── product/
│   │   └── [slug]/
│   ├── profile/
│   │   └── update/
│   ├── sign-in/
│   ├── sign-up/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── not-found.tsx
│   └── globals.css
└── lib/
    ├── auth.ts
    └── auth-client.ts
```

## 🔐 Authentication

Authentication is implemented using Better Auth. MongoDB Atlas is used to persist authentication-related information. Authenticated users can access protected product details and manage their profile.

Social sign-in providers require their respective provider credentials and configuration.

## 📱 Responsive Design

The interface is designed to adapt to different screen sizes, providing a consistent browsing experience across desktop, tablet, and mobile devices.

