# 📘 Assignment Description: Users App (React & TypeScript)

**Course:** React (30 yhp)  
**School:** Teknikhögskolan i Lund (2026)  
**Start Date:** September 30, 2026, at 13:00  
**Deadline:** October 6, 2026, at 23:59  
**Presentation:** October 7, 2026  
**Scope:** Individual Assignment  

---

## 🎯 Background & Purpose

This assignment aims to provide practical experience in developing a complete **Single Page Application (SPA)** in React. The project covers everything from basic component architecture to advanced asynchronous data fetching and client-side routing.

Focus areas:
- API integration and asynchronous data management.
- Strict typing with **TypeScript**.
- Routing and navigation using `react-router-dom`.
- Managing API rate limits through caching.

---

## 📋 Functional Specifications

### 1. Interface & Navigation
- [x] At least two distinct views/pages accessible via `react-router-dom` (e.g., *Directory* `/` and *User Details* `/user/:id`).
- [x] A clear and intuitive navigation structure to easily switch between pages.
- [x] Clear and readable presentation of user data fetched from the API.

### 2. Data Management & API Integration
- [x] Fetch data from the specified API endpoint:  
  `https://api-userapi.onrender.com/api/users/getUsers`
- [x] API requests must include the required HTTP header:  
  `x-api-key: this-is-secret`
- [x] Respect the API rate limit of **maximum 100 requests per day**.
- [x] Demonstrate effective use of `useQuery` (TanStack Query) for caching to minimize unnecessary API calls.
- [x] Visually handle different UI states (*Loading*, *Error*, *Empty State*).

### 3. Component Architecture & Code Quality
- [x] Built using modular and reusable React components.
- [x] Apply *Separation of Concerns* to organize code logically.
- [x] All component props and data models strictly typed using **TypeScript** (`interfaces` or `types`).
- [x] Clean, readable, and maintainable code structure adhering to clean code principles.

---

## 🛠️️ Technical Requirements & Stack

| Technology | Tool / Library | Purpose |
| :--- | :--- | :--- |
| **Frontend Framework** | React.js (Vite / CRA) | SPA Component Architecture |
| **Language** | TypeScript | Type Safety & Interfaces |
| **Data Fetching & Cache** | TanStack Query (`useQuery`) | API Caching & State Management |
| **Routing** | `react-router-dom` | Client-side Navigation |
| **Styling** | Tailwind CSS | Responsive & Modern UI |
| **Version Control** | Git & GitHub | Code Repository (`main` branch) |

---

## 🚀 API Configuration Example

```ts
// Example API Header Requirements
const fetchUsers = async () => {
  const response = await fetch("[https://api-userapi.onrender.com/api/users/getUsers](https://api-userapi.onrender.com/api/users/getUsers)", {
    headers: {
      "x-api-key": "this-is-secret",
    },
  });
  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }
  return response.json();
};