import React, { useContext } from 'react';
import { register } from '../services/userService';
import { AppDataContext } from '../store/AppDataContext';
import useForm from '../hooks/useForm';
import Input from './common/Input';
import Button from './common/Button';

const RegisterForm = ({ history }) => {
  const { auth } = useContext(AppDataContext);

  const registerUser = async e => {
    try {
      const { data } = await register(newUser);
      auth.loginWithToken(data.token);
      history.replace('/dashboard');
    } catch (ex) {
      console.log(ex);
    }
  };

  const { values: newUser, handleChange, handleSubmit } = useForm(registerUser);

  return (
    <section className="registration">
      <h1>Create an account</h1>
      <form onSubmit={handleSubmit}>
        <Input
          name="username"
          value={newUser.username}
          onChange={handleChange}
          placeholder="Username"
          label="Username"
          required
        />
        <Input
          type="password"
          name="password"
          label="Password"
          value={newUser.password}
          onChange={handleChange}
          placeholder="Password"
          required
        />
        <Input
          type="email"
          name="email"
          label="Email address"
          value={newUser.email}
          onChange={handleChange}
          placeholder="you@org.com"
          required
        />
        <Input
          name="organization"
          label="Organization"
          value={newUser.organization}
          onChange={handleChange}
          placeholder="Organization"
          required
        />
        <Button>Sign up</Button>
      </form>
    </section>
  );
};

export default RegisterForm;
