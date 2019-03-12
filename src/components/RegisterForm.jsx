import React, { useState, useContext } from 'react';
import { register } from '../services/userService';
import { AuthContext } from '../store/AuthContext';
import Input from './common/Input';
import Button from './common/Button';

const RegisterForm = ({ location, history }) => {
  const [newUser, setNewUser] = useState({});
  const auth = useContext(AuthContext);

  const handleChange = e => {
    const { name, value } = e.target;
    setNewUser(values => ({ ...values, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const { data } = await register(newUser);
      auth.loginWithToken(data.token);
      history.replace('/dashboard');
    } catch (ex) {
      console.log(ex);
    }
  };

  return (
    <section className="registration">
      <h1>Create an account</h1>
      <form onSubmit={handleSubmit}>
        <Input
          name="username"
          value={newUser.username || ''}
          onChange={handleChange}
          placeholder="Username"
          label="Username"
        />
        <Input
          type="password"
          name="password"
          label="Password"
          value={newUser.password || ''}
          onChange={handleChange}
          placeholder="Password"
        />
        <Input
          type="email"
          name="email"
          label="Email address"
          value={newUser.email || ''}
          onChange={handleChange}
          placeholder="you@org.com"
        />
        <Input
          name="organization"
          label="Organization"
          value={newUser.organization || ''}
          onChange={handleChange}
          placeholder="Organization"
        />
        <Button>Sign up</Button>
      </form>
    </section>
  );
};

export default RegisterForm;
