import React from "react";
import '../styles/WebReview.css'
import binus from '../assets/images/BINUS.png'
import telkomschools from '../assets/images/ITSG.png'
import placeholder from '../assets/images/STEI.png'
import SMKT from '../assets/images/telkomschool.png'
import nabil from '../assets/images/nabil.jpg'



const Websitereview = () => {
    return (
        <div className="review-container">
                  <h1 className="review-heading">
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
      <Dashboard/>
        </div>
    )
}


const Dashboard = () => {
    return (
      <div className="web-container">
        <div className="web-grid web-gap mb-8">
          <div className="web-card">
            <h2 className="web-title">Kandidat yang tersedia</h2>
            <p className="web-number">698k+</p>
          </div>
          <div className="web-card">
            <h2 className="web-title">Usecase dan pengalaman!</h2>
            <p className="web-description">
              Rangka awal dalam perjalanan sebuah Fullstack Enginer dari Siswa : Frontend & Backend
            </p>
          </div>
          <div className="web-card web-flex">
            <div>
              <h2 className="web-title">Keberhasilan</h2>
              <p className="web-description">
                Dari Siswa Sma yang mengikuti kelas MIPA ke Fullstack Enginer
              </p>
            </div>
            <img
              src={nabil}
              alt="Portrait of a man"
              className="web-image"
            />
          </div>
        </div>
        <div className="web-card">
          <h2 className="web-title mb-4">Institut yang menggunakan rt-academy</h2>
          <div className="web-flex-around">
            <img
              src={binus}
              alt="SecurityMetrics logo"
              className="web-logo"
            />
            <img
              src={telkomschools}
              alt="Synack logo"
              className="web-logo"
            />
            <img
              src={placeholder}
              alt="Lufthansa logo"
              className="web-logo"
            />
            <img
              src={SMKT}
              alt="Booking Holdings logo"
              className="web-logo"
            />
          </div>
        </div>
      </div>
    );
  };
  


export default Websitereview;
