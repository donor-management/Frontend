import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import auth from './services/authService';
import MainNav from './components/MainNav';
import HomePage from './components/HomePage';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
import Logout from './components/Logout';
import NotFound from './components/NotFound';

const StyledMain = styled.main`
  padding: 0 1.5rem;
`;

const App = () => {
  const user = auth.getCurrentUser();
  return (
    <Router>
      <div className="App">
        <MainNav user={user} />
        <StyledMain>
          <Switch>
            <Route path="/register" component={RegisterForm} />
            <Route path="/login" component={LoginForm} />
            <Route path="/logout" component={Logout} />
            <Route path="/" component={HomePage} />
            <Route component={NotFound} />
          </Switch>
        </StyledMain>
      </div>
    </Router>
  );
};

export default App;
