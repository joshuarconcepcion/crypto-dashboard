Crypto Dashboard

A frontend crypto dashboard built with Vanilla JavaScript, Vite, and the CoinGecko API.
This project demonstrates API integration, data handling, and dynamic UI rendering with minimal frameworks.

Features

- Live Market Data (via CoinGecko API)
    - Fetches real-time price, 24h % change, and sparkline data for selected coins.
    - Renders each coin into a styled card with a small Chart.js sparkline.

- Favorites Section (API-driven)
    - Displays live data for Bitcoin, Ethereum, Ripple, and Binance Coin.
    - Each card includes:
        - Coin icon & name
        - Current price (USD)
        - 24h percentage change
        - Sparkline chart for last 7 days

- Mocked Dashboard Content
    - Sample news and insights (placeholder text)
    - Sidebar with navigation buttons (for show only, not functional)

Tech Stack
- Vite – build tooling & dev server
- JavaScript (ES Modules) – modular code structure
- CoinGecko API – live crypto market data
- Chart.js – lightweight sparkline charts
- CSS Grid & Flexbox – responsive layout

Purpose

This project was built to demonstrate frontend API integration skills:
- Working with REST APIs
- Handling async/await and error states
- Rendering live data dynamically
- Displaying data visually with Chart.js

Note: Sidebar navigation and most dashboard widgets are mocked for design only. The API-driven favorites section is the core feature.