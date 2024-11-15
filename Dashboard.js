// Dashboard.js
import { Link } from 'react-router-dom';

function Dashboard({ products }) {
  const lowStockCount = products.filter(product => product.quantity < 5).length;

  const styles = {
    dashboard: {
      maxWidth: '600px',
      margin: '20px auto',
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '8px',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
      backgroundColor: '#f9f9f9',
      fontFamily: 'Arial, sans-serif',
      fontSize: '18px',
    },
    strong: {
      color: '#007bff',
      fontWeight: 'bold',
    },
    count: {
      color: '#333',
    },
    title: {
      textAlign: 'center',
      margin: '20px 0',
    },
    link: {
      display: 'block',
      textAlign: 'center',
      margin: '20px 0',
      padding: '10px 15px',
      color: '#fff',
      backgroundColor: '#007bff',
      borderRadius: '5px',
      textDecoration: 'none',
      transition: 'background-color 0.3s, transform 0.3s',
    },
    linkHover: {
      backgroundColor: '#0056b3',
      transform: 'scale(1.05)',
    },
  };

  return (
    <div style={styles.dashboard}>
      <h2 style={styles.title}>Welcome to Wings Cafe Inventory</h2>
      <div style={styles.strong}>Total Products:</div>
      <div style={styles.count}>{products.length}</div>
      <div style={styles.strong}>Low Stock Alerts:</div>
      <div style={styles.count}>{lowStockCount}</div>
      <Link
        to="/stock-graph"
        style={styles.link}
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = styles.linkHover.backgroundColor)}
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = styles.link.backgroundColor)}
      >
        View Stock Graph
      </Link>
    </div>
  );
}

export default Dashboard;