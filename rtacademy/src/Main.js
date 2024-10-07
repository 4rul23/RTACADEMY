import './main.css';
import logo from './logos.png';
import bgvideo from './bgcyber.mp4'
import LogoCarousel from './logocarousel';
// import { LineChart, Line, YAxis, ResponsiveContainer } from 'recharts';
import performanceimg from './performance.png'


function App() {
  return (
    <div className="app">
      <div className="bg-filter-home">
        <div className="navbar">
          <div className="navbar-logo">
            <img src={logo} alt="RT ACADEMY Logo" className="logo" />
          </div>
          <div className="navbar-links">
            <a href="test.js" className="nav-link">Produk</a>
            <a href="test.js" className="nav-link">Tujuan</a>
            <a href="test.js" className="nav-link">Harga</a>
            <a href="test.js" className="nav-link">Resources</a>
            <a href="test.js" className="nav-link">Perusahaan</a>
          </div>
          <div className="navbar-links2">
            <a href="test.js" className="nav-link">Sekolah</a>
            <span className="auth-separator"></span>
            <a href="test.js" className="nav-link">Login</a>
            <a href="test.js" className="nav-link get-started">Mulai</a>
          </div>
        </div>
        <video className="video" autoPlay muted loop>
          <source src={bgvideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="video-overlay"></div>
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

        <div className="trial-container">
            <div className="trial-badge">
              <span className="badge-text">new</span>
            </div>
            <a 
              className="trial-link" 
              href="youtube.com" 
              target="_blank"
              rel="noopener noreferrer"
            >
              Start the trial for our student subscription FOR FREE !
              <svg className="arrow-icon" width="16" height="16" viewBox="-3 -3 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className="arrow-icon-right" d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z" />
                <path className="arrow-icon-stem" d="M1.75 8H11" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </a>
          </div>
          <div className='trial2'>
          <div className='bg-dark-trial'>
          </div>
            <LogoCarousel/>
          </div>
          </div>
          <div>
            <ContainerNews/>
          </div>
          <div>
          <CyberIncidentsStats/>
          </div>
          <div>
          <CybersecurityDashboard/>
          </div>

    </div>
  );
}


const ContainerNews = () => {
  return (
    <div className="container-news">
      <a href="https://example.com" target="_blank" rel="noopener noreferrer">
        RT-ACADEMY adalah platform no 1 dalam pengembangan individu dalam informatika !
      </a>
      <svg className="arrow-icon" width="16" height="16" viewBox="-3 -3 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z" />
        <path d="M1.75 8H11" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </div>
  );
};

const CyberIncidentsStats = () => {
  return (
    <>
      <div className="cybercontainer">
        <div className="grid">
          <div className="card">
            <p className="percentage">50%</p>
            <p className="descriptionincident">
              and more of significant cyber incidents are caused by a lack of skills or human failure.
            </p>
          </div>
          <div className="card">
            <p className="performance-text">
              Beat the odds <br/> Optimize your <br/> performance.
            </p>
            <div className='performanceimg'>
              <img 
                src={performanceimg} 
                alt="Graph showing performance optimization" 
                className="graph"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const CybersecurityDashboard = () => {
  return (
    <div className="cyber-dashboard">
      <h1 className="cyber-heading">
      Pembelajaran web development <br/> interaktif untuk siswa SMA/SMK di Indonesia
      </h1>
      <div className="cyber-buttons">
        <button className="cyber-button cyber-button-primary">
          Mulai Belajar <span className="cyber-arrow-right">→</span>
        </button>
        <button className="cyber-button cyber-button-secondary">
          Untuk Sekolah
        </button>
      </div>
      <div className="cyber-grid">
        <div className="cyber-card">
          <h2 className="cyber-card-title">Jalur pembelajaran</h2>
          <p className="cyber-card-description">
          Perjalanan belajar yang terstruktur, mulai dari dasar HTML/CSS hingga pengembangan aplikasi web kompleks dengan JavaScript dan framework modern.
          </p>
          <div className="cyber-image-placeholder">Image Placeholder</div>
        </div>
        <div className="cyber-card">
          <h2 className="cyber-card-title">Proyek Kasus Nyata</h2>
          <p className="cyber-card-description">
          Kerjakan proyek web nyata yang menantang, diperbarui setiap minggu untuk mengikuti tren teknologi terkini dalam industri web development
          </p>
          <div className="cyber-image-placeholder">Image Placeholder</div>
        </div>
        <div className="cyber-card">
          <h2 className="cyber-card-title">Sertifikasi Industri</h2>
          <p className="cyber-card-description">
          Dapatkan sertifikasi yang diakui industri untuk membuktikan keahlian Anda dalam pengembangan web dan meningkatkan peluang karir.
          </p>
          <div className="cyber-image-placeholder">Image Placeholder</div>
        </div>
      </div>
    </div>
  );
};

export default App;

