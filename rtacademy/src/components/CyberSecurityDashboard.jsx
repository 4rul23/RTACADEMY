import React from 'react';
import { motion } from 'framer-motion';
import path from '../assets/images/path.png';
import simulasi from '../assets/images/Simulasi.png';
import sertifikat from '../assets/images/certification.png';

const AcademyHeading = () => {
  return (
    <div className="max-w-4xl px-4 mx-auto mb-16 text-center">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-8 text-4xl font-bold leading-tight text-transparent bg-white md:text-5xl bg-clip-text"
      >
        Pembelajaran web development <br/> interaktif untuk siswa SMA/SMK di Indonesia
      </motion.h1>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-col justify-center gap-4 sm:flex-row"
      >
        <button className="relative px-8 py-4 overflow-hidden font-medium text-white rounded-xl group">
          <div className="absolute inset-0 w-full h-full transition-all duration-300 bg-gradient-to-r from-cyan-500 to-blue-500"></div>
          <div className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjUwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')]"></div>
          <span className="relative">Mulai Belajar</span>
        </button>
        <button className="px-8 py-4 font-medium rounded-xl border-2 border-gray-700 hover:border-cyan-500 bg-gray-800/50 backdrop-blur-sm text-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)]">
          Untuk Sekolah
        </button>
      </motion.div>
    </div>
  );
};

const FeatureCard = ({ title, description, image, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className="relative p-6 overflow-hidden transition-all duration-500 border border-gray-700 group rounded-2xl bg-gray-800/50 backdrop-blur-sm hover:border-cyan-500/50"
    >
      <div className="absolute inset-0 transition-opacity duration-500 opacity-0 bg-gradient-to-b from-transparent via-transparent to-cyan-500/5 group-hover:opacity-100"></div>
      
      <h2 className="mb-4 text-2xl font-bold text-white transition-colors duration-300 group-hover:text-cyan-400">
        {title}
      </h2>
      <p className="mb-6 leading-relaxed text-gray-300">
        {description}
      </p>
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
        className="relative"
      >
        <div className="absolute inset-0 transition-opacity duration-500 opacity-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 group-hover:opacity-100 rounded-xl"></div>
        <img 
          src={image} 
          alt={title}
          className="w-full h-auto transition-transform duration-300 transform shadow-lg rounded-xl group-hover:-translate-y-1"
        />
      </motion.div>
      
      <div className="absolute bottom-0 left-0 w-full h-1 transition-transform duration-500 transform scale-x-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 group-hover:scale-x-100"></div>
    </motion.div>
  );
};

const CybersecurityDashboard = () => {
  return (
    <div className="min-h-screen px-4 py-16 md:px-8">
      <AcademyHeading/>
      
      <div className="grid grid-cols-1 gap-8 mx-auto max-w-7xl md:grid-cols-2 lg:grid-cols-3">
        <FeatureCard
          title="Jalur pembelajaran"
          description="Perjalanan belajar yang terstruktur, mulai dari dasar HTML/CSS hingga pengembangan aplikasi web kompleks dengan JavaScript dan framework modern."
          image={path}
          delay={0.3}
        />
        <FeatureCard
          title="Proyek Kasus Nyata"
          description="Kerjakan proyek web nyata yang menantang, diperbarui setiap minggu untuk mengikuti tren teknologi terkini dalam industri Modern Pengembangan Design Laman"
          image={simulasi}
          delay={0.4}
        />
        <FeatureCard
          title="Sertifikasi Industri"
          description="Dapatkan sertifikasi yang diakui industri untuk membuktikan keahlian Anda dalam pengembangan web dan meningkatkan peluang karir."
          image={sertifikat}
          delay={0.5}
        />
      </div>
    </div>
  );
};

export default CybersecurityDashboard;