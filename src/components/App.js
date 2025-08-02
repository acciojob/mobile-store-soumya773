import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import '../styles/App.css'
import AdminPanel from "./AdminPanel";
import ProductDetails from "./ProductDetails";
import ProductList from "./ProductList";
const App = () => {
  const [products, setProducts] = useState([
  {
    id: 1,
    name: "Samsung Galaxy S8 64GB Black",
    price: 16303,
    description: "Samsung Galaxy S8 with 64GB storage, black color, great performance and AMOLED display.",
    image: "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-note9-1.jpg"
  },
  {
    id: 2,
    name: "Samsung Galaxy S9 64GB Black",
    price: 20888,
    description: "Samsung Galaxy S9 with powerful camera, 64GB storage, sleek black design.",
    image: "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s9-1.jpg"
  },
  {
    id: 3,
    name: "Samsung Galaxy S8+ 64GB Black",
    price: 18701,
    description: "Samsung Galaxy S8+ with bigger display, 64GB storage, and elegant black finish.",
    image: "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-a71-1.jpg"
  },
  {
    id: 4,
    name: "Samsung Galaxy Note 9 128GB Ocean Blue",
    price: 29999,
    description: "Samsung Galaxy Note 9 with 128GB storage, stylus support, and powerful performance.",
    image: "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-note9-1.jpg"
  },
  {
    id: 5,
    name: "Samsung Galaxy S10 128GB Prism White",
    price: 40999,
    description: "Samsung Galaxy S10 with Infinity-O display, 128GB storage, and triple-camera setup.",
    image: "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s10-1.jpg"
  },
  {
    id: 6,
    name: "Samsung Galaxy A71 128GB Silver",
    price: 25999,
    description: "Samsung Galaxy A71 with 128GB storage, quad-camera setup, and premium design.",
    image: "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-a71-1.jpg"
  }
]);


  return (
   <Router>
      <nav className="navbar">
        <Link to="/">HOME</Link>
        <Link to="/admin">ADMIN</Link>
      </nav>
      <Routes>
        <Route path="/" element={<ProductList products={products} />} />
        <Route path="/products/:id" element={<ProductDetails products={products} />} />
        <Route path="/admin" element={<AdminPanel products={products} setProducts={setProducts} />} />
      </Routes>
    </Router>
  )
}

export default App
