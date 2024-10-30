import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Code, Book, Rocket, Users, Clock, CheckCircle2, 
  Star, Award, Medal, Zap, ChevronRight, Play,
  Sparkles, BarChart, BookOpen, GraduationCap
} from 'lucide-react';
import Navbar from '../components/common/navbar';
import Footer from '../components/common/Footer';

const ProductPage = () => {
  const [selectedTrack, setSelectedTrack] = useState('frontend');

  const learningTracks = [
    {
      id: 'frontend',
      title: 'Frontend Development',
      icon: Code,
      color: 'cyan',
      description: 'Kuasai pengembangan antarmuka web modern dengan React & Next.js',
      duration: '6 bulan',
      projects: 12,
      modules: 24
    },
    {
      id: 'backend',
      title: 'Backend Development',
      icon: Book,
      color: 'blue',
      description: 'Pelajari pengembangan server dan API dengan Node.js & Express',
      duration: '6 bulan',
      projects: 10,
      modules: 20
    },
    {
      id: 'fullstack',
      title: 'Fullstack JavaScript',
      icon: Rocket,
      color: 'purple',
      description: 'Menjadi developer lengkap dengan stack JavaScript modern',
      duration: '12 bulan',
      projects: 15,
      modules: 40
    }
  ];

  const features = [
    {
      title: 'Kurikulum Terstruktur',
      description: 'Materi pembelajaran yang sistematis dan terarah',
      icon: BookOpen,
      color: 'cyan'
    },
    {
      title: 'Project-Based Learning',
      description: 'Belajar dengan mengerjakan proyek nyata',
      icon: Rocket,
      color: 'blue'
    },
    {
      title: 'Live Mentoring',
      description: 'Bimbingan langsung dari mentor berpengalaman',
      icon: Users,
      color: 'purple'
    },
    {
      title: 'Career Support',
      description: 'Dukungan karir dan akses ke network industri',
      icon: BarChart,
      color: 'green'
    }
  ];

  const highlights = [
    {
      title: '50+ Learning Hours',
      icon: Clock,
      color: 'cyan'
    },
    {
      title: '24/7 Support',
      icon: CheckCircle2,
      color: 'blue'
    },
    {
      title: 'Industry Projects',
      icon: Star,
      color: 'purple'
    },
    {
      title: 'Certification',
      icon: Award,
      color: 'green'
    }
  ];

  return (
    <div className="min-h-screen bg-[#0A1525] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.05)_1px,transparent_1px)] bg-[size:44px_44px]"></div>
      </div>

      <Navbar />

      {/* Hero Section */}
      <section className="relative px-6 pt-32 pb-16">
        <div className="mx-auto text-center max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 border rounded-full bg-cyan-500/10 text-cyan-400 border-cyan-500/20"
          >
            <Sparkles className="w-5 h-5" />
            <span>Learning Paths</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-6 text-4xl font-bold md:text-5xl"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Jalur Pembelajaran
            </span>{" "}
            <span className="text-white">
              yang Tepat Untukmu
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto mb-8 text-xl text-gray-400"
          >
            Pilih jalur pembelajaran yang sesuai dengan tujuan karirmu di industri teknologi
          </motion.p>

          {/* Track Selection */}
          <div className="grid gap-8 mb-16 md:grid-cols-3">
            {learningTracks.map((track) => (
              <motion.div
                key={track.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                onClick={() => setSelectedTrack(track.id)}
                className={`p-6 text-left transition-all duration-300 border cursor-pointer bg-gray-800/50 backdrop-blur-sm rounded-xl group hover:border-cyan-500/50 ${
                  selectedTrack === track.id ? 'border-cyan-500' : 'border-gray-700'
                }`}
              >
                <div className={`p-3 rounded-lg bg-${track.color}-500/10 w-fit mb-4`}>
                  <track.icon className={`w-6 h-6 text-${track.color}-400`} />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-white">
                  {track.title}
                </h3>
                <p className="mb-4 text-gray-400">
                  {track.description}
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {track.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <Rocket className="w-4 h-4" />
                    {track.projects} Projects
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12 text-3xl font-bold text-center text-white"
          >
            Fitur Unggulan
          </motion.h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="p-6 transition-all duration-300 border border-gray-700 bg-gray-800/50 backdrop-blur-sm rounded-xl hover:border-cyan-500/50"
              >
                <div className={`p-3 rounded-lg bg-${feature.color}-500/10 w-fit mb-4`}>
                  <feature.icon className={`w-6 h-6 text-${feature.color}-400`} />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-400">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="relative px-6 py-16">
        <div className="grid max-w-5xl gap-4 mx-auto md:grid-cols-4">
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="flex items-center p-4 transition-all duration-300 border border-gray-700 bg-gray-800/50 backdrop-blur-sm rounded-xl gap-x-4 hover:border-cyan-500/50"
            >
              <div className={`p-2 rounded-lg bg-${highlight.color}-500/10`}>
                <highlight.icon className={`w-5 h-5 text-${highlight.color}-400`} />
              </div>
              <span className="font-medium text-white">{highlight.title}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="p-8 text-center border border-gray-700 md:p-12 bg-gradient-to-r from-gray-800/80 to-gray-800/50 rounded-2xl"
          >
            <GraduationCap className="w-12 h-12 mx-auto mb-6 text-cyan-400" />
            <h2 className="mb-4 text-3xl font-bold text-white">
              Mulai Perjalanan Belajarmu
            </h2>
            <p className="max-w-2xl mx-auto mb-8 text-xl text-gray-400">
              Bergabung dengan ribuan developer Indonesia lainnya dan tingkatkan skillmu bersama RT Academy
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 font-medium text-white rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500"
            >
              <Play className="w-5 h-5" />
              Mulai Belajar
            </motion.button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductPage;