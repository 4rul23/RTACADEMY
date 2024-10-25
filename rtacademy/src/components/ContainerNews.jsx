import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ExternalLink, Award, TrendingUp } from 'lucide-react';

const newsItems = [
  {
    id: 1,
    text: "RT-ACADEMY adalah platform no 1 dalam pengembangan individu dalam informatika!",
    tag: "Featured",
    color: "cyan"
  },
  {
    id: 2,
    text: "Bergabung dengan 1000+ siswa yang telah sukses di bidang programming",
    tag: "New",
    color: "green"
  },
  {
    id: 3,
    text: "Dapatkan sertifikasi industri dan tingkatkan peluang karirmu",
    tag: "Hot",
    color: "orange"
  }
];

const ContainerNews = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto rotate news items
  React.useEffect(() => {
    if (!isHovered) {
      const timer = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % newsItems.length);
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [isHovered]);

  return (
    <div className="w-full bg-gradient-to-b from-[#0A1525] to-[#0A1525]/95">
      <div className="px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Stats Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 gap-4 mb-6 md:grid-cols-3"
        >
          <StatsCard 
            icon={<Award className="w-6 h-6 text-cyan-400" />}
            title="#1 Platform"
            value="Informatika"
          />
          <StatsCard 
            icon={<TrendingUp className="w-6 h-6 text-green-400" />}
            title="Success Rate"
            value="95%"
          />
          <StatsCard 
            icon={<ExternalLink className="w-6 h-6 text-blue-400" />}
            title="Industry Partners"
            value="50+"
          />
        </motion.div>

        {/* News Ticker */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Animated Background */}
          <motion.div 
            className="absolute inset-0 rounded-xl"
            animate={{
              background: [
                "linear-gradient(45deg, rgba(6,182,212,0.1) 0%, rgba(59,130,246,0.1) 100%)",
                "linear-gradient(45deg, rgba(59,130,246,0.1) 0%, rgba(6,182,212,0.1) 100%)"
              ]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />

          <div className="relative p-1 border bg-gray-800/50 backdrop-blur-sm rounded-xl border-gray-700/50">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="p-4"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center flex-1 gap-3">
                    {/* Tag */}
                    <span className={`px-2 py-1 text-xs font-semibold rounded bg-${newsItems[activeIndex].color}-500/20 text-${newsItems[activeIndex].color}-400`}>
                      {newsItems[activeIndex].tag}
                    </span>
                    
                    {/* News Text */}
                    <p className="font-medium text-gray-200">
                      {newsItems[activeIndex].text}
                    </p>
                  </div>

                  {/* Navigation */}
                  <div className="flex items-center gap-3">
                    {/* Dots */}
                    <div className="flex gap-1">
                      {newsItems.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setActiveIndex(idx)}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            idx === activeIndex 
                              ? 'bg-cyan-400 scale-125' 
                              : 'bg-gray-600 hover:bg-gray-500'
                          }`}
                        />
                      ))}
                    </div>

                    {/* Arrow */}
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 transition-colors rounded-lg bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500/20"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

// Stats Card Component
const StatsCard = ({ icon, title, value }) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    className="flex items-center gap-4 p-4 transition-all border rounded-lg bg-gray-800/30 backdrop-blur-sm border-gray-700/50 group hover:border-cyan-500/50"
  >
    <div className="p-3 transition-colors rounded-lg bg-gray-700/30 group-hover:bg-cyan-500/10">
      {icon}
    </div>
    <div>
      <p className="text-sm text-gray-400">{title}</p>
      <p className="font-semibold text-white">{value}</p>
    </div>
  </motion.div>
);

export default ContainerNews;