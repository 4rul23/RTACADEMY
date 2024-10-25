
import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { School, Book, Beaker, ArrowRight, Users, Code, Terminal } from 'lucide-react';
import logo from '../assets/images/logos.png';

const OptionPage = () => {
  const navigate = useNavigate();

  const options = [
    {
      title: "Dashboard Sekolah",
      description: "Kelola pembelajaran, pantau progres siswa, dan akses data analitik sekolah Anda",
      icon: School,
      path: "/school-dashboard",
      color: "cyan",
      features: [
        { text: "Manajemen Kelas", icon: Users },
        { text: "Analitik Pembelajaran", icon: Terminal },
        { text: "Laporan Progres", icon: Code }
      ]
    },
    {
      title: "Pembelajaran RT-ACADEMY",
      description: "Akses materi pembelajaran interaktif dan jalur belajar terstruktur",
      icon: Book,
      path: "/Academy",
      color: "blue",
      features: [
        { text: "Materi Interaktif", icon: Code },
        { text: "Video Tutorial", icon: Terminal },
        { text: "Proyek Praktik", icon: Users }
      ]
    },
    {
      title: "Lab RT-ACADEMY",
      description: "Simulasi dan praktik langsung dengan environment development yang aman",
      icon: Beaker,
      path: "/lab",
      color: "purple",
      features: [
        { text: "Live Coding", icon: Terminal },
        { text: "Debugging Tools", icon: Code },
        { text: "Project Showcase", icon: Users }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="min-h-screen bg-[#0A1525] text-white py-12 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute rounded-full top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 blur-3xl animate-pulse"></div>
        <div className="absolute delay-1000 rounded-full bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 blur-3xl animate-pulse"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.05)_1px,transparent_1px)] bg-[size:44px_44px]"></div>
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 text-center"
        >
          <img src={logo} alt="RT Academy Logo" className="h-12 mx-auto mb-8" />
          <h1 className="mb-4 text-3xl font-bold md:text-4xl">
            Selamat Datang di RT Academy
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-400">
            Pilih platform yang ingin Anda akses untuk memulai perjalanan pembelajaran Anda
          </p>
        </motion.div>

        {/* Options Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid gap-8 md:grid-cols-3"
        >
          {options.map((option) => (
            <motion.div
              key={option.title}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="p-6 transition-all duration-300 border border-gray-700 bg-gray-800/50 backdrop-blur-sm rounded-2xl hover:border-cyan-500/50"
            >
              {/* Card Header */}
              <div className={`bg-${option.color}-500/10 p-3 rounded-xl w-fit mb-6`}>
                <option.icon className={`w-8 h-8 text-${option.color}-400`} />
              </div>
              
              <h2 className="mb-3 text-xl font-semibold">{option.title}</h2>
              <p className="mb-6 text-gray-400">{option.description}</p>

              {/* Features List */}
              <div className="mb-8 space-y-3">
                {option.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center text-gray-300">
                    <feature.icon className="w-4 h-4 mr-2 text-cyan-400" />
                    <span>{feature.text}</span>
                  </div>
                ))}
              </div>

              {/* Action Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => navigate(option.path)}
                className="flex items-center justify-center w-full gap-2 px-4 py-3 font-medium transition-all rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 group hover:opacity-90"
              >
                Akses {option.title}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Help Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center text-gray-400"
        >
          Butuh bantuan? <a href="/help" className="text-cyan-400 hover:text-cyan-300">Hubungi support tim kami</a>
        </motion.p>
      </div>
    </div>
  );
};

export default OptionPage;
