import * as React from 'react';
import Home  from './pages/home';
import Navbar from './pages/navbar';
import Footer from './pages/footer';
import AppRoutes from './routes';

function App() {

  return (
    <> 
    <Navbar />
    <AppRoutes />
    <Footer />
    </>
  )
}

export default App;
