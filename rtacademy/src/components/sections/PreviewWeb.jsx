import React from 'react';
import { motion } from 'framer-motion';
import preview from '../../assets/images/preview.png';
import bookicon from '../../assets/images/buku.png';
import telkom from '../../assets/images/telkomschool.png';

const PreviewWeb = () => {
  return (
    <div className="min-h-screen bg-[#0A1525] py-20 px-6 lg:px-8 relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A1525] via-[#0A1525]/90 to-[#0A1525]"></div>
      
      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header Section */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h1 className="mb-12 text-4xl font-bold leading-tight text-white md:text-5xl">
            Pembelajaran web development <br/> 
            interaktif untuk siswa SMA/SMK di Indonesia
          </h1>
          
          <div className="flex flex-wrap justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-[#00E8FF] text-gray-900 rounded-lg font-medium hover:opacity-90 transition-all"
            >
              Mulai Sekarang
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 font-medium text-white transition-all bg-gray-800 border border-gray-700 rounded-lg hover:bg-gray-700"
            >
              Coba Gratis
            </motion.button>
          </div>
        </motion.header>

        {/* Dashboard Preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative mb-24"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1525] via-transparent to-transparent z-10"></div>
          <img 
            src={preview} 
            alt="Dashboard screenshot" 
            className="w-full shadow-2xl rounded-xl shadow-cyan-500/10"
          />
        </motion.div>

        {/* Info Cards */}
        <div className="grid gap-8 md:grid-cols-2">
          {/* Case Study Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 transition-all border border-gray-700 bg-gray-800/50 backdrop-blur-sm rounded-xl hover:border-cyan-500/50 group"
          >
            <div className="flex items-start gap-6">
              <img 
                src={telkom} 
                alt="Telkom Schools" 
                className="object-contain w-20 h-20"
              />
              <div>
                <h2 className="mb-4 text-xl font-semibold text-white transition-colors group-hover:text-cyan-400">
                  Studi Kasus
                </h2>
                <p className="leading-relaxed text-gray-400 transition-colors group-hover:text-gray-300">
                  Pelajari bagaimana sebuah startup teknologi meningkatkan keterampilan tim mereka dan mempersiapkan diri untuk proyek pengembangan web terkini.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Why RT ACADEMY Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 transition-all border border-gray-700 bg-gray-800/50 backdrop-blur-sm rounded-xl hover:border-cyan-500/50 group"
          >
            <div className="flex items-start gap-6">
              <img 
                src={bookicon} 
                alt="Book Icon" 
                className="object-contain w-20 h-20"
              />
              <div>
                <h2 className="mb-4 text-xl font-semibold text-white transition-colors group-hover:text-cyan-400">
                  Why RT ACADEMY?
                </h2>
                <p className="leading-relaxed text-gray-400 transition-colors group-hover:text-gray-300">
                  Pengembang web Indonesia perlu terus mengikuti tren teknologi, meningkatkan keahlian, dan bersaing di pasar global.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PreviewWeb;