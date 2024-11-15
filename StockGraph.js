// StockGraph.js
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

function StockGraph({ products }) {
  const [rotationIndex, setRotationIndex] = useState(0);

  const chartData = {
    labels: products.map(product => product.name),
    datasets: [
      {
        label: 'Stock Levels',
        data: products.map(product => product.quantity),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  // Rotate images based on stock increases
  useEffect(() => {
    const interval = setInterval(() => {
      setRotationIndex((prevIndex) => (prevIndex + 1) % products.length);
    }, 1000); // Change the interval as needed

    return () => clearInterval(interval);
  }, [products.length]);

  const styles = {
    container: {
      maxWidth: '600px',
      margin: '20px auto',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
      backgroundColor: '#fff',
    },
    heading: {
      textAlign: 'center',
      color: '#333',
    },
    image: {
      display: 'block',
      margin: '20px auto',
      width: '100px', // Set the desired width
      height: '100px', // Set the desired height
      transition: 'transform 0.5s',
      transform: `rotate(${rotationIndex * 36}deg)`, // Rotate based on index
    },
    link: {
      display: 'block',
      textAlign: 'center',
      margin: '10px 0',
      padding: '10px 15px',
      color: '#fff',
      backgroundColor: '#007bff',
      borderRadius: '5px',
      textDecoration: 'none',
      transition: 'background-color 0.3s, transform 0.3s',
    },
  };

  return (
    <div style={styles.container}>
      <h3 style={styles.heading}>Current Stock Levels</h3>
      <Bar data={chartData} />
      <img
        src="stock-inventory-system/src/images/image2.jpg" // Replace with your image path
        alt="Stock Indicator"
        style={styles.image}
      />
      <Link to="/dashboard" style={styles.link}>
        Back to Dashboard
      </Link>
    </div>
  );
}

export default StockGraph;