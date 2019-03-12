import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import { AuthProvider } from './store/AuthContext';
import MainNav from './components/MainNav';
import HomePage from './components/HomePage';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
import DashboardPage from './components/DashboardPage';
import ProtectedRoute from './components/common/ProtectedRoute';
import Logout from './components/Logout';
import NotFound from './components/NotFound';

const StyledMain = styled.main`
  padding: 0 1.5rem;
`;

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <>
          <MainNav />
          <StyledMain>
            <Switch>
              <Route path="/register" component={RegisterForm} />
              <Route path="/login" component={LoginForm} />
              <Route path="/logout" component={Logout} />
              <ProtectedRoute path="/dashboard" component={DashboardPage} />
              <Route path="/" component={HomePage} />
              <Route component={NotFound} />
            </Switch>
          </StyledMain>
        </>
      </Router>
    </AuthProvider>
  );
};

export default App;
