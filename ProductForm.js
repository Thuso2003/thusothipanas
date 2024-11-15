import React, { useState, useEffect } from 'react';

function ProductForm({ addProduct, initialData }) {
  const [product, setProduct] = useState({
    name: '',
    description: '',
    category: '',
    price: '',
    quantity: '',
  });

  useEffect(() => {
    if (initialData) {
      setProduct(initialData);
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addProduct(product);
    setProduct({ name: '', description: '', category: '', price: '', quantity: '' }); // Reset form
  };

  const styles = {
    form: {
      display: 'flex',
      flexDirection: 'column',
      marginBottom: '20px',
    },
    input: {
      padding: '10px',
      margin: '5px 0',
      border: '1px solid #ced4da',
      borderRadius: '4px',
      fontSize: '16px',
    },
    button: {
      padding: '10px 15px',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      backgroundColor: '#007bff',
      color: '#fff',
      fontSize: '16px',
      transition: 'background-color 0.3s',
    },
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <input
        type="text"
        name="name"
        value={product.name}
        onChange={handleChange}
        placeholder="Product Name"
        required
        style={styles.input}
      />
      <input
        type="text"
        name="description"
        value={product.description}
        onChange={handleChange}
        placeholder="Description"
        required
        style={styles.input}
      />
      <input
        type="text"
        name="category"
        value={product.category}
        onChange={handleChange}
        placeholder="Category"
        required
        style={styles.input}
      />
      <input
        type="number"
        name="price"
        value={product.price}
        onChange={handleChange}
        placeholder="Price"
        required
        style={styles.input}
      />
      <input
        type="number"
        name="quantity"
        value={product.quantity}
        onChange={handleChange}
        placeholder="Quantity"
        required
        style={styles.input}
      />
      <button type="submit" style={styles.button}>{initialData ? 'Update Product' : 'Save Product'}</button>
    </form>
  );
}

export default ProductForm;