import './main.css';
import logo from './logos.png';
import bgvideo from './bgcyber.mp4'
import LogoCarousel from './logocarousel';


function App() {
  return (
    <div className="app">
      <div className="bg-filter-home">
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
            <span className="auth-separator"></span>
            <a href="test.js" className="nav-link">Login</a>
            <a href="test.js" className="nav-link get-started">Get Started</a>
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
            <PerformanceContainer/>
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

const PerformanceContainer = () => {
  return (
    <div className="performance-container">
    <div className="stat-container">
      <h2 className="stat-number">34%</h2>
      <p className="stat-description">
        Siswa/Siswi di indonesia yang memahami konsep dari web programming dan algoritma bahasa pemrogaman.
      </p>
    </div>
    <div className="performance-graph-container">
      <h2 className="graph-title">Beat the odds. Optimize your performance.</h2>
      <div className="performance-graph">
        {/* This is a placeholder for the graph. In a real application, you'd use a charting library like recharts */}
        <svg viewBox="0 0 100 30" className="graph-svg">
          <path
            d="M0,15 Q25,25 50,20 T100,10"
            fill="none"
            stroke="#9eff00"
            strokeWidth="2"
          />
        </svg>
      </div>
    </div>
  </div>
  )
}

export default App;

