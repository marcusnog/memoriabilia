import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/home';
import Account from './pages/account';
import Login from './pages/login';
import ProductDetail from './pages/productDetail';
import CreateAccount from './pages/createAccount';
import NotFound from './pages/notFound';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/home" Component={Home} />
        <Route path="/" Component={Home} />
        <Route path="/account" Component={Account} />
        <Route path="/login" Component={Login} />
        <Route path='/product/:id' Component={ProductDetail} />4
        <Route path="/createAccount" Component={CreateAccount} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;

