import React, { useState } from 'react';
import auth from '../services/authService';

const LoginForm = ({ location, history }) => {
  const [credentials, setCredentials] = useState({});

  const handleChange = e => {
    const { name, value } = e.target;
    setCredentials(values => ({ ...values, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await auth.login(credentials);
      const { state } = location;
      const destination = state ? state.from.pathname : '/';
      history.replace(destination);
    } catch (ex) {
      console.log(ex);
    }
  };

  return (
    <div className="login">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          value={credentials.username || ''}
          onChange={handleChange}
          placeholder="Username"
        />
        <input
          type="password"
          name="password"
          value={credentials.password || ''}
          onChange={handleChange}
          placeholder="Password"
        />
        <button>Log in</button>
      </form>
    </div>
  );
};

export default LoginForm;
