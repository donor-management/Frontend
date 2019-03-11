import React from 'react';

const LoginForm = props => {
  return (
    <main>
      <h1>Log in</h1>
      <form>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button>Log in</button>
      </form>
    </main>
  );
};

export default LoginForm;
