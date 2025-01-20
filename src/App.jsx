import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Register from './pages/Register';
import Display from './pages/Display';
import Edit from './pages/Edit';
import Login from './components/Login';

function App() {
  const isLoggedIn = localStorage.getItem('user'); // Use localStorage for authentication check

  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />

        {/* Protected Routes */}
        <Route path="/display" element={isLoggedIn ? <Display /> : <Login />} />
        <Route path="/edit" element={isLoggedIn ? <Edit /> : <Login />} />
      </Routes>
    </Router>
  );
}

export default App;
