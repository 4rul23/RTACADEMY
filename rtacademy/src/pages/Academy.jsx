import React from 'react';
import { motion } from 'framer-motion';
import { 
  Layout, Award, Users, BookOpen, Code, FileCode, Search, Bell,
  PlayCircle, Target, Clock, Star, TrendingUp, MessageCircle, Bookmark
} from 'lucide-react';
import logo from '../assets/images/logos.png';
import { useNavigate } from 'react-router-dom';
import ruanmei from '../assets/images/ruanmei.jfif'


const Dashboard = () => {
  const navigate = useNavigate();
  // Data Models
  const learningStats = [
    { label: 'Total Jam Belajar', value: '24.5 Jam', icon: Clock },
    { label: 'Module Selesai', value: '3/12', icon: FileCode },
    { label: 'Pencapaian', value: '4 Badges', icon: Award },
    { label: 'Streak Belajar', value: '5 Hari', icon: TrendingUp }
  ];

  const quickActions = [
    { 
      icon: PlayCircle, 
      label: 'Lanjut Belajar', 
      description: 'Lanjutkan HTML Basics',
      color: 'cyan' 
    },
    { 
      icon: BookOpen, 
      label: 'Materi Terakhir', 
      description: 'HTML Elements',
      color: 'blue' 
    },
    { 
      icon: Target, 
      label: 'Goal Harian', 
      description: '2/3 Modules completed',
      color: 'green' 
    },
    { 
      icon: MessageCircle, 
      label: 'Forum Diskusi', 
      description: '3 new messages',
      color: 'purple' 
    }
  ];

  const achievements = [
    {
      title: 'HTML Master',
      description: 'Selesaikan semua modul HTML',
      progress: 25,
      icon: Star,
      color: 'yellow'
    },
    {
      title: 'Consistent Learner',
      description: '7 hari streak belajar',
      progress: 71,
      icon: TrendingUp,
      color: 'green'
    }
  ];

  const currentCourse = {
    name: "Introduction to HTML",
    progress: 25.5,
    modules: [
      {
        name: "Pengenalan HTML",
        progress: 60,
        difficulty: "Fundamental",
        status: "Continue",
        duration: "45 menit"
      },
      {
        name: "HTML Elements dan Struktur",
        progress: 0,
        difficulty: "Fundamental",
        status: "Locked",
        duration: "1 jam"
      },
      {
        name: "HTML Forms dan Tables",
        progress: 0,
        difficulty: "Intermediate",
        status: "Locked",
        duration: "1.5 jam"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-[#0A1525] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Animated Gradient Orbs */}
        <div className="absolute rounded-full top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 blur-3xl animate-pulse"></div>
        <div className="absolute delay-1000 rounded-full bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 blur-3xl animate-pulse"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.05)_1px,transparent_1px)] bg-[size:44px_44px]"></div>
      </div>

      {/* Top Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-gray-800 bg-gray-900/50 backdrop-blur-xl">
        <div className="px-6 mx-auto max-w-7xl">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-8"
            >
              <img src={logo} alt="RT Academy" className="h-8" />
              <div className="relative">
                <Search className="absolute w-5 h-5 text-gray-400 transform -translate-y-1/2 left-3 top-1/2" />
                <input
                  type="text"
                  placeholder="Cari materi pembelajaran..."
                  className="py-2 pl-10 pr-4 text-gray-300 transition-colors border border-gray-700 rounded-lg w-80 bg-gray-800/50 placeholder:text-gray-500 focus:outline-none focus:border-cyan-500"
                />
              </div>
            </motion.div>

            {/* User Section */}
            <div className="flex items-center gap-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative p-2 text-gray-400 transition-colors hover:text-white"
              >
                <Bell className="w-5 h-5" />
                <span className="absolute top-0 right-0 w-2 h-2 rounded-full bg-cyan-500"></span>
              </motion.button>

              <div className="flex items-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-4 py-2 font-medium text-white rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 hover:opacity-90"
                >
                  Upgrade Pro
                </motion.button>

                <motion.div 
                  whileHover={{ borderColor: 'rgba(6,182,212,0.5)' }}
                  className="flex items-center gap-3 px-3 py-1.5 rounded-lg border border-gray-700 transition-colors"
                >
                  <img
                    src={ruanmei}
                    alt="User"
                    className="w-8 h-8 rounded-lg"
                  />
                  <span className="text-white">Username</span>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Layout */}
      <div className="flex pt-16">
        {/* Sidebar */}
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="fixed bottom-0 left-0 w-64 p-4 border-r border-gray-800 top-16 bg-gray-900/30 backdrop-blur-sm"
        >
          {/* User Card */}
          <div className="mb-8">
            <motion.div 
              whileHover={{ borderColor: 'rgba(6,182,212,0.5)' }}
              className="p-4 border border-gray-700 bg-gray-800/50 backdrop-blur-sm rounded-xl"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={ruanmei}
                  alt="User"
                  className="w-12 h-12 rounded-lg"
                />
                <div>
                  <h3 className="font-medium text-white">Username</h3>
                  <p className="text-sm text-gray-400">Free Tier</p>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2 text-sm">
                  <span className="text-gray-400">Progress Belajar</span>
                  <span className="text-cyan-400">25%</span>
                </div>
                <div className="h-2 rounded-full bg-gray-700/50">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '25%' }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="h-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500"
                  />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Navigation */}
          <div className="space-y-2">
            {[
              { icon: Layout, label: 'Dashboard', path: '/academy', active: true },
              { icon: BookOpen, label: 'Modul Pembelajaran', path: '/module' },
              { icon: Bookmark, label: 'Learning Path', path: '/learning-path' },
              { icon: Award, label: 'Sertifikasi', path: '/certification' },
              { icon: Users, label: 'Komunitas', path: '/community' }
            ].map((item, index) => (
              <motion.button
                key={index}
                whileHover={{ x: 4 }}
                onClick={() => navigate(item.path)}
                className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all ${
                  item.active 
                    ? 'bg-gradient-to-r from-cyan-500/10 to-blue-500/10 text-white border border-cyan-500/20'
                    : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>
        {/* Main Content */}
        <div className="flex-1 p-8 ml-64">
          <div className="max-w-6xl mx-auto">
            {/* Welcome Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-12"
            >
              <h1 className="mb-2 text-3xl font-bold text-white">
                Welcome back, Username! 👋
              </h1>
              <p className="text-gray-400">
                Lanjutkan perjalanan belajar Anda dari terakhir kali
              </p>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="grid grid-cols-4 gap-6 mb-8"
            >
              {learningStats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className="p-6 transition-all duration-300 border border-gray-700 bg-gray-800/50 backdrop-blur-sm rounded-xl hover:border-cyan-500/50"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="mb-1 text-sm text-gray-400">{stat.label}</p>
                      <p className="text-2xl font-bold text-white">{stat.value}</p>
                    </div>
                    <div className="p-2 rounded-lg bg-gradient-to-r from-cyan-500/10 to-blue-500/10">
                      <stat.icon className="w-5 h-5 text-cyan-400" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Course and Actions Grid */}
            <div className="grid grid-cols-12 gap-6">
              {/* Current Course */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="col-span-8"
              >
                <div className="p-6 mb-6 transition-all duration-300 border border-gray-700 bg-gray-800/50 backdrop-blur-sm rounded-xl hover:border-cyan-500/50">
                  <div className="flex items-start gap-6">
                    <div className="p-4 rounded-xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10">
                      <Code className="w-8 h-8 text-cyan-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="mb-4 text-xl font-semibold text-white">
                        {currentCourse.name}
                      </h3>
                      <div className="mb-6">
                        <div className="flex justify-between mb-2 text-sm">
                          <span className="text-gray-400">Progress</span>
                          <span className="text-cyan-400">{currentCourse.progress}%</span>
                        </div>
                        <div className="h-2 rounded-full bg-gray-700/50">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${currentCourse.progress}%` }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="h-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500"
                          />
                        </div>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="px-6 py-2 font-medium text-white rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500"
                      >
                        Lanjutkan Belajar
                      </motion.button>
                    </div>
                  </div>
                </div>

                {/* Module List */}
                <div className="space-y-4">
                  {currentCourse.modules.map((module, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + (index * 0.1) }}
                      className="p-4 transition-all duration-300 border border-gray-700 bg-gray-800/50 backdrop-blur-sm rounded-xl hover:border-cyan-500/50"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="p-2 rounded-lg bg-gradient-to-r from-cyan-500/10 to-blue-500/10">
                            <FileCode className="w-5 h-5 text-cyan-400" />
                          </div>
                          <div>
                            <h3 className="font-medium text-white">{module.name}</h3>
                            <p className="text-sm text-gray-400">
                              {module.difficulty} • {module.duration}
                            </p>
                          </div>
                        </div>
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className={`px-4 py-2 rounded-lg font-medium ${
                            module.status === 'Continue'
                              ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white'
                              : 'bg-gray-700/50 text-gray-400'
                          }`}
                        >
                          {module.status}
                        </motion.button>
                      </div>
                      {module.progress > 0 && (
                        <div className="mt-4">
                          <div className="h-1 rounded-full bg-gray-700/50">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${module.progress}%` }}
                              transition={{ duration: 1, delay: 0.7 + (index * 0.1) }}
                              className="h-1 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500"
                            />
                          </div>
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Quick Actions */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="col-span-4 space-y-4"
              >
                {quickActions.map((action, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full p-4 transition-all duration-300 border border-gray-700 bg-gray-800/50 backdrop-blur-sm rounded-xl hover:border-cyan-500/50"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-r from-${action.color}-500/10 to-${action.color}-500/5`}>
                        <action.icon className={`h-6 w-6 text-${action.color}-400`} />
                      </div>
                      <div className="text-left">
                        <p className="font-medium text-white">{action.label}</p>
                        <p className="text-sm text-gray-400">{action.description}</p>
                      </div>
                    </div>
                  </motion.button>
                ))}
              </motion.div>
            </div>

            {/* Achievements Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-8"
            >
              <h2 className="mb-6 text-xl font-bold text-white">Pencapaian</h2>
              <div className="grid grid-cols-2 gap-6">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    className="p-6 transition-all duration-300 border border-gray-700 bg-gray-800/50 backdrop-blur-sm rounded-xl hover:border-cyan-500/50"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-r from-${achievement.color}-500/10 to-${achievement.color}-500/5`}>
                        <achievement.icon className={`h-6 w-6 text-${achievement.color}-400`} />
                      </div>
                      <div>
                        <h3 className="font-medium text-white">{achievement.title}</h3>
                        <p className="text-sm text-gray-400">{achievement.description}</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Progress</span>
                        <span className="text-cyan-400">{achievement.progress}%</span>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-gray-700/50">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${achievement.progress}%` }}
                          transition={{ duration: 1, delay: 0.8 }}
                          className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-500"
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;