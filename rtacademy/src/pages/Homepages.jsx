import React from 'react';
import LogoCarousel from '../components/common/LogoCarousel';
import CyberIncidentsStats from '../components/CyberIncidentStats';
import CybersecurityDashboard from '../components/CyberSecurityDashboard';
import PreviewWeb from '../components/sections/PreviewWeb';
import Webreview from '../components/WebReview'
import CoursesReview from '../components/CoursesReview'
import CommentReview from '../components/CommentReview'
import bgvideo from '../assets/videos/bgcyber.mp4';
import Navbar from '../components/common/navbar';
import { motion } from 'framer-motion';
import Footer from '../components/common/Footer';

function HomePage() {
  return (
    <div className="min-h-screen bg-[#0a152594] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-2/3 left-1/3 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-[2000ms]"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.05)_1px,transparent_1px)] bg-[size:44px_44px]"></div>
      </div>

      <Navbar />
      
      {/* Hero Section */}
      <div className="relative min-h-[85vh]">
  {/* Video Background with reduced overlay opacity */}
  <div className="absolute inset-0">
    <video 
      className="object-cover w-full h-full opacity-75" // Increased opacity
      autoPlay 
      muted 
      loop
      playsInline
    >
      <source src={bgvideo} type="video/mp4" />
    </video>
          {/* Multiple gradient layers for depth */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1525]/60 via-[#0A1525]/40 to-[#0A1525]/60"></div>
    <div className="absolute inset-0 bg-gradient-to-t from-[#0A1525]/90 via-transparent to-[#0A1525]/30"></div>
    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A1525] to-transparent"></div>
    
    {/* Added subtle color effects */}
    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5 mix-blend-soft-light"></div>
    <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/5 via-transparent to-cyan-500/5 mix-blend-overlay"></div>
  </div>

  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {[...Array(20)].map((_, i) => (
      <div
        key={i}
        className="absolute w-1 h-1 rounded-full bg-white/10"
        style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          animation: `float ${10 + Math.random() * 20}s linear infinite`,
          opacity: Math.random() * 0.5 + 0.3,
        }}
      />
    ))}
  </div>

        {/* Hero Content */}
        <div className="relative px-6 mx-auto max-w-7xl lg:px-8 pt-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-[4rem] font-bold leading-none tracking-tight mb-8"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-100">
                Your Informatics<br />
                Student<br />
                Performance<br />
                Center
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="max-w-2xl mb-12 text-xl text-gray-400"
            >
              Kita menyediakan platform untuk membuat dan mengembangkan
              Individu atau organisasi Pengembangan Informatika yang berkinerja tinggi.
            </motion.p>

            {/* CTA Buttons with enhanced styling */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex gap-4 mb-16"
            >
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="/demo"
                className="px-6 py-3 font-medium text-gray-900 transition-all duration-300 rounded-lg bg-gradient-to-r from-cyan-400 to-cyan-500 hover:opacity-90"
              >
                Read more
              </motion.a>
              
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="/demo"
                className="px-6 py-3 font-medium text-white transition-all duration-300 border border-gray-700 rounded-lg bg-gray-800/50 backdrop-blur-sm hover:bg-gray-700/50 hover:border-cyan-500/50"
              >
                Get a demo
              </motion.a>
            </motion.div>

            {/* Trial Banner with enhanced styling */}
            <motion.a
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              href="/trial"
              className="inline-flex items-center gap-2 px-4 py-2 transition-all duration-300 border border-gray-700 rounded-lg bg-gray-800/50 backdrop-blur-sm hover:bg-gray-700/50 group hover:border-cyan-500/50"
            >
              <span className="px-2 py-0.5 text-xs font-semibold bg-gradient-to-r from-cyan-400 to-cyan-500 text-gray-900 rounded">NEW</span>
              <span className="text-gray-300">Start a 14-day business trial FOR FREE</span>
              <motion.svg 
                className="w-5 h-5 text-gray-400"
                initial={{ x: 0 }}
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </motion.svg>
            </motion.a>
          </motion.div>
        </div>
      </div>

      <div className="relative bg-[#0a152500]">
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#0A1525] via-[#0A1525] to-transparent"></div>
        
        <div className="relative px-6 py-16 mx-auto max-w-7xl lg:px-8">
          <motion.div
            initial={{ opacity: 3 }}
            animate={{ opacity: 3 }}
            transition={{ duration: 0.8 }}
          >
            <LogoCarousel />
          </motion.div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-32 "></div>
      </div>

      <CyberIncidentsStats />
      <CybersecurityDashboard />
      <PreviewWeb />
      <Webreview/>
      <CoursesReview/>
      <CommentReview/>
      <Footer/>
    </div>
  );
}

export default HomePage ;