import React from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, Code, Users, Calendar, FileText, 
  Youtube, Download, ExternalLink, Search,
  BookMarked, Newspaper, MessagesSquare, Video
} from 'lucide-react';
import Navbar from '../components/common/navbar';
import Footer from '../components/common/Footer';

const ResourcesPage = () => {
  const featuredResources = [
    {
      title: "Learning Path Guide",
      description: "Panduan lengkap jalur pembelajaran Web Development dari dasar hingga mahir",
      icon: BookMarked,
      color: "cyan",
      tag: "Popular",
      link: "/learning-path"
    },
    {
      title: "Community Forum",
      description: "Diskusi dengan sesama developer dan mentor RT Academy",
      icon: MessagesSquare,
      color: "purple",
      tag: "Active",
      link: "/forum"
    },
    {
      title: "Weekly Webinar",
      description: "Sesi pembelajaran langsung dengan para expert setiap minggu",
      icon: Video,
      color: "blue",
      tag: "Live",
      link: "/webinars"
    }
  ];

  const categories = [
    {
      title: "Learning Path",
      description: "Jalur pembelajaran terstruktur",
      icon: BookOpen,
      items: ["Frontend Path", "Backend Path", "Fullstack Path"],
      color: "cyan"
    },
    {
      title: "Tutorial & Artikel",
      description: "Tutorial dan artikel terbaru",
      icon: FileText,
      items: ["Latest Articles", "Tutorial Series", "Tips & Tricks"],
      color: "blue"
    },
    {
      title: "Community",
      description: "Bergabung dengan komunitas",
      icon: Users,
      items: ["Discussion Forum", "Study Group", "Code Review"],
      color: "purple"
    },
    {
      title: "Events",
      description: "Event dan webinar",
      icon: Calendar,
      items: ["Upcoming Webinars", "Workshops", "Meetups"],
      color: "green"
    }
  ];

  const latestTutorials = [
    {
      title: "Memulai dengan React.js",
      category: "Frontend",
      duration: "15 min read",
      image: "/path/to/react-image.jpg"
    },
    {
      title: "Node.js untuk Pemula",
      category: "Backend",
      duration: "20 min read",
      image: "/path/to/node-image.jpg"
    },
    {
      title: "CSS Modern dengan Tailwind",
      category: "Frontend",
      duration: "12 min read",
      image: "/path/to/tailwind-image.jpg"
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
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 text-4xl font-bold md:text-5xl"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Resources
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="max-w-2xl mx-auto text-xl text-gray-400"
            >
              Kumpulan materi pembelajaran, tutorial, dan sumber daya untuk mengembangkan skill programing Anda
            </motion.p>
          </div>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto mb-16"
          >
            <div className="relative">
              <Search className="absolute w-5 h-5 text-gray-400 transform -translate-y-1/2 left-4 top-1/2" />
              <input
                type="text"
                placeholder="Cari tutorial, artikel, atau materi pembelajaran..."
                className="w-full py-4 pl-12 pr-4 text-gray-300 transition-colors border border-gray-700 bg-gray-800/50 rounded-xl placeholder:text-gray-500 focus:outline-none focus:border-cyan-500"
              />
            </div>
          </motion.div>

          {/* Featured Resources */}
          <div className="grid gap-8 mb-16 md:grid-cols-3">
            {featuredResources.map((resource, index) => (
              <motion.a
                key={index}
                href={resource.link}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="p-6 transition-all duration-300 border border-gray-700 bg-gray-800/50 backdrop-blur-sm rounded-xl hover:border-cyan-500/50 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-lg bg-${resource.color}-500/10`}>
                    <resource.icon className={`h-6 w-6 text-${resource.color}-400`} />
                  </div>
                  <span className={`text-xs font-semibold px-2 py-1 rounded-full bg-${resource.color}-500/10 text-${resource.color}-400`}>
                    {resource.tag}
                  </span>
                </div>
                <h3 className="mb-2 text-xl font-semibold text-white transition-colors group-hover:text-cyan-400">
                  {resource.title}
                </h3>
                <p className="text-gray-400">
                  {resource.description}
                </p>
              </motion.a>
            ))}
          </div>

          {/* Resource Categories */}
          <div className="grid gap-8 mb-16 md:grid-cols-2 lg:grid-cols-4">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="p-6 transition-all duration-300 border border-gray-700 bg-gray-800/50 backdrop-blur-sm rounded-xl hover:border-cyan-500/50"
              >
                <div className={`p-3 rounded-lg bg-${category.color}-500/10 w-fit mb-4`}>
                  <category.icon className={`h-6 w-6 text-${category.color}-400`} />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-white">
                  {category.title}
                </h3>
                <p className="mb-4 text-gray-400">
                  {category.description}
                </p>
                <ul className="space-y-2">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="text-gray-300 transition-colors hover:text-cyan-400">
                      <a href="#" className="flex items-center gap-2">
                        <ExternalLink className="w-4 h-4" />
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Latest Tutorials */}
          <div className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-white">Tutorial Terbaru</h2>
              <a href="#" className="transition-colors text-cyan-400 hover:text-cyan-300">
                Lihat Semua
              </a>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              {latestTutorials.map((tutorial, index) => (
                <motion.a
                  key={index}
                  href="#"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="group"
                >
                  <div className="relative h-48 mb-4 overflow-hidden rounded-xl">
                    <div className="absolute inset-0 bg-gray-800/50"></div>
                    <div className="absolute bottom-4 left-4">
                      <span className="px-2 py-1 text-xs font-semibold rounded-full bg-cyan-500/10 text-cyan-400">
                        {tutorial.category}
                      </span>
                    </div>
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-white transition-colors group-hover:text-cyan-400">
                    {tutorial.title}
                  </h3>
                  <p className="text-gray-400">
                    {tutorial.duration}
                  </p>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Newsletter Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="p-8 text-center border border-gray-700 md:p-12 bg-gradient-to-r from-gray-800/80 to-gray-800/50 rounded-2xl"
          >
            <h2 className="mb-4 text-2xl font-bold text-white">
              Dapatkan Update Terbaru
            </h2>
            <p className="max-w-2xl mx-auto mb-8 text-gray-400">
              Subscribe untuk mendapatkan informasi terbaru tentang tutorial, artikel, dan event dari RT Academy
            </p>
            <div className="flex max-w-md gap-4 mx-auto">
              <input
                type="email"
                placeholder="Masukkan email Anda"
                className="flex-1 px-4 py-3 text-white transition-colors border border-gray-700 rounded-lg bg-gray-900/50 placeholder:text-gray-500 focus:outline-none focus:border-cyan-500"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 font-medium text-white rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500"
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ResourcesPage;