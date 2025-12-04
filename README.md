# 🏥 Health DApp Frontend

A modern, decentralized application (DApp) interface for health and fitness tracking. This project provides a comprehensive dashboard for monitoring daily steps, water intake, calorie consumption, and heart rate with interactive data visualization.

![Status](https://img.shields.io/badge/Status-In%20Development-orange)
![React](https://img.shields.io/badge/React-19-blue)
![Vite](https://img.shields.io/badge/Vite-6.0-purple)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-v4-cyan)

## ✨ Key Features

- **Interactive Dashboard:** Real-time data visualization using dynamic Area, Bar, and Donut charts (powered by Recharts).
- **Smart Goal Tracking:** Visual feedback system where UI elements change color based on goal completion (e.g., Steps, Water, Calories).
- **Global State Management:** Centralized data handling using React Context API (`GoalsContext`) for seamless data flow.
- **Modern UI/UX:** Fully responsive design built with **Shadcn UI** and **Tailwind CSS v4**.
- **Mobile Optimized:** Includes specific mobile interactions like drawer inputs.
- **Web3 Ready:** Pre-configured with **Wagmi** and **Viem** for future blockchain integration (Health Data on-chain).

## 🛠 Tech Stack

This project leverages a **bleeding-edge** technology stack (2025 standards):

- **Core:** React 19 + Vite
- **Routing:** React Router DOM v7
- **Styling:** Tailwind CSS v4 (Native CSS variable support)
- **UI Components:** Shadcn UI (Radix Primitives)
- **Visualization:** Recharts
- **Icons:** Tabler Icons & Lucide React
- **Blockchain Interaction:** Wagmi + Viem
- **Validation:** Zod

## 📂 Project Structure

The project follows a modular architecture, separating page logic (`Layers`) from reusable UI components:

```text
src/
├── components/
│   ├── Layers/              # Main Application Pages
│   │   ├── AppDashboard.jsx # Main Overview
│   │   ├── AppAnalytics.jsx # Detailed Analytics View
│   │   ├── AppGoals.jsx     # Goal Setting Interface
│   │   └── AppCalories.jsx  # Calorie Tracker
│   │
│   ├── ui/                  # UI Components & Navigation
│   │   ├── app-sidebar.jsx  # Sidebar Configuration
│   │   ├── chart-*.jsx      # Reusable Chart Components
│   │   ├── nav-*.jsx        # Navigation Modules
│   │   ├── DrawerCalories   # Mobile input drawer
│   │   └── RootLayout.jsx   # Global Layout Wrapper
│   │
│   └── hooks/               # Custom React Hooks
│
├── lib/                     # Utilities & Logic
│   ├── context/
│   │   └── GoalsContext.jsx # Global State (Steps, Water, Calories)
│   └── utils.js             # Tailwind Class Merger
│
└── App.jsx                  # Application Entry & Routing
