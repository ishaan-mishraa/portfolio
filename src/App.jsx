import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import Contact from './Contact';
import SpaceBackground from './SpaceBackground';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen text-white relative">
        <SpaceBackground />
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
