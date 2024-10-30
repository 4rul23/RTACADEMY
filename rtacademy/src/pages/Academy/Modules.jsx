import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Layout,  Award, Users, BookOpen,  Search,
  Clock,  Heart,  Bell,
  BookOpen as  Layers,  Bookmark, X
} from 'lucide-react';
import Navbar from '../../components/common/navbar';
import logo from '../../assets/images/logos.png';
import { useNavigate } from 'react-router-dom';

const ModulesPage = () => {
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const navigate = useNavigate();
  

  const modules = [
    {
      title: "HTML Fundamentals",
      description: "Dasar-dasar HTML dan struktur website",
      difficulty: "fundamental",
      category: "frontend",
      type: "core",
      sections: 8,
      duration: "2 hours",
      image: "/path/to/html.jpg",
      tags: ["Frontend", "Web"],
      status: "new"
    },
    {
      title: "CSS Basics",
      description: "Styling dan layout dengan CSS",
      difficulty: "easy",
      category: "frontend",
      type: "core",
      sections: 10,
      duration: "3 hours",
      image: "/path/to/css.jpg",
      tags: ["Frontend", "Design"],
      status: "updated"
    },
    {
      title: "JavaScript Essential",
      description: "Fundamental JavaScript modern",
      difficulty: "medium",
      category: "frontend",
      type: "core",
      sections: 12,
      duration: "4 hours",
      image: "/path/to/js.jpg",
      tags: ["Frontend", "Programming"],
      status: "new"
    },
    {
      title: "React Basics",
      description: "Membangun UI dengan React",
      difficulty: "medium",
      category: "frontend",
      type: "advanced",
      sections: 15,
      duration: "6 hours",
      image: "/path/to/react.jpg",
      tags: ["Frontend", "Framework"],
      status: "new"
    }
  ];

  const filterButtons = {
    difficulty: [
      { label: 'All', value: 'all' },
      { label: 'Fundamental', value: 'fundamental' },
      { label: 'Easy', value: 'easy' },
      { label: 'Medium', value: 'medium' },
      { label: 'Hard', value: 'hard' }
    ],
    category: [
      { label: 'All', value: 'all' },
      { label: 'Frontend', value: 'frontend' },
      { label: 'Backend', value: 'backend' },
      { label: 'Database', value: 'database' }
    ],
    type: [
      { label: 'All', value: 'all' },
      { label: 'Core Modules', value: 'core' },
      { label: 'Mini Modules', value: 'mini' },
      { label: 'Projects', value: 'project' }
    ]
  };

  // Filter logic
  const filteredModules = modules.filter(module => {
    const difficultyMatch = selectedDifficulty === 'all' || module.difficulty === selectedDifficulty;
    const categoryMatch = selectedCategory === 'all' || module.category === selectedCategory;
    const typeMatch = selectedType === 'all' || module.type === selectedType;
    return difficultyMatch && categoryMatch && typeMatch;
  });

  const getDifficultyColor = (difficulty) => {
    const colors = {
      fundamental: 'cyan',
      easy: 'green',
      medium: 'yellow',
      hard: 'red'
    };
    return colors[difficulty] || 'gray';
  };

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
              { icon: BookOpen, label: 'Modul Pembelajaran', path: '/module', active: true },
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

{/* Main Content - Moved 64px from left for sidebar */}
<div className="flex-1 p-8 ml-64">
  <div className="max-w-6xl mx-auto">
    {/* Header Section */}
    <div className="mb-8">
      <h1 className="mb-4 text-3xl font-bold text-white">Learning Modules</h1>
      <div className="flex items-center gap-4">
        <div className="relative flex-1 max-w-2xl">
          <Search className="absolute w-5 h-5 text-gray-400 transform -translate-y-1/2 left-4 top-1/2" />
          <input
            type="text"
            placeholder="Search modules..."
            className="w-full py-3 pl-12 pr-4 text-gray-300 transition-colors border border-gray-700 rounded-xl bg-gray-800/50 placeholder:text-gray-500 focus:outline-none focus:border-cyan-500"
          />
        </div>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="px-4 py-3 font-medium text-white rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500"
        >
          My Progress
        </motion.button>
      </div>
    </div>

    {/* Filter Sections */}
    <div className="mb-8 space-y-3">
  {/* Filter Groups */}
  <div className="p-4 border border-gray-700 bg-gray-800/50 backdrop-blur-sm rounded-xl">
    <div className="grid gap-3 md:grid-cols-3">
      {/* Difficulty Filter */}
      <div className="p-3 space-y-2 border border-gray-700 rounded-lg bg-gray-900/50">
        <h3 className="text-sm font-medium text-gray-400">Difficulty</h3>
        <div className="flex flex-wrap gap-2">
          {filterButtons.difficulty.map((button) => (
            <motion.button
              key={button.value}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedDifficulty(button.value)}
              className={`px-3 py-1.5 text-sm rounded-lg transition-all ${
                selectedDifficulty === button.value
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium'
                  : 'bg-gray-800/80 text-gray-400 hover:text-white hover:bg-gray-700/80'
              }`}
            >
              {button.label}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Category Filter */}
      <div className="p-3 space-y-2 border border-gray-700 rounded-lg bg-gray-900/50">
        <h3 className="text-sm font-medium text-gray-400">Category</h3>
        <div className="flex flex-wrap gap-2">
          {filterButtons.category.map((button) => (
            <motion.button
              key={button.value}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedCategory(button.value)}
              className={`px-3 py-1.5 text-sm rounded-lg transition-all ${
                selectedCategory === button.value
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium'
                  : 'bg-gray-800/80 text-gray-400 hover:text-white hover:bg-gray-700/80'
              }`}
            >
              {button.label}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Category Filter */}
      <div className="p-3 space-y-2 border border-gray-700 rounded-lg bg-gray-900/50">
        <h3 className="text-sm font-medium text-gray-400">Category</h3>
        <div className="flex flex-wrap gap-2">
          {filterButtons.category.map((button) => (
            <motion.button
              key={button.value}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedCategory(button.value)}
              className={`px-3 py-1.5 text-sm rounded-lg transition-all ${
                selectedCategory === button.value
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium'
                  : 'bg-gray-800/80 text-gray-400 hover:text-white hover:bg-gray-700/80'
              }`}
            >
              {button.label}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Active Filters Display */}
  {(selectedDifficulty !== 'all' || selectedCategory !== 'all' || selectedType !== 'all') && (
    <div className="flex items-center gap-4">
      <span className="text-sm text-gray-400">Active Filters:</span>
      <div className="flex flex-wrap gap-2">
        {selectedDifficulty !== 'all' && (
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            onClick={() => setSelectedDifficulty('all')}
            className="inline-flex items-center gap-1 px-2 py-1 text-sm rounded-lg text-cyan-400 bg-cyan-500/10 hover:bg-cyan-500/20"
          >
            {filterButtons.difficulty.find(b => b.value === selectedDifficulty)?.label}
            <X className="w-4 h-4" />
          </motion.button>
        )}
        {selectedCategory !== 'all' && (
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            onClick={() => setSelectedCategory('all')}
            className="inline-flex items-center gap-1 px-2 py-1 text-sm text-blue-400 rounded-lg bg-blue-500/10 hover:bg-blue-500/20"
          >
            {filterButtons.category.find(b => b.value === selectedCategory)?.label}
            <X className="w-4 h-4" />
          </motion.button>
        )}
        {selectedType !== 'all' && (
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            onClick={() => setSelectedType('all')}
            className="inline-flex items-center gap-1 px-2 py-1 text-sm text-purple-400 rounded-lg bg-purple-500/10 hover:bg-purple-500/20"
          >
            {filterButtons.type.find(b => b.value === selectedType)?.label}
            <X className="w-4 h-4" />
          </motion.button>
        )}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => {
            setSelectedDifficulty('all');
            setSelectedCategory('all');
            setSelectedType('all');
          }}
          className="px-2 py-1 text-sm text-gray-400 rounded-lg hover:text-white hover:bg-gray-700/50"
        >
          Clear All
        </motion.button>
      </div>
    </div>
  )}
</div>

      {/* Type Filter */}
      <div className="p-3 space-y-2 border border-gray-700 rounded-lg bg-gray-900/50">
        <h3 className="text-sm font-medium text-gray-400">Module Type</h3>
        <div className="flex flex-wrap gap-2">
          {filterButtons.type.map((button) => (
            <motion.button
              key={button.value}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedType(button.value)}
              className={`px-3 py-1.5 text-sm rounded-lg transition-all ${
                selectedType === button.value
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium'
                  : 'bg-gray-800/80 text-gray-400 hover:text-white hover:bg-gray-700/80'
              }`}
            >
              {button.label}
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  </div>

    {/* Modules Grid */}
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {filteredModules.map((module, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="relative overflow-hidden transition-all duration-300 border border-gray-700 group bg-gray-800/50 backdrop-blur-sm rounded-xl hover:border-cyan-500/50"
        >
          {/* Module Header */}
          <div className="relative h-48">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/90"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20"></div>
            <div className="absolute flex items-center justify-between w-full p-4">
              <div className="flex gap-2">
                {module.status === 'new' && (
                  <span className="px-2 py-1 text-xs font-semibold rounded-full bg-cyan-500/20 text-cyan-400">
                    NEW
                  </span>
                )}
                {module.status === 'updated' && (
                  <span className="px-2 py-1 text-xs font-semibold text-blue-400 rounded-full bg-blue-500/20">
                    UPDATED
                  </span>
                )}
              </div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 transition-colors rounded-lg hover:bg-gray-700/50"
              >
                <Heart className="w-5 h-5 text-gray-400" />
              </motion.button>
            </div>
            <div className="absolute bottom-0 w-full p-4">
              <h3 className="mb-2 text-xl font-bold text-white">
                {module.title}
              </h3>
              <p className="text-gray-300">
                {module.description}
              </p>
            </div>
          </div>

          {/* Module Info */}
          <div className="p-4">
            <div className="flex flex-wrap gap-2 mb-4">
              {module.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-2 py-1 text-xs text-gray-300 rounded-lg bg-gray-700/50"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex items-center justify-between text-sm text-gray-400">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1">
                  <Layers className="w-4 h-4" />
                  {module.sections} Sections
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {module.duration}
                </span>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-3 py-1 text-white rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500"
              >
                Start
              </motion.button>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</div>

      </div>
    </div>
  );
};

export default ModulesPage;