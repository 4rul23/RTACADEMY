import './main.css';
import logo from './logos.png';

function App() {
  return (
    <div className="app">
      <div className="bg-filter-home bg-gradient-dark">
        <div className="navbar">
        <div className="navbar-logo">
          <img src={logo} alt="RT ACADEMY Logo" className="logo" />
          </div>
          <div className="navbar-links">
            <a href="test.js" className="nav-link">Products</a>
            <a href="test.js" className="nav-link">Solutions</a>
            <a href="test.js" className="nav-link">Pricing</a>
            <a href="test.js" className="nav-link">Resources</a>
            <a href="test.js" className="nav-link">Company</a>
            </div>
            <div className="navbar-links2">
              <a href="test.js" className="nav-link">Business</a>
              <a href="test.js" className="nav-link">Login</a>
              <a href="test.js" className="nav-link get-started">Get Started</a>
            </div>
        </div>
        <video className="video" autoPlay muted loop>
          <source src="https://cdn.hackthebox.com/website/LO_RES_Textless_Cyber_Performance_Center.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="content">
          <h1 className="main-heading">
            Your Informatics<br />
            Student <br />
            Performance
            Center
          </h1>
          <p className="description">
            Kita menyediakan platform untuk membuat dan mengembangkan<br />
            Individu atau organisasi Pengembangan Informatika yang berkinerja tinggi.
          </p>
        </div>
        <div className="btn-bussiness">
        <a href="testing">Untuk Sekolah</a>
      </div>
      <div className="btn-student">
        <a href="testing">Untuk Siswa</a>
      </div>
      </div>
    </div>
  );
}

export default App;
