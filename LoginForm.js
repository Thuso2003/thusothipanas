import React, { useState } from 'react';

function LoginForm({ login, showSignup }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    login(username, password);
  };

  const styles = {
    form: {
      display: 'flex',
      flexDirection: 'column',
      margin: '0 auto',
      padding: '20px',
      backgroundColor: '#ffffff',
      borderRadius: '8px',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
      maxWidth: '400px',
    },
    input: {
      padding: '10px',
      margin: '10px 0',
      border: '1px solid #ced4da',
      borderRadius: '4px',
      fontSize: '16px',
    },
    button: {
      padding: '10px',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      backgroundColor: '#007bff',
      color: '#ffffff',
      fontSize: '16px',
      transition: 'background-color 0.3s',
    },
    buttonHover: {
      backgroundColor: '#0056b3',
    },
    link: {
      marginTop: '10px',
      textAlign: 'center',
      color: '#007bff',
      cursor: 'pointer',
    },
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <h2>Login</h2>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
        required
        style={styles.input}
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
        style={styles.input}
      />
      <button type="submit" style={styles.button}>Login</button>
      <div style={styles.link} onClick={showSignup}>
        Don't have an account? Sign up
      </div>
    </form>
  );
}

export default LoginForm;