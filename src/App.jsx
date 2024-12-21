import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home'; 
import Characters from './pages/Characters'; 
import Teyvat from './pages/Teyvat'; 
import About from './pages/About';  

function App() {
  return (
    <Router>
      <div className="bg-gray-50 min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/teyvat" element={<Teyvat />} />  
          <Route path="/about" element={<About />} /> 
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
