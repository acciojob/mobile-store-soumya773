import React from "react";
import { Link } from "react-router-dom";

const ProductList = ({ products }) => {
  return (
       <div>
      {products.map((p) => (
        <div key={p.id} className="product-card">
          <img src={p.image} alt={p.name} />
          <Link to={`/products/${p.id}`}>{p.name}</Link>
          <p>Price: {p.price}</p>
          <button>Buy</button>
        </div>
      ))}
    </div>
  )
}

export default ProductList