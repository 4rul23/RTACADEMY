import React from "react";
import '../styles/WebReview.css'



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
            <h2 className="web-title">Available candidates</h2>
            <p className="web-number">698k+</p>
          </div>
          <div className="web-card">
            <h2 className="web-title">Onboarding & retention</h2>
            <p className="web-description">
              A blueprint for onboarding cybersecurity professionals: hire & retain!
            </p>
          </div>
          <div className="web-card web-flex">
            <div>
              <h2 className="web-title">Success story</h2>
              <p className="web-description">
                From Military Operator to Head of Cyber Threat Intelligence: Gary's story
              </p>
            </div>
            <img
              src="https://placehold.co/100x100"
              alt="Portrait of a man"
              className="web-image"
            />
          </div>
        </div>
        <div className="web-card">
          <h2 className="web-title mb-4">Companies hiring on Hack The Box</h2>
          <div className="web-flex-around">
            <img
              src="https://placehold.co/150x50"
              alt="SecurityMetrics logo"
              className="web-logo"
            />
            <img
              src="https://placehold.co/150x50"
              alt="Synack logo"
              className="web-logo"
            />
            <img
              src="https://placehold.co/150x50"
              alt="Lufthansa logo"
              className="web-logo"
            />
            <img
              src="https://placehold.co/150x50"
              alt="Booking Holdings logo"
              className="web-logo"
            />
          </div>
        </div>
      </div>
    );
  };
  


export default Websitereview;
