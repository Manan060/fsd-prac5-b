import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Reports from './pages/Reports';
import Products from './pages/Products';
import ID from './pages/ID';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact component={<Home/>} />
          <Route path='/reports' component={<Reports/>} />
          <Route path='/products' component={<Products/>} />
        </Routes>
        <ID/>
      </Router>
    </>
  );
}

export default App;