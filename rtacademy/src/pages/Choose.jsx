import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { 
  School, Book, Beaker, ArrowRight, Users, Code, Terminal,
  Crown, Settings, HelpCircle, MessageSquare, User,
  Shield, CreditCard, Bell, 
} from 'lucide-react';
import logo from "../assets/images/logos.png";

const OptionPage = () => {
  const navigate = useNavigate();

  const options = [
    {
      title: "Dashboard Sekolah",
      description:
        "Kelola pembelajaran, pantau progres siswa, dan akses data analitik sekolah Anda",
      icon: School,
      path: "/school-dashboard",
      color: "cyan",
      isPremium: true,
      stats: [
        { label: "Active Students", value: "250+" },
        { label: "Courses", value: "15" },
        { label: "Avg. Progress", value: "76%" },
      ],
      features: [
        { text: "Manajemen Kelas", icon: Users },
        { text: "Analitik Pembelajaran", icon: Terminal },
        { text: "Laporan Progres", icon: Code },
      ],
    },
    {
      title: "Pembelajaran RT-ACADEMY",
      description:
        "Akses materi pembelajaran interaktif dan jalur belajar terstruktur",
      icon: Book,
      path: "/Academy",
      color: "blue",
      stats: [
        { label: "Available Courses", value: "45+" },
        { label: "Learning Paths", value: "6" },
        { label: "Projects", value: "24" },
      ],
      features: [
        { text: "Materi Interaktif", icon: Code },
        { text: "Video Tutorial", icon: Terminal },
        { text: "Proyek Praktik", icon: Users },
      ],
    },
    {
      title: "Lab RT-ACADEMY",
      description:
        "Simulasi dan praktik langsung dengan environment development yang aman",
      icon: Beaker,
      path: "/lab",
      color: "purple",
      stats: [
        { label: "Practice Labs", value: "30+" },
        { label: "Challenges", value: "50+" },
        { label: "Templates", value: "20" },
      ],
      features: [
        { text: "Live Coding", icon: Terminal },
        { text: "Debugging Tools", icon: Code },
        { text: "Project Showcase", icon: Users },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="min-h-screen bg-[#0A1525] text-white py-12 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute rounded-full top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 blur-3xl animate-pulse"></div>
        <div className="absolute delay-1000 rounded-full bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 blur-3xl animate-pulse"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.05)_1px,transparent_1px)] bg-[size:44px_44px]"></div>
      </div>

      <div className="fixed top-0 left-0 right-0 z-50 px-4 border-b border-gray-800 bg-gray-900/50 backdrop-blur-xl">
  <div className="flex items-center justify-between h-16 mx-auto max-w-7xl">
    <img src={logo} alt="RT Academy" className="h-8" />
    <div className="flex items-center gap-6">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative p-2 text-gray-400 transition-colors hover:text-white"
      >
        <Bell className="w-5 h-5" />
        <span className="absolute top-0 right-0 w-2 h-2 rounded-full bg-cyan-500"></span>
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => navigate('/settings')}
        className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500"
      >
        <Settings className="w-4 h-4" />
        Settings
      </motion.button>
    </div>
  </div>
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
            Pilih platform yang ingin Anda akses untuk memulai perjalanan
            pembelajaran Anda
          </p>
        </motion.div>

        {/* User Profile Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl p-6 mx-auto mb-12 border border-gray-700 bg-gray-800/50 backdrop-blur-sm rounded-xl"
        >
          <div className="flex items-center gap-6">
            <div className="relative">
              <img
                src="https://ui-avatars.com/api/?name=User&background=0A1525&color=fff"
                alt="Profile"
                className="w-16 h-16 border-2 rounded-xl border-cyan-500/20"
              />
              <div className="absolute -bottom-2 -right-2 p-1.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg">
                <Crown className="w-4 h-4 text-white" />
              </div>
            </div>
            <div className="flex-1">
              <h2 className="mb-1 text-xl font-bold text-white">
                Welcome back, Username!
              </h2>
              <p className="text-gray-400">Continue your learning journey</p>
            </div>
            <div className="flex gap-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-white">24.5</p>
                <p className="text-sm text-gray-400">Hours Learned</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-white">4</p>
                <p className="text-sm text-gray-400">Certificates</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Recent Activity */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-12"
        >
          <div className="p-6 border border-gray-700 bg-gray-800/50 backdrop-blur-sm rounded-xl">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-white">
                Profile & Settings
              </h3>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => navigate("/settings")}
                className="px-4 py-2 text-sm border rounded-lg text-cyan-400 border-cyan-500/20 hover:bg-cyan-500/10"
              >
                View All Settings
              </motion.button>
            </div>

            

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4 p-4 mt-6 border border-gray-700 md:grid-cols-4 rounded-xl bg-gray-900/50">
              <div className="text-center">
                <p className="text-2xl font-bold text-white">24.5h</p>
                <p className="text-sm text-gray-400">Learning Time</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-white">4/12</p>
                <p className="text-sm text-gray-400">Modules Done</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-white">75%</p>
                <p className="text-sm text-gray-400">Avg. Score</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-white">5</p>
                <p className="text-sm text-gray-400">Certificates</p>
              </div>
            </div>
          </div>
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
              className="relative p-6 transition-all duration-300 border border-gray-700 bg-gray-800/50 backdrop-blur-sm rounded-2xl hover:border-cyan-500/50 group"
            >
              {/* Premium Badge */}
              {option.isPremium && (
                <div className="absolute px-3 py-1 text-xs font-medium rounded-full top-4 right-4 text-cyan-400 bg-cyan-500/10">
                  Premium
                </div>
              )}

              {/* Card Header */}
              <div
                className={`relative bg-gradient-to-r from-${option.color}-500/10 to-${option.color}-500/5 p-4 rounded-xl w-fit mb-6 overflow-hidden group-hover:from-${option.color}-500/20 group-hover:to-${option.color}-500/10 transition-colors`}
              >
                <option.icon className={`w-8 h-8 text-${option.color}-400`} />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer" />
              </div>

              <h2 className="mb-3 text-xl font-semibold">{option.title}</h2>
              <p className="mb-6 text-gray-400">{option.description}</p>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                {option.stats.map((stat, idx) => (
                  <div
                    key={idx}
                    className="p-2 text-center rounded-lg bg-gray-900/50"
                  >
                    <p className="text-lg font-bold text-white">{stat.value}</p>
                    <p className="text-xs text-gray-400">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* Features */}
              <div className="mb-8 space-y-3">
                {option.features.map((feature, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ x: 4 }}
                    className="flex items-center p-2 text-gray-300 transition-colors rounded-lg hover:bg-gray-700/50"
                  >
                    <feature.icon className="w-4 h-4 mr-2 text-cyan-400" />
                    <span>{feature.text}</span>
                  </motion.div>
                ))}
              </div>

              {/* Action Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => navigate(option.path)}
                className="relative flex items-center justify-center w-full gap-2 px-4 py-3 overflow-hidden font-medium rounded-lg group"
              >
                <div className="absolute inset-0 transition-opacity bg-gradient-to-r from-cyan-500 to-blue-500 group-hover:opacity-90" />
                <span className="relative">Akses {option.title}</span>
                <ArrowRight className="relative w-4 h-4 transition-transform group-hover:translate-x-1" />
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
        
          


        
        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-center gap-4 mt-8"
        >
          {[
            { icon: Settings, label: "Settings" },
            { icon: HelpCircle, label: "Help Center" },
            { icon: MessageSquare, label: "Support" },
          ].map((action, index) => (
            <motion.button
              key={index}
              whileHover={{ y: -2 }}
              className="flex flex-col items-center p-4 text-gray-400 hover:text-gray-300"
            >
              <action.icon className="w-5 h-5 mb-1" />
              <span className="text-sm">{action.label}</span>
            </motion.button>
          ))}
        </motion.div>

        

        {/* Bottom Help Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center text-gray-400"
        >
          Butuh bantuan?{" "}
          <a href="/help" className="text-cyan-400 hover:text-cyan-300">
            Hubungi support tim kami
          </a>
        </motion.p>
      </div>
    </div>
  );
};

export default OptionPage;
