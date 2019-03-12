import React, { useState } from 'react';
import auth from '../services/authService';
import Input from './common/Input';
import Button from './common/Button';

const LoginForm = ({ location, history }) => {
  const [credentials, setCredentials] = useState({});

  const handleChange = e => {
    const { name, value } = e.target;
    setCredentials(values => ({ ...values, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await auth.login(credentials.username, credentials.password);
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
        <Input
          name="username"
          value={credentials.username || ''}
          onChange={handleChange}
          placeholder="Username"
          label="Username"
        />
        <Input
          type="password"
          name="password"
          label="Password"
          value={credentials.password || ''}
          onChange={handleChange}
          placeholder="Password"
        />
        <Button>Log in</Button>
      </form>
    </div>
  );
};

export default LoginForm;
