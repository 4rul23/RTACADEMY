import React from 'react';
import { motion } from 'framer-motion';
import {
  Search, Settings, Bell, Beaker, Trophy, 
  Terminal, Code, Zap, Target, Users, Clock,
  Brain, Rocket, FileCode, Lock, BookOpen,
  ArrowRight, Star, Flag, Play
} from 'lucide-react';
import logo from '../assets/images/logos.png';

const LabDashboardV2 = () => {
  const learningPath = [
    {
      title: "Web Development Fundamentals",
      type: "PATH",
      progress: 75,
      totalLabs: 12,
      completedLabs: 9,
      estimatedTime: "4 hours",
      difficulty: "Beginner",
      tags: ["HTML", "CSS", "JavaScript"],
      status: "in-progress",
      image: "/api/placeholder/100/100"
    },
    {
      title: "Backend Development",
      type: "CHALLENGE",
      progress: 45,
      totalLabs: 8,
      completedLabs: 4,
      estimatedTime: "6 hours",
      difficulty: "Intermediate",
      tags: ["Node.js", "Express", "MongoDB"],
      status: "available",
      image: "/api/placeholder/100/100"
    },
    {
      title: "Advanced Security Testing",
      type: "ADVANCED",
      progress: 30,
      totalLabs: 10,
      completedLabs: 3,
      estimatedTime: "8 hours",
      difficulty: "Advanced",
      tags: ["Security", "Testing", "DevOps"],
      status: "locked",
      image: "/api/placeholder/100/100"
    }
  ];

  const weeklyGoals = {
    labsCompleted: 5,
    targetLabs: 7,
    streak: 4,
    xpGained: 2500,
    hoursSpent: 12.5
  };

  return (
    <div className="min-h-screen bg-[#0A1525] text-white">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute rounded-full top-1/4 -left-12 w-96 h-96 bg-cyan-500/20 blur-3xl animate-pulse"/>
        <div className="absolute rounded-full bottom-1/4 -right-12 w-96 h-96 bg-blue-500/20 blur-3xl animate-pulse"/>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.05)_1px,transparent_1px)] bg-[size:44px_44px]"/>
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-gray-800 bg-gray-900/50 backdrop-blur-xl">
        <div className="px-6 mx-auto">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-8">
              <img src={logo} alt="RT Academy" className="h-8" />
              <div className="relative w-96">
                <Search className="absolute w-5 h-5 text-gray-400 transform -translate-y-1/2 left-3 top-1/2" />
                <input
                  type="text"
                  placeholder="Search labs, challenges, or topics..."
                  className="w-full py-2 pl-10 pr-4 text-gray-300 border border-gray-700 rounded-lg bg-gray-800/50 placeholder:text-gray-500 focus:outline-none focus:border-cyan-500"
                />
              </div>
            </div>
            
            <div className="flex items-center gap-6">
              {/* XP Display */}
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gray-800/50 border border-gray-700">
                <Zap className="w-4 h-4 text-yellow-400" />
                <span className="font-medium text-yellow-400">2,500 XP</span>
              </div>
              
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
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500"
              >
                <Settings className="w-4 h-4" />
                Settings
              </motion.button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="px-6 pt-20 pb-12">
        <div className="mx-auto max-w-7xl">
          {/* Weekly Progress Overview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-5 gap-6 mb-8"
          >
            <div className="col-span-2 p-6 border border-gray-700 rounded-xl bg-gray-800/50 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold">Weekly Goals</h2>
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10">
                  <Trophy className="w-4 h-4 text-cyan-400" />
                  <span className="text-sm font-medium text-cyan-400">Rank #42</span>
                </div>
              </div>
              <div className="mb-4">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-400">Lab Completion</span>
                  <span className="text-cyan-400">{weeklyGoals.labsCompleted}/{weeklyGoals.targetLabs}</span>
                </div>
                <div className="h-2 bg-gray-700 rounded-full">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${(weeklyGoals.labsCompleted/weeklyGoals.targetLabs) * 100}%` }}
                    className="h-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500"
                  />
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="p-3 rounded-lg bg-gray-900/50">
                  <Zap className="w-5 h-5 mb-1 text-yellow-400" />
                  <div className="text-lg font-bold">{weeklyGoals.xpGained}</div>
                  <div className="text-xs text-gray-400">XP Gained</div>
                </div>
                <div className="p-3 rounded-lg bg-gray-900/50">
                  <Clock className="w-5 h-5 mb-1 text-blue-400" />
                  <div className="text-lg font-bold">{weeklyGoals.hoursSpent}h</div>
                  <div className="text-xs text-gray-400">Time Spent</div>
                </div>
                <div className="p-3 rounded-lg bg-gray-900/50">
                  <Flag className="w-5 h-5 mb-1 text-green-400" />
                  <div className="text-lg font-bold">{weeklyGoals.streak} Days</div>
                  <div className="text-xs text-gray-400">Streak</div>
                </div>
              </div>
            </div>

            <div className="col-span-3 p-6 border border-gray-700 rounded-xl bg-gray-800/50 backdrop-blur-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-lg bg-gradient-to-r from-cyan-500/10 to-blue-500/10">
                  <Rocket className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h2 className="text-xl font-bold">Continue Learning</h2>
                  <p className="text-gray-400">Pick up where you left off</p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { icon: Terminal, label: 'CLI Basics', progress: 75 },
                  { icon: Code, label: 'JavaScript ES6+', progress: 45 },
                  { icon: Brain, label: 'Problem Solving', progress: 30 }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -2 }}
                    className="p-4 border border-gray-700 rounded-lg bg-gray-900/50 group hover:border-cyan-500/50"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <item.icon className="w-5 h-5 text-cyan-400" />
                      <span className="text-sm text-cyan-400">{item.progress}%</span>
                    </div>
                    <h3 className="mb-2 font-medium">{item.label}</h3>
                    <div className="h-1 bg-gray-700 rounded-full">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${item.progress}%` }}
                        className="h-1 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Lab Categories */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold">Available Labs</h2>
              <div className="flex gap-3">
                {['All', 'Frontend', 'Backend', 'Security'].map((category, index) => (
                  <button
                    key={index}
                    className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                      index === 0
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-500'
                        : 'border border-gray-700 hover:bg-gray-800/50'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6">
              {learningPath.map((path, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="relative group"
                >
                  <div className="p-6 border border-gray-700 rounded-xl bg-gray-800/50 backdrop-blur-sm group-hover:border-cyan-500/50">
                    {/* Lock Overlay for Locked Content */}
                    {path.status === 'locked' && (
                      <div className="absolute inset-0 flex flex-col items-center justify-center rounded-xl bg-gray-900/80 backdrop-blur-sm">
                        <Lock className="w-8 h-8 mb-3 text-gray-400" />
                        <p className="text-gray-400">Complete previous labs to unlock</p>
                      </div>
                    )}
                    
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-gradient-to-r from-cyan-500/10 to-blue-500/10">
                          <FileCode className="w-5 h-5 text-cyan-400" />
                        </div>
                        <div>
                          <span className={`px-2 py-0.5 text-xs rounded-full ${
                            path.type === 'PATH' 
                              ? 'bg-green-500/10 text-green-400'
                              : path.type === 'CHALLENGE'
                              ? 'bg-yellow-500/10 text-yellow-400'
                              : 'bg-red-500/10 text-red-400'
                          }`}>
                            {path.type}
                          </span>
                          <h3 className="mt-1 text-lg font-medium">{path.title}</h3>
                        </div>
                      </div>
                      {path.status === 'in-progress' && (
                        <div className="px-2 py-1 text-xs font-medium rounded-full bg-cyan-500/10 text-cyan-400">
                          In Progress
                        </div>
                      )}
                    </div>

                    <div className="mb-4">
                      <div className="flex justify-between mb-1 text-sm">
                        <span className="text-gray-400">Progress</span>
                        <span className="text-cyan-400">{path.completedLabs}/{path.totalLabs} Labs</span>
                      </div>
                      <div className="h-2 bg-gray-700 rounded-full">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${path.progress}%` }}
                          className="h-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                      <div className="p-2 rounded-lg bg-gray-900/50">
                        <Clock className="w-4 h-4 mb-1 text-gray-400" />
                        <span className="text-gray-400">{path.estimatedTime}</span>
                      </div>
                      <div className="p-2 rounded-lg bg-gray-900/50">
                        <Target className="w-4 h-4 mb-1 text-gray-400" />
                        <span className="text-gray-400">{path.difficulty}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {path.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 text-xs text-gray-400 rounded-full bg-gray-900/50"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      disabled={path.status === 'locked'}
                      className={`w-full py-2.5 px-4 rounded-lg font-medium flex items-center justify-center gap-2 ${
                        path.status === 'locked'
                          ? 'bg-gray-700/50 text-gray-500 cursor-not-allowed'
                          : 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:opacity-90'
                      }`}
                    >
                      {path.status === 'in-progress' ? (
                        <>
                          Continue Lab
                          <Play className="w-4 h-4" />
                        </>
                      ) : path.status === 'locked' ? (
                        <>
                          Locked
                          <Lock className="w-4 h-4" />
                        </>
                      ) : (
                        <>
                          Start Lab
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Achievement Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="border border-gray-700 rounded-xl bg-gray-800/50 backdrop-blur-sm"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="p-2 rounded-lg bg-gradient-to-r from-yellow-500/10 to-orange-500/10">
                    <Trophy className="w-6 h-6 text-yellow-400" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold">Recent Achievements</h2>
                    <p className="text-gray-400">Keep up the great work!</p>
                  </div>
                </div>
                <button className="px-4 py-2 text-sm font-medium border rounded-lg text-cyan-400 border-cyan-500/20 hover:bg-cyan-500/10">
                  View All
                </button>
              </div>

              <div className="grid grid-cols-4 gap-4">
                {[
                  { title: 'Fast Learner', desc: 'Complete 5 labs in one day', progress: 80 },
                  { title: 'Code Warrior', desc: 'Submit 10 perfect solutions', progress: 60 },
                  { title: 'Team Player', desc: 'Help 3 other students', progress: 30 },
                  { title: 'Bug Hunter', desc: 'Find 5 bugs in code review', progress: 45 }
                ].map((achievement, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -2 }}
                    className="p-4 border border-gray-700 rounded-lg bg-gray-900/50 group hover:border-yellow-500/50"
                  >
                    <Star className="w-5 h-5 mb-3 text-yellow-400" />
                    <h3 className="mb-1 font-medium">{achievement.title}</h3>
                    <p className="mb-3 text-sm text-gray-400">{achievement.desc}</p>
                    <div className="h-1 bg-gray-700 rounded-full">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${achievement.progress}%` }}
                        className="h-1 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Quick Navigation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex justify-center gap-6 mt-8"
          >
            {[
              { icon: BookOpen, label: 'Documentation' },
              { icon: Users, label: 'Community' },
              { icon: Brain, label: 'Resources' }
            ].map((item, index) => (
              <button
                key={index}
                className="flex items-center gap-2 px-4 py-2 text-gray-400 rounded-lg hover:text-white hover:bg-gray-800/50"
              >
                <item.icon className="w-4 h-4" />
                {item.label}
              </button>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LabDashboardV2;