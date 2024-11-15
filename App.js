// App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css'; 
import ProductForm from './components/ProductForm';
import UserForm from './components/UserForm';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import Dashboard from './components/Dashboard';
import StockGraph from './components/StockGraph'; // Import StockGraph
import ProductList from './components/ProductList';
import UserList from './components/UserList';

function App() {
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [isSigningUp, setIsSigningUp] = useState(false);
  const [editingUserIndex, setEditingUserIndex] = useState(null);
  const [editingProductIndex, setEditingProductIndex] = useState(null);

  useEffect(() => {
    const savedProducts = JSON.parse(localStorage.getItem('products')) || [];
    const savedUsers = JSON.parse(localStorage.getItem('users')) || [];
    setProducts(savedProducts);
    setUsers(savedUsers);
  }, []);

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users));
  }, [users]);

  const addProduct = (product) => {
    if (editingProductIndex !== null) {
      const updatedProducts = [...products];
      updatedProducts[editingProductIndex] = product;
      setProducts(updatedProducts);
      setEditingProductIndex(null);
    } else {
      setProducts([...products, product]);
    }
  };

  const editProduct = (index) => {
    setEditingProductIndex(index);
  };

  const deleteProduct = (index) => {
    setProducts(products.filter((_, i) => i !== index));
  };

  const addUser = (user) => {
    if (editingUserIndex !== null) {
      const updatedUsers = [...users];
      updatedUsers[editingUserIndex] = user;
      setUsers(updatedUsers);
      setEditingUserIndex(null);
    } else {
      setUsers([...users, user]);
    }
  };

  const editUser = (index) => {
    setEditingUserIndex(index);
  };

  const deleteUser = (index) => {
    setUsers(users.filter((_, i) => i !== index));
  };

  const login = (username, password) => {
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
      setLoggedInUser(user);
      return true;
    }
    return false;
  };

  const signup = (username, password) => {
    if (users.some(u => u.username === username)) {
      alert('Username already exists.');
    } else {
      addUser({ username, password });
      alert('Account created! You can now log in.');
      setIsSigningUp(false);
    }
  };

  const logout = () => {
    setLoggedInUser(null);
  };

  const styles = {
    container: {
      maxWidth: '800px',
      margin: '0 auto',
      padding: '20px',
      backgroundColor: '#fff',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
      borderRadius: '8px',
    },
    heading: {
      textAlign: 'center',
      color: '#333',
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
      margin: '5px',
    },
    buttonHover: {
      backgroundColor: '#0056b3',
    },
  };

  return (
    <Router>
      <div style={styles.container}>
        <h1 style={styles.heading} className="moving-heading">Wings Cafe Inventory</h1>
        {loggedInUser ? (
          <>
            <Routes>
              <Route path="/dashboard" element={<Dashboard products={products} />} />
              <Route path="/stock-graph" element={<StockGraph products={products} />} />
              <Route path="*" element={<Navigate to="/dashboard" />} />
            </Routes>
            <ProductForm 
              addProduct={addProduct} 
              initialData={editingProductIndex !== null ? products[editingProductIndex] : null}
            />
            <ProductList 
              products={products} 
              editProduct={editProduct} 
              deleteProduct={deleteProduct} 
            />
            <UserForm
              addUser={addUser}
              initialData={editingUserIndex !== null ? users[editingUserIndex] : null}
            />
            <UserList
              users={users}
              editUser={editUser}
              deleteUser={deleteUser}
            />
            <button style={styles.button} onClick={logout}>Logout</button>
          </>
        ) : isSigningUp ? (
          <SignupForm signup={signup} />
        ) : (
          <LoginForm login={login} showSignup={() => setIsSigningUp(true)} />
        )}
      </div>
    </Router>
  );
}

export default App;