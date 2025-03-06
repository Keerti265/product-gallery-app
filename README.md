 📌Overview:

This is a React.js Product Gallery App that showcases an e-commerce product list with advanced features such as:

# Debounced Search (Optimizes API calls)
# Infinite Scrolling (Loads more products as you scroll)
# Lazy Loading (Images load only when visible)
# Global Theme Management (Light/Dark mode using Context API)
# Error Handling (Displays friendly messages on API failure)
# TailwindCSS (Modern and responsive UI)

🚀 Features

. Search Bar (Debounced search for efficient product filtering)

. Infinite Scrolling (Loads more products dynamically)

. Lazy Loading Images (Improves performance)

. Dark/Light Theme Toggle (Stored in localStorage)

. Error Handling & Retry Mechanism (Handles API failures gracefully)

. Mobile-Friendly & Responsive Design

🛠️ Tech Stack

1: React.js (18.3.1)

2: Axios (1.7.9)

3: TailwindCSS (3.4.17)

4: React LazyLoad (3.2.1)

5: React Context API (for Theme Management)

6: IntersectionObserver API (for Infinite Scrolling)

7: Custom Hook useDebounce (for optimized API calls)

📂 Project Structure

/src
  ├── components
  │   ├── SearchBar.js
  │   ├── ProductList.js
  │   ├── ProductCard.js
  ├── hooks
  │   ├── useDebounce.js
  ├── context
  │   ├── ThemeContext.js
  ├── pages
  │   ├── Home.js
  ├── App.js
  ├── index.js

  🔧 Installation & Setup

  1: Clone the repository
     git clone https://github.com/your-username/product-gallery-app.git
     cd product-gallery
  

  2: Install dependencies
     npm install


  3: Start the development server
     npm start


 🖥️ API Usage

  This project uses the Fake Store API:

  Get all products:  https://fakestoreapi.com/products

  Get single product by ID: https://fakestoreapi.com/products/1



🎨 TailwindCSS Setup

   Ensure TailwindCSS is properly configured:
   npx tailwindcss init -p

Update tailwind.config.js:

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [],
};


🔄 Available Scripts

1: Start the project: npm start

2: Build for production: npm run build

3: Run ESLint checks: npm run lint


📌 Future Enhancements

 1: Add product details page

 2: Implement sorting & filtering options

 3: Improve UI/UX with animations


GitHub:  https://github.com/Keerti265/product-gallery-app/
