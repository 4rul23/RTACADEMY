import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
    Server, Database, 
    Layout, 
    Monitor,  Search, Workflow,
    Boxes,  ChevronRight, Bell, BookOpen, Award, Users, Bookmark
  } from 'lucide-react';
import logo from '../../assets/images/logos.png';
const LearningPathsPage = () => {
    const navigate = useNavigate();
  const learningPaths = [
    {
      title: "Junior Frontend Developer",
      description: "Mulai perjalanan Anda sebagai Frontend Developer dengan menguasai fundamental web development",
      icon: Monitor,
      level: "Beginner",
      duration: "6 Bulan",
      color: "cyan",
      modules: [
        { name: "HTML & CSS Fundamentals", duration: "4 minggu" },
        { name: "JavaScript Basics", duration: "4 minggu" },
        { name: "Responsive Web Design", duration: "2 minggu" },
        { name: "Basic React.js", duration: "4 minggu" },
        { name: "Version Control (Git)", duration: "2 minggu" },
        { name: "Web Performance", duration: "2 minggu" }
      ]
    },
    {
      title: "Senior Frontend Developer",
      description: "Tingkatkan keahlian Frontend Anda dengan teknologi dan praktik modern",
      icon: Layout,
      level: "Advanced",
      duration: "8 Bulan",
      color: "blue",
      modules: [
        { name: "Advanced React & Redux", duration: "6 minggu" },
        { name: "Next.js & SSR", duration: "4 minggu" },
        { name: "Testing & Debugging", duration: "4 minggu" },
        { name: "Design Systems", duration: "4 minggu" },
        { name: "Performance Optimization", duration: "4 minggu" },
        { name: "Advanced TypeScript", duration: "4 minggu" },
        { name: "CI/CD for Frontend", duration: "2 minggu" }
      ]
    },
    {
      title: "Junior Backend Developer",
      description: "Pelajari dasar-dasar pengembangan Backend dengan Node.js dan Express",
      icon: Server,
      level: "Beginner",
      duration: "6 Bulan",
      color: "green",
      modules: [
        { name: "Node.js Fundamentals", duration: "4 minggu" },
        { name: "Express.js Basics", duration: "4 minggu" },
        { name: "REST API Development", duration: "4 minggu" },
        { name: "Database Basics (MySQL)", duration: "4 minggu" },
        { name: "Authentication & Authorization", duration: "2 minggu" },
        { name: "API Security", duration: "2 minggu" }
      ]
    },
    {
      title: "Senior Backend Developer",
      description: "Kuasai arsitektur Backend yang kompleks dan praktik terbaik",
      icon: Database,
      level: "Advanced",
      duration: "8 Bulan",
      color: "purple",
      modules: [
        { name: "Microservices Architecture", duration: "6 minggu" },
        { name: "Advanced Node.js", duration: "4 minggu" },
        { name: "Database Optimization", duration: "4 minggu" },
        { name: "System Design", duration: "6 minggu" },
        { name: "Cloud Services (AWS)", duration: "4 minggu" },
        { name: "Monitoring & Logging", duration: "4 minggu" }
      ]
    },
    {
      title: "Fullstack JavaScript Developer",
      description: "Menjadi developer lengkap dengan keahlian Frontend dan Backend",
      icon: Boxes,
      level: "Intermediate",
      duration: "12 Bulan",
      color: "yellow",
      modules: [
        { name: "Frontend Fundamentals", duration: "8 minggu" },
        { name: "Backend Basics", duration: "8 minggu" },
        { name: "Database Management", duration: "6 minggu" },
        { name: "Full Stack Projects", duration: "8 minggu" },
        { name: "Deployment & DevOps", duration: "6 minggu" },
        { name: "Testing & Security", duration: "6 minggu" }
      ]
    },
    {
      title: "DevOps Engineer",
      description: "Pelajari praktik DevOps modern dan otomatisasi infrastruktur",
      icon: Workflow,
      level: "Advanced",
      duration: "8 Bulan",
      color: "red",
      modules: [
        { name: "Linux Administration", duration: "4 minggu" },
        { name: "Container & Docker", duration: "4 minggu" },
        { name: "Kubernetes", duration: "6 minggu" },
        { name: "CI/CD Pipelines", duration: "4 minggu" },
        { name: "Cloud Infrastructure", duration: "4 minggu" },
        { name: "Monitoring & Logging", duration: "4 minggu" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#0A1525] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute rounded-full top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 blur-3xl animate-pulse"></div>
        <div className="absolute delay-1000 rounded-full bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 blur-3xl animate-pulse"></div>
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
                    src="https://ui-avatars.com/api/?name=User&background=0A1525&color=fff"
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
                  src="https://ui-avatars.com/api/?name=User&background=0A1525&color=fff"
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
              { icon: Layout, label: 'Dashboard', path: '/academy' },
              { icon: BookOpen, label: 'Modul Pembelajaran', path: '/module' },
              { icon: Bookmark, label: 'Learning Path', path: '/learning-path', active: true },
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

        {/* Main Content Area with Learning Paths */}
        <div className="flex-1 p-8 ml-64">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-12"
            >
              <h1 className="mb-4 text-3xl font-bold text-white">Learning Paths</h1>
              <p className="text-gray-400">Pilih jalur pembelajaran yang sesuai dengan tujuan karir Anda di industri teknologi</p>
            </motion.div>

        {/* Learning Paths Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {learningPaths.map((path, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-6 transition-all duration-300 border border-gray-700 group bg-gray-800/50 backdrop-blur-sm rounded-xl hover:border-cyan-500/50"
            >
              {/* Path Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className={`p-3 rounded-xl bg-${path.color}-500/10`}>
                  <path.icon className={`w-6 h-6 text-${path.color}-400`} />
                </div>
                <div>
                  <h3 className="mb-1 text-xl font-bold text-white">{path.title}</h3>
                  <p className="text-sm text-gray-400">{path.description}</p>
                </div>
              </div>

              {/* Path Info */}
              <div className="flex items-center gap-4 mb-6 text-sm">
                <span className={`px-2 py-1 rounded-lg bg-${path.color}-500/10 text-${path.color}-400`}>
                  {path.level}
                </span>
                <span className="text-gray-400">
                  {path.duration}
                </span>
              </div>

              {/* Modules List */}
              <div className="mb-6 space-y-3">
                {path.modules.map((module, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-3 transition-colors border border-gray-700 rounded-lg bg-gray-800/50 hover:border-gray-600"
                  >
                    <span className="text-sm text-gray-300">{module.name}</span>
                    <span className="text-xs text-gray-500">{module.duration}</span>
                  </div>
                ))}
              </div>

              {/* Action Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center w-full gap-2 px-4 py-3 font-medium text-white transition-colors rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 hover:opacity-90"
              >
                Mulai Learning Path
                <ChevronRight className="w-4 h-4" />
              </motion.button>
            </motion.div>
          ))}
</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningPathsPage;