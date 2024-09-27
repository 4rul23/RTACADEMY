import React from 'react';
import './logoCarousel.css';

function LogoCarousel() {
  const logos = [
    { src: `${process.env.PUBLIC_URL}/images/telkomuniverseity.png`, alt: 'Telkom University' },
    { src: `${process.env.PUBLIC_URL}/images/ITB.jpg`, alt: 'ITB' },
    { src: `${process.env.PUBLIC_URL}/images/SMKTMKS.png`, alt: 'SMK TMKS' },
    { src: `${process.env.PUBLIC_URL}/images/SMK2MKS.jpg`, alt: 'SMK TMKS' },
    { src: `${process.env.PUBLIC_URL}/images/SMAN17.jpg`, alt: 'SMAN17' },
    { src: `${process.env.PUBLIC_URL}/images/unhas.jpg`, alt: 'UNHAS' },
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
