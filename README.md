coffe-ritual

A modern coffee shop and e-commerce website that allows users to explore coffee products, browse featured collections, learn about brewing experiences, and place orders through an interactive and responsive interface. Designed with a clean UI, smooth animations, and mobile-friendly navigation.

## Run it in VS Code

**Requirements:** [Node.js](https://nodejs.org) 18+ installed.

1. Open this folder in VS Code (`File → Open Folder…`).

2. Open a terminal in VS Code (`` Ctrl+` ``) and install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open the printed local URL (usually `http://localhost:5173`) in your browser.

Any edits you make to files inside `src/` will automatically reload in the browser.

To build a production bundle:

```bash
npm run build
```

Output files will be generated in the `dist/` folder.

Preview the production build locally:

```bash
npm run preview
```

## Live Demo

🌐 https://ashleybobby.github.io/coffee-ritual-ecommerce/

## Features

- Responsive design for desktop, tablet, and mobile
- Modern coffee shop landing page
- Product showcase section
- Interactive navigation menu
- Smooth scrolling and animations
- Featured coffee collections
- Contact and about sections
- Fast and optimized user experience

## Project Structure

```text
coffee-ritual-ecommerce/
├── index.html
├── package.json
├── vite.config.js
├── public/
│   └── assets/
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── index.css
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Products.jsx
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   └── assets/
└── README.md
```

## Technologies Used

- React.js
- JavaScript (ES6+)
- HTML5
- CSS3
- Vite
- GitHub Pages

## About the Project

Coffee Ritual is a frontend-focused web application created to demonstrate modern web development practices and responsive UI design. The project focuses on delivering a visually appealing coffee shop experience while maintaining performance and accessibility.

## Future Improvements

- User Authentication
- Shopping Cart Functionality
- Online Payment Integration
- Order Tracking System
- Customer Reviews and Ratings
- Backend Integration with Database
- Admin Dashboard

## What's Currently Mocked

- Product ordering is demonstration-only
- No real payment gateway integration
- No user login or registration
- No backend database connection
- Product inventory is static

