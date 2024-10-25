import React from 'react';
import { motion } from 'framer-motion';
import '../../styles/logoCarousel.css'

// Import logos
import teluLogo from '../../assets/images/TELU.png';
import steiLogo from '../../assets/images/STEI.png';
import itsgLogo from '../../assets/images/ITSG.png';
import smktLogo from '../../assets/images/SMKT.png';
import binusLogo from '../../assets/images/BINUS.png';
import ugmLogo from '../../assets/images/ugm.png';

function LogoCarousel() {
  // You can adjust this value to control the speed
  // Lower number = faster, Higher number = slower
  const animationSpeed = 150; // You can try values like 10 for faster or 30 for slower

  const logos = [
    { src: teluLogo, alt: 'Telkom University' },
    { src: steiLogo, alt: 'ITB' },
    { src: itsgLogo, alt: 'ITS' },
    { src: smktLogo, alt: 'SMK TMKS' },
    { src: binusLogo, alt: 'BINUS' },
    { src: ugmLogo, alt: 'UGM' },
  ];

  const duplicatedLogos = [...logos, ...logos];

  return (
    <div className="relative w-full overflow-hidden">
      {/* Gradient fade on left */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0A1525] to-transparent z-10"></div>
      
      {/* Gradient fade on right */}
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0A1525] to-transparent z-10"></div>
      
      <div className="flex gap-8">
        {/* First set of logos */}
        <motion.div
          className="flex gap-8 shrink-0"
          animate={{
            x: [0, -100 * logos.length + '%'],
          }}
          transition={{
            x: {
              duration: animationSpeed, // Adjusted speed here
              repeat: Infinity,
              ease: "linear"
            }
          }}
        >
          {duplicatedLogos.map((logo, index) => (
            <div
              key={index}
              className="relative flex items-center justify-center w-40 h-16 group"
            >
              <div className="absolute inset-0 transition-all duration-300 rounded-lg bg-gradient-to-r from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/5 group-hover:to-blue-500/5"></div>
              <img
                src={logo.src}
                alt={logo.alt}
                className="object-contain w-full h-full transition-all duration-300 opacity-50 filter grayscale group-hover:opacity-100 group-hover:grayscale-0"
              />
            </div>
          ))}
        </motion.div>

        {/* Second set of logos for seamless loop */}
        <motion.div
          className="flex gap-8 shrink-0"
          animate={{
            x: [0, -100 * logos.length + '%'],
          }}
          transition={{
            x: {
              duration: animationSpeed, // Adjusted speed here
              repeat: Infinity,
              ease: "linear"
            }
          }}
        >
          {duplicatedLogos.map((logo, index) => (
            <div
              key={`duplicate-${index}`}
              className="relative flex items-center justify-center w-40 h-16 group"
            >
              <div className="absolute inset-0 transition-all duration-300 rounded-lg bg-gradient-to-r from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/5 group-hover:to-blue-500/5"></div>
              <img
                src={logo.src}
                alt={logo.alt}
                className="object-contain w-full h-full transition-all duration-300 opacity-50 filter grayscale group-hover:opacity-100 group-hover:grayscale-0"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default LogoCarousel;