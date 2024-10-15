import React from 'react';
import '../../styles/logoCarousel.css';

import teluLogo from '../../assets/images/TELU.png';
import steiLogo from '../../assets/images/STEI.png';
import itsgLogo from '../../assets/images/ITSG.png';
import smktLogo from '../../assets/images/SMKT.png';
import binusLogo from '../../assets/images/BINUS.png';
import ugmLogo from '../../assets/images/ugm.png';

function LogoCarousel() {
  const logos = [
    { src: teluLogo, alt: 'Telkom University' },
    { src: steiLogo, alt: 'ITB' },
    { src: itsgLogo, alt: 'ITS' },
    { src: smktLogo, alt: 'SMK TMKS' },
    { src: binusLogo, alt: 'BINUS' },
    { src: ugmLogo, alt: 'UGM' },
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
