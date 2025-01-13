import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import performanceimg from '../assets/images/performance.png';
import { TrendingUp, Users, Award, ChevronRight } from 'lucide-react';

const CyberIncidentsStats = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const announcements = [
    "RT-ACADEMY adalah platform no 1 dalam pengembangan individu dalam informatika!",
    "Dapatkan sertifikasi industri dan tingkatkan peluang karirmu",
    "Bergabung dengan 1000+ siswa yang telah sukses di bidang programming"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % announcements.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative px-4 py-16 mx-auto max-w-7xl">

      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>


      <div className="grid grid-cols-1 gap-6 mb-8 md:grid-cols-3 glow-effect">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-6 transition-all duration-300 border bg-gray-800/50 backdrop-blur-sm rounded-xl border-gray-700/50 hover:border-cyan-500/50 glow-effect"
        >
          <div className="flex items-center gap-4 mb-2">
            <Award className="w-6 h-6 text-cyan-400" />
            <p className="text-sm text-gray-400">#1 Platform</p>
          </div>
          <p className="text-2xl font-bold text-white">Informatika</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="p-6 transition-all duration-300 border bg-gray-800/50 backdrop-blur-sm rounded-xl border-gray-700/50 hover:border-cyan-500/50 glow-effect"
        >
          <div className="flex items-center gap-4 mb-2">
            <TrendingUp className="w-6 h-6 text-green-400" />
            <p className="text-sm text-gray-400">Success Rate</p>
          </div>
          <p className="text-2xl font-bold text-white">95%</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="p-6 transition-all duration-300 border bg-gray-800/50 backdrop-blur-sm rounded-xl border-gray-700/50 hover:border-cyan-500/50 glow-effect"
        >
          <div className="flex items-center gap-4 mb-2">
            <Users className="w-6 h-6 text-blue-400" />
            <p className="text-sm text-gray-400">Industry Partners</p>
          </div>
          <p className="text-2xl font-bold text-white">50+</p>
        </motion.div>
      </div>
       

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="p-4 mb-8 overflow-hidden bg-gray-800/30 backdrop-blur-sm rounded-xl glow-effect"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center flex-1 gap-3">
            <span className="px-2 py-1 text-xs font-semibold text-white rounded bg-cyan-500">Featured</span>
            <motion.p
              key={currentSlide}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-gray-300"
            >
              {announcements[currentSlide]}
            </motion.p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex gap-2">
              {announcements.map((_, idx) => (
                <div
                  key={idx}
                  className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                    idx === currentSlide ? 'bg-cyan-400' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </div>
        </div>
      </motion.div>


      <div className="grid gap-6 md:grid-cols-2 glow-effect">
 
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="p-8 transition-all duration-300 border bg-gray-800/50 backdrop-blur-sm rounded-xl border-gray-700/50 hover:border-cyan-500/50 glow-effect"
        >
          <motion.p
            className="mb-4 text-6xl font-bold text-cyan-400"
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            38%
          </motion.p>
          <p className="text-xl leading-relaxed text-gray-300">
            Siswa/Siswi di indonesia Kurang dalam problem solving Programming mereka
          </p>
        </motion.div>


        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="p-8 transition-all duration-300 border bg-gray-800/50 backdrop-blur-sm rounded-xl border-gray-700/50 hover:border-cyan-500/50 glow-effect"
        >
          <p className="mb-6 text-3xl font-semibold text-white">
            Tingkatkan <br /> Performa <br /> Programmingmu.
          </p>
          <motion.div
            className="relative h-48"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-800/50"></div>
            <img 
              src={performanceimg} 
              alt="Performance Graph" 
              className="object-cover w-full h-full rounded-lg"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default CyberIncidentsStats;
