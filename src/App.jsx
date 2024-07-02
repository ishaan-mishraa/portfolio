// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import Contact from './Contact';
// Import other components for Skills, Works, Toolset, etc.

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
};

export default App;
