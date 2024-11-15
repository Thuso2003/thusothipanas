import React from 'react';

function ProductList({ products, editProduct, deleteProduct }) {
  const styles = {
    list: {
      listStyle: 'none',
      padding: 0,
    },
    item: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '10px',
      border: '1px solid #e0e0e0',
      borderRadius: '4px',
      marginBottom: '10px',
      backgroundColor: '#f8f9fa',
    },
    button: {
      marginLeft: '5px',
      padding: '5px 10px',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      backgroundColor: '#007bff',
      color: '#fff',
      fontSize: '14px',
      transition: 'background-color 0.3s',
    },
  };

  return (
    <ul style={styles.list}>
      {products.map((product, index) => (
        <li key={index} style={styles.item}>
          <span>{product.name} - {product.quantity}</span>
          <div>
            <button style={styles.button} onClick={() => editProduct(index)}>Edit</button>
            <button style={styles.button} onClick={() => deleteProduct(index)}>Delete</button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default ProductList;