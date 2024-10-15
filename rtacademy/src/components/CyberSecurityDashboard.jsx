import React from 'react';
import path from '../assets/images/path.png';
import simulasi from '../assets/images/Simulasi.png';
import sertifikat from '../assets/images/certification.png';

const AcademyHeading = () => {
  return (
    <>
      <h1 className="cyber-heading">
        Pembelajaran web development <br/> interaktif untuk siswa SMA/SMK di Indonesia
      </h1>
      <div className="cyber-buttons">
        <button className="cyber-button cyber-button-primary">
          Mulai Belajar 
        </button>
        <button className="cyber-button cyber-button-secondary">
          Untuk Sekolah
        </button>
      </div>
    </>
  );
};

const CybersecurityDashboard = () => {
  return (
    <div className="cyber-dashboard">
      <AcademyHeading/>
      <div className="cyber-grid">
        <div className="cyber-card">
          <h2 className="cyber-card-title">Jalur pembelajaran</h2>
          <p className="cyber-card-description">
          Perjalanan belajar yang terstruktur, mulai dari dasar HTML/CSS hingga pengembangan aplikasi web kompleks dengan JavaScript dan framework modern.
          </p>
          <img src={path} alt="RT ACADEMY Logo" className="pathcard" />
        </div>
        <div className="cyber-card">
          <h2 className="cyber-card-title">Proyek Kasus Nyata</h2>
          <p className="cyber-card-description">
          Kerjakan proyek web nyata yang menantang, diperbarui setiap minggu untuk mengikuti tren teknologi terkini dalam industri web development
          </p>
          <img src={simulasi} alt="RT-ACADEMY Simulation" className='Simulasicard'/>
        </div>
        <div className="cyber-card">
          <h2 className="cyber-card-title">Sertifikasi Industri</h2>
          <p className="cyber-card-description">
          Dapatkan sertifikasi yang diakui industri untuk membuktikan keahlian Anda dalam pengembangan web dan meningkatkan peluang karir.
          </p>
          <img src={sertifikat} alt="RT-ACADEMY Simulation" className='SertifikatCard'/>
        </div>
      </div>
    </div>
  );
};

export default CybersecurityDashboard;