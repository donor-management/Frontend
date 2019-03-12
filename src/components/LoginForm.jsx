import React, { useState, useContext } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { AuthContext } from '../store/AuthContext';
import Input from './common/Input';
import Button from './common/Button';

const LoginForm = ({ location, history }) => {
  const [credentials, setCredentials] = useState({});
  const auth = useContext(AuthContext);

  const handleChange = e => {
    const { name, value } = e.target;
    setCredentials(values => ({ ...values, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    await auth.login(credentials.username, credentials.password);
    const { state } = location;
    const destination = state ? state.from.pathname : '/dashboard';
    history.replace(destination);
  };

  if (auth.user) return <Redirect to="/dashboard" />;

  return (
    <section className="login">
      <h1>Log in</h1>
      <p>
        New user? <Link to="/register">Create an account</Link>
      </p>
      <form onSubmit={handleSubmit}>
        <Input
          name="username"
          value={credentials.username || ''}
          onChange={handleChange}
          placeholder="Username"
          label="Username"
          autoFocus
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
    </section>
  );
};

export default LoginForm;
