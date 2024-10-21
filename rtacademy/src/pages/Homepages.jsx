import React from 'react';
import LogoCarousel from '../components/common/LogoCarousel';
import ContainerNews from '../components/ContainerNews';
import CyberIncidentsStats from '../components/CyberIncidentStats';
import CybersecurityDashboard from '../components/CyberSecurityDashboard';
import PreviewWeb from '../components/sections/PreviewWeb';
import bgvideo from '../assets/videos/bgcyber.mp4';
import Navbar from '../components/common/navbar';
import WebsiteReview from '../components/WebReview';

function HomePage() {
  return (
    <div className="bg-filter-home">
      <video className="video" autoPlay muted loop>
        <source src={bgvideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Navbar />
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
      </div>
      <div className='trial2'>
        <div className='bg-dark-trial'></div>
        <LogoCarousel/>
      </div>
      <ContainerNews/>
      <CyberIncidentsStats/>
      <CybersecurityDashboard/>
      <PreviewWeb/>
      <WebsiteReview/>
    </div>
  );
}

export default HomePage;