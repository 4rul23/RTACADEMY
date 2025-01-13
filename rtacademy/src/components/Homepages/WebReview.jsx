import React from 'react';
import '../styles/WebReview.css';
import binus from '../assets/images/BINUS.png';
import telkomschools from '../assets/images/ITSG.png';
import placeholder from '../assets/images/STEI.png';
import SMKT from '../assets/images/telkomschool.png';
import nabil from '../assets/images/nabil.jpg';

const LandingPage = () => {
  const stats = {
    candidates: "698k+",
    useCase: "Rangka awal dalam perjalanan sebuah Fullstack Enginer dari Siswa : Frontend & Backend",
    success: "Dari Siswa Sma yang mengikuti kelas MIPA ke Fullstack Enginer"
  };

  const institutions = [
    { name: "BINUS UNIVERSITY", logo: binus },
    { name: "ITS", logo: telkomschools },
    { name: "STEI ITB", logo: placeholder },
    { name: "Telkom Schools", logo: SMKT }
  ];

  return (
    <div className="min-h-screen px-4 pb-48 text-white">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 space-y-6 md:space-y-8">
          <h1 className="text-3xl font-bold leading-tight text-transparent md:text-4xl bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text">
            Pembelajaran web development  <br /> interaktif untuk siswa SMA/SMK di Indonesia
          </h1>
          <div className="flex flex-col gap-4 sm:flex-row">
            <button className="relative px-6 py-3 overflow-hidden font-medium rounded-lg group">
              <div className="absolute inset-0 w-full h-full transition-all duration-300 bg-gradient-to-r from-cyan-500 to-blue-500"></div>
              <span className="relative">Mulai Belajar</span>
            </button>
            <button className="px-6 py-3 font-medium transition-colors bg-gray-800 border border-gray-700 rounded-lg hover:bg-gray-700">
              Untuk Sekolah
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-6 mb-16 md:grid-cols-3 md:gap-8">
          {/* First Card */}
          <div className="group bg-gray-800/50 backdrop-blur-sm p-8 md:p-10 rounded-xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 min-h-[240px] flex flex-col justify-between">
            <div>
              <h3 className="mb-6 text-6xl font-bold text-transparent md:text-7xl bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text">
                {stats.candidates}
              </h3>
              <p className="text-lg text-gray-400 transition-colors group-hover:text-gray-300">
                Kandidat yang tersedia
              </p>
            </div>
            <div className="w-full h-1 transition-transform duration-300 transform scale-x-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 group-hover:scale-x-100"></div>
          </div>

          {/* Second Card */}
          <div className="group bg-gray-800/50 backdrop-blur-sm p-8 md:p-10 rounded-xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 min-h-[240px] flex flex-col justify-between">
            <div>
              <h3 className="mb-6 text-2xl font-semibold text-white transition-colors group-hover:text-cyan-400">
                Usecase dan pengalaman!
              </h3>
              <p className="text-lg leading-relaxed text-gray-400 transition-colors group-hover:text-gray-300">
                {stats.useCase}
              </p>
            </div>
            <div className="w-full h-1 transition-transform duration-300 transform scale-x-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 group-hover:scale-x-100"></div>
          </div>

          {/* Success Card - Redesigned with side image */}
          <div className="group bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 min-h-[240px] overflow-hidden">
            <div className="flex h-full">
              {/* Content Side */}
              <div className="flex-1 p-8 md:p-10">
                <h3 className="mb-4 text-2xl font-semibold text-cyan-400">
                  Keberhasilan
                </h3>
                <p className="text-lg leading-relaxed text-gray-300">
                  {stats.success}
                </p>
              </div>
              {/* Image Side */}
              <div className="relative w-1/3 min-w-[140px]">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-800/50 to-transparent"></div>
                <img 
                  src={nabil} 
                  alt="Success Story" 
                  className="object-cover w-full h-full transition-all duration-300 opacity-90 group-hover:opacity-100"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Institutions Section */}
        <div className="p-6 border bg-gray-800/50 backdrop-blur-sm md:p-8 rounded-xl border-gray-700/50">
          <h2 className="mb-8 text-xl font-semibold text-white">
            Institut yang menggunakan rt-academy
          </h2>
          <div className="grid items-center grid-cols-2 gap-8 md:grid-cols-4">
            {institutions.map((institution, index) => (
              <div 
                key={institution.name}
                className="relative flex items-center justify-center group"
              >
                <div className="absolute inset-0 transition-all duration-300 rounded-lg opacity-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 group-hover:opacity-100"></div>
                <img
                  src={institution.logo}
                  alt={institution.name}
                  className="max-w-[150px] h-auto filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;