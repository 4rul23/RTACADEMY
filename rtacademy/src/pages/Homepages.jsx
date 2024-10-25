import React from 'react';
import LogoCarousel from '../components/common/LogoCarousel';
import ContainerNews from '../components/ContainerNews';
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
    <div className="min-h-screen bg-[#0A1525]">
      <Navbar />
      <div className="relative min-h-[85vh]">
        <div className="absolute inset-0">
          <video 
            className="object-cover w-full h-full"
            autoPlay 
            muted 
            loop
            playsInline
          >
            <source src={bgvideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1525]/90 via-[#0A1525]/70 to-[#0A1525]/90"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1525] via-transparent to-[#0A1525]/50"></div>
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A1525] to-transparent"></div>
        </div>

        {/* Hero Content */}
        <div className="relative px-6 mx-auto max-w-7xl lg:px-8 pt-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-[4rem] font-bold leading-none tracking-tight text-white mb-8">
              Your Informatics<br />
              Student<br />
              Performance<br />
              Center
            </h1>
            
            <p className="max-w-2xl mb-12 text-xl text-gray-400">
              Kita menyediakan platform untuk membuat dan mengembangkan
              Individu atau organisasi Pengembangan Informatika yang berkinerja tinggi.
            </p>

            {/* CTA Buttons */}
            <div className="flex gap-4 mb-16">
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="/demo"
                className="px-6 py-3 bg-[#00E8FF] text-gray-900 rounded font-medium hover:opacity-90 transition-all"
              >
                Read more
              </motion.a>
              
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="/demo"
                className="px-6 py-3 bg-[#0A1525] text-white rounded font-medium hover:bg-[#0A1525]/80 transition-all border border-gray-700"
              >
                Get a demo
              </motion.a>
            </div>

            {/* Trial Banner */}
            <motion.a
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              href="/trial"
              className="inline-flex items-center gap-2 py-2 px-4 bg-[#0A1525]/80 rounded-lg hover:bg-[#0A1525] transition-all group border border-gray-800"
            >
              <span className="px-2 py-0.5 text-xs font-semibold bg-[#00E8FF] text-gray-900 rounded">NEW</span>
              <span className="text-gray-300">Start a 14-day business trial FOR FREE</span>
              <svg 
                className="w-5 h-5 text-gray-400 transition-transform group-hover:translate-x-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Logo Carousel Section with Gradient Transition */}
      <div className="relative bg-[#0A1525]">
        {/* Top gradient overlap for smooth transition */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#0A1525] via-[#0A1525] to-transparent"></div>
        
        <div className="relative px-6 py-16 mx-auto max-w-7xl lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <LogoCarousel />
          </motion.div>
        </div>
        
        {/* Bottom gradient for next section */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A1525] to-transparent"></div>
      </div>

      {/* Additional Sections */}
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

export default HomePage;