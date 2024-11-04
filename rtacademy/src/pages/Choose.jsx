import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  Beaker, ArrowRight, Settings, Bell,
  BookOpen, Star, Activity, Users,  Timer,
  School, Trophy,  Flame, Target, Lock
} from 'lucide-react';
import logo from '../assets/images/logos.png';
import pwn from '../assets/videos/pwnagotchi-unscreen.gif'

const ChoosePlatform = () => {
  const navigate = useNavigate();

  const stats = [
    { icon: Timer, label: 'Learning Time', value: '24.5h' },
    { icon: Target, label: 'Points', value: '1,234' },
    { icon: Trophy, label: 'Achievements', value: '15' },
    { icon: Flame, label: 'Daily Streak', value: '7' }
  ];

  const platforms = [
    {
      title: "Learning Path",
      description: "Mulai perjalanan belajar programming Anda",
      icon: BookOpen,
      path: "/academy",
      color: "cyan",
      stats: {
        completion: "65%",
        modules: "12",
        hours: "24.5"
      },
      features: [
        "Materi pembelajaran interaktif",
        "Video tutorial step-by-step",
        "Proyek praktis",
        "Quiz & assessments"
      ]
    },
    {
      title: "Lab RT-ACADEMY",
      description: "Praktik coding dalam environment yang aman",
      icon: Beaker,
      path: "/lab",
      color: "blue",
      stats: {
        completion: "45%",
        exercises: "25",
        projects: "8"
      },
      features: [
        "Live coding environment",
        "Real-time code preview",
        "Debugging tools",
        "Project workspace"
      ]
    },
    {
      title: "School Dashboard",
      description: "Platform manajemen pembelajaran sekolah",
      icon: School,
      path: "/school",
      color: "purple",
      isComingSoon: true,
      stats: {
        students: "250+",
        classes: "12",
        teachers: "8"
      },
      features: [
        "Manajemen kelas",
        "Progress tracking",
        "Analytics dashboard",
        "Resource center"
      ]
    }
  ];

  return (
    
    <div className="min-h-screen bg-[#0A1525] text-white relative overflow-hidden">
    {/* Background Elements */}
    <div className="absolute inset-0 pointer-events-none">
      {/* Animated Gradient Orbs */}
      <div className="absolute rounded-full top-1/4 -left-12 w-96 h-96 bg-cyan-500/20 blur-3xl animate-pulse"/>
      <div className="absolute rounded-full bottom-1/4 -right-12 w-96 h-96 bg-blue-500/20 blur-3xl animate-pulse"/>
      <div className="absolute delay-150 rounded-full top-3/4 left-1/4 w-96 h-96 bg-purple-500/20 blur-3xl animate-pulse"/>
      <div className="absolute delay-300 rounded-full bottom-3/4 right-1/4 w-96 h-96 bg-blue-500/20 blur-3xl animate-pulse"/>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.05)_1px,transparent_1px)] bg-[size:44px_44px]"/>
      
      {/* Additional Decorative Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent"/>
    </div>
      
      {/* Navbar */}
      <motion.nav 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="fixed top-0 left-0 right-0 z-50 border-b border-gray-800 bg-gray-900/50 backdrop-blur-xl"
      >
        <div className="px-6 mx-auto max-w-7xl">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-8">
              <img src={logo} alt="RT Academy" className="h-8" />
              <div className="flex gap-6">
                {[
                  { label: 'Overview', active: true },
                  { label: 'My Learning' },
                  { label: 'Resources' }
                ].map((item, index) => (
                  <button
                    key={index}
                    className={`text-sm font-medium px-4 py-2 rounded-lg transition-colors ${
                      item.active 
                        ? 'bg-cyan-500/10 text-cyan-400' 
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative p-2 text-gray-400 transition-colors hover:text-white"
              >
                <Bell className="w-5 h-5" />
                <span className="absolute top-0 right-0 w-2 h-2 rounded-full bg-cyan-500"/>
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
      </motion.nav>

      {/* Main Content */}
      <div className="px-6 pt-24 pb-12">
        <div className="mx-auto max-w-7xl">
          {/* Welcome Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid gap-8 mb-12 md:grid-cols-2"
          >
            <div>
              <h1 className="mb-4 text-4xl font-bold">Welcome to RT-ACADEMY</h1>
              <p className="mb-8 text-xl text-gray-400">
                Pilih jalur pembelajaran Anda dan mulai perjalanan menjadi developer profesional
              </p>
              <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
      className="flex items-center justify-center gap-2 mb-8 brightness-0 invert"
    >
      <img 
        src={pwn} 
        alt="Decorative Emoticon"
        className="h-256" // Sesuaikan ukuran sesuai kebutuhan
      />
    </motion.div>

            </div>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + (index * 0.1) }}
                  className="p-6 border border-gray-700 rounded-xl bg-gray-800/50 backdrop-blur-sm"
                >
                  <stat.icon className="w-6 h-6 mb-3 text-cyan-400" />
                  <div className="mb-1 text-2xl font-bold">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Platforms Grid */}
          <div className="grid gap-8 md:grid-cols-3">
        {platforms.map((platform, index) => (
          <motion.div
            key={platform.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + (index * 0.1) }}
            className="relative group"
          >
            <div className="h-full p-6 transition-all border border-gray-700 rounded-2xl bg-gray-800/50 backdrop-blur-sm hover:border-cyan-500/50">
              {/* Coming Soon Badge */}
              {platform.isComingSoon && (
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center rounded-2xl bg-gray-900/80 backdrop-blur-sm">
                  <div className="p-3 mb-4 rounded-full bg-purple-500/20">
                    <Lock className="w-8 h-8 text-purple-400" />
                  </div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="px-6 py-2 border rounded-full bg-gradient-to-r from-purple-500/20 to-purple-500/10 border-purple-500/20"
                  >
                    <span className="text-lg font-bold text-purple-400">Coming Soon</span>
                  </motion.div>
                  <p className="px-6 mt-4 text-center text-gray-400">
                    Platform ini sedang dalam pengembangan.<br/>Stay tuned!
                  </p>
                </div>
              )}

              <div className="flex items-start gap-4 mb-6">
                <div className={`p-3 rounded-xl bg-gradient-to-r from-${platform.color}-500/10 to-${platform.color}-500/5`}>
                  <platform.icon className={`w-8 h-8 text-${platform.color}-400`} />
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-bold">{platform.title}</h3>
                  <p className="text-gray-400">{platform.description}</p>
                </div>
              </div>

                  {/* Statistics */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {Object.entries(platform.stats).map(([key, value], idx) => (
                      <div key={idx} className="p-3 text-center rounded-xl bg-gray-900/50">
                        <div className="text-lg font-bold">{value}</div>
                        <div className="text-xs text-gray-400 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>

                  {/* Features */}
                  <div className="mb-6 space-y-3">
                    {platform.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-gray-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => navigate(platform.path)}
                    className="flex items-center justify-center w-full gap-2 px-4 py-3 font-medium text-white rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 hover:opacity-90 group"
                  >
                    Access Platform
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Quick Actions */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex justify-center gap-6 mt-12 text-gray-400"
          >
            <button className="flex items-center gap-2 hover:text-white">
              <Activity className="w-4 h-4" />
              View Progress
            </button>
            <button className="flex items-center gap-2 hover:text-white">
              <Star className="w-4 h-4" />
              Achievements
            </button>
            <button className="flex items-center gap-2 hover:text-white">
              <Users className="w-4 h-4" />
              Community
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ChoosePlatform;