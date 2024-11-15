import React, { useState, useEffect } from 'react';

function UserForm({ addUser, initialData }) {
  const [user, setUser] = useState(initialData || { username: '', password: '' });

  useEffect(() => {
    if (initialData) {
      setUser(initialData);
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addUser(user);
    setUser({ username: '', password: '' }); // Reset form after submission
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
        name="username"
        value={user.username}
        onChange={handleChange}
        placeholder="Username"
        required
        style={styles.input}
      />
      <input
        type="password"
        name="password"
        value={user.password}
        onChange={handleChange}
        placeholder="Password"
        required
        style={styles.input}
      />
      <button type="submit" style={styles.button}>{initialData ? 'Update User' : 'Save User'}</button>
    </form>
  );
}

export default UserForm;