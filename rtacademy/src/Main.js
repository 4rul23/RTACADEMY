import './main.css';

function App() {
  return (
    <div className="app">
      <div className="bg-filter-home bg-gradient-dark">
        <div className="navbar">
          <div className="navbar-logo">
            <span>RT ACADEMY</span>
          </div>
          <div className="navbar-links">
            <a href="#" className="nav-link">Products</a>
            <a href="#" className="nav-link">Solutions</a>
            <a href="#" className="nav-link">Pricing</a>
            <a href="#" className="nav-link">Resources</a>
            <a href="#" className="nav-link">Company</a>
            <div>
              <a href="#" className="nav-link">Business</a>
              <a href="#" className="nav-link">Login</a>
              <a href="#" className="nav-link get-started">Get Started</a>
            </div>
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
    Kita menyediakan platform untukk membuat dan mengembangkan<br/>
    Individu atau organisasi Pengembangan Informatika yang berkinerja tinggi.
  </p>
</div>
      </div>
    </div>
  );
}

export default App;
