# 🛒 Bazar Dor — বাজার দর

**Essential commodity prices at a glance.**

Bazar Dor is a responsive web application that helps users explore essential product prices, compare market rates, and stay informed about price changes. The application provides product-wise pricing information in Bangla, making market data easier to understand and access.

## 🌐 Live Demo

- **Live Website:** [Add your deployed website URL here]
- **GitHub Repository:** [Add your GitHub repository URL here]

## ✨ Features

- **Live Product Information:** Browse essential products and their available pricing information through an API.
- **Price Trends:** Explore products with rising and falling prices.
- **Category-Based Browsing:** Find products by category and sort the available products.
- **Product Details:** View today's price, minimum and maximum prices, average price, and market-wise price comparisons.
- **User Authentication:** Create an account and sign in using Better Auth.
- **Profile Management:** View profile information and update your name.
- **Protected Product Details:** Require authentication to access product detail pages.
- **Responsive Design:** Access the application on mobile, tablet, and desktop devices.
- **Toast Notifications:** Receive feedback for authentication actions and errors.
- **Custom 404 Page:** Display a custom page for invalid routes.
- **Bangla Price Display:** Present product names and prices in a user-friendly Bangla interface.

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

## 📦 Installation and Setup

### Prerequisites

- Node.js
- npm
- MongoDB Atlas account for authentication database setup

## 📡 API

Bazar Dor uses the following API endpoints for product and category data:

| Endpoint | Description |
|---|---|
| `/api/bazardor/products` | Retrieve products |
| `/api/bazardor/products?category=chal` | Retrieve products by category |
| `/api/bazardor/products/1` | Retrieve product details by ID |
| `/api/bazardor/categories` | Retrieve categories |
| `/api/bazardor/categories/chal` | Retrieve category details |

**API Base URL:** `https://api.abcz.workers.dev/api/bazardor`

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

## 👩‍💻 Author

**Fahiya Binthey Hedayet**

- GitHub: [Your GitHub Profile](YOUR_GITHUB_PROFILE_URL)

---

*সকল দাম সম্ভাব্য; বাজার অবস্থার ওপর নির্ভর করে পরিবর্তিত হয়।*
