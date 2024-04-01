import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/home';
import Account from './pages/account';
import Login from './pages/login';
import ProductDetail from './pages/productDetail';
import CreateAccount from './pages/createAccount';


const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/home" Component={Home} />
        <Route path="/" Component={Home} />
        <Route path="/account" Component={Account} />
        <Route path="/login" Component={Login} />
        <Route path="/product/1" Component={ProductDetail} />4
        <Route path="/createAccount" Component={CreateAccount} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;

