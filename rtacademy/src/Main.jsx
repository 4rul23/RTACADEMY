import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './components/common/navbar';
import HomePage from './pages/Homepages';
import Price from './pages/price';
import './styles/main.css'; 
import Login from './pages/Login';
import Register from './pages/Register';
import OptionPage from './pages/Choose.jsx'
import Academy from './pages/Academy.jsx'
import Student from './pages/Student.jsx'
import Resources from './pages/Resources.jsx'
import Tujuan from './pages/Tujuan.jsx'
import Produk from './pages/Produk.jsx'
import Sekolah from './pages/Sekolah.jsx'
import ModulesPage from './pages/Academy/Modules.jsx'
import LearningPath from './pages/Academy/Learning.jsx'
import Setting from './pages/AccountSettings.jsx'
import Lab from './pages/Lab.jsx'

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/harga" element={<Price />} />
          <Route path="login" element={<Login/>} />
          <Route path="Register" element={<Register/>} />
          <Route path="/choose-platform" element={<OptionPage />} />
          <Route path="/Academy" element={<Academy />} />
          <Route path="/Student" element={<Student />} />
          <Route path="/Resources" element={<Resources />} />
          <Route path="/Tujuan" element={<Tujuan />} />
          <Route path="/Produk" element={<Produk />} />
          <Route path="/Sekolah" element={<Sekolah />} />
          <Route path="/module" element={<ModulesPage />} />
          <Route path="/learning-path" element={<LearningPath />} />
          <Route path="/settings" element={<Setting />} />
          <Route path="/Lab" element={<Lab />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;