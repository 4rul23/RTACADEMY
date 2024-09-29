import React from 'react';
import './logoCarousel.css';

function LogoCarousel() {
  const logos = [
    { src: `${process.env.PUBLIC_URL}/images/TELU.png`, alt: 'Telkom University' },
    { src: `${process.env.PUBLIC_URL}/images/ITB.png`, alt: 'ITB' },
    { src: `${process.env.PUBLIC_URL}/images/SMKT.png`, alt: 'SMK TMKS' },
    { src: `${process.env.PUBLIC_URL}/images/SMK2.png`, alt: 'SMK TMKS' },
    { src: `${process.env.PUBLIC_URL}/images/SMA17.png`, alt: 'SMAN17' },
    { src: `${process.env.PUBLIC_URL}/images/ITS.png`, alt: 'UNHAS' },
  ];

  const logoItems = [...logos, ...logos];

  return (
    <div className="logo-carousel-container">
      <div className="logo-carousel-wrapper">
        <div className="logo-carousel">
          <div className="logo-track">
            {logoItems.map((logo, index) => (
              <div className="logo-item" key={index}>
                <img src={logo.src} alt={logo.alt} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogoCarousel;
