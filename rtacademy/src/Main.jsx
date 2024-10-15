import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './components/common/navbar';
import HomePage from './pages/Homepages';
import Price from './pages/price';
import './styles/main.css'; 

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/harga" element={<Price />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;