// src/App.jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer';
import SpaceBackground from './components/layout/SpaceBackground';
import Home from './pages/Home';
import Contact from './pages/Contact'; // Note: Move Contact.jsx to src/pages/

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
        <Footer />
      </div>
    </Router>
  );
};

export default App;