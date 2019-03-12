import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import MainNav from './components/MainNav';
import HomePage from './components/HomePage';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
import DashboardPage from './components/DashboardPage';
import ProtectedRoute from './components/common/ProtectedRoute';
import Logout from './components/Logout';
import NotFound from './components/NotFound';
import DonorsPage from './components/DonorsPage';
import CampaignsPage from './components/CampaignsPage';

const StyledMain = styled.main`
  section {
    padding: 0 1.5rem;
  }
`;

const App = () => {
  return (
    <Router>
      <>
        <MainNav />
        <StyledMain>
          <Switch>
            <Route path="/register" component={RegisterForm} />
            <Route path="/login" component={LoginForm} />
            <Route path="/logout" component={Logout} />
            <ProtectedRoute path="/dashboard" component={DashboardPage} />
            <ProtectedRoute path="/donors" component={DonorsPage} />
            <ProtectedRoute path="/campaigns" component={CampaignsPage} />
            <Route path="/" component={HomePage} />
            <Route component={NotFound} />
          </Switch>
        </StyledMain>
      </>
    </Router>
  );
};

export default App;
