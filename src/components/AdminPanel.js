import React, { useState } from "react";

const AdminPanel = ({ products, setProducts }) => {
    const [newProduct, setNewProduct] = useState({ name: "", description: "", price: "", image: "" });

  const handleAdd = () => {
    if (!newProduct.name || !newProduct.price) return;
    const id = products.length ? products[products.length - 1].id + 1 : 1;
    setProducts([...products, { id, ...newProduct, price: parseInt(newProduct.price) }]);
    setNewProduct({ name: "", description: "", price: "", image: "" });
  };

  const handleEdit = (id, field, value) => {
    setProducts(products.map((p) => (p.id === id ? { ...p, [field]: value } : p)));
  };

  const handleDelete = (id) => {
    setProducts(products.filter((p) => p.id !== id));
  };
  return (
   <div>
      <h2>Admin Panel</h2>
      <div>
        <input className="form-control" placeholder="Name" value={newProduct.name} onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })} />
        <input className="form-control" placeholder="Description" value={newProduct.description} onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })} />
        <input className="form-control" placeholder="Image URL" value={newProduct.image} onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })} />
        <input className="form-control" placeholder="Price" value={newProduct.price} onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })} />
        <button onClick={handleAdd}>Add</button>
      </div>
      {products.map((p) => (
        <div key={p.id} className="admin-product">
          <img src={p.image} alt={p.name} />
          <input className="form-control" value={p.name} onChange={(e) => handleEdit(p.id, "name", e.target.value)} />
          <input className="form-control" value={p.price} onChange={(e) => handleEdit(p.id, "price", e.target.value)} />
          <button className="float-right" onClick={() => handleDelete(p.id)}>Delete</button>
        </div>
      ))}
    </div>
  )
}

export default AdminPanel