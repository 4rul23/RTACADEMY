import React from 'react';
import { motion } from 'framer-motion';
import { 
  School, Users, GraduationCap, Mail, 
  LayoutDashboard, Shield, BookOpen, Code,
  BarChart, Award, Clock, CheckCircle2,
  ChevronRight, LineChart, Settings, Star
} from 'lucide-react';
import Navbar from '../components/common/navbar';
import Footer from '../components/common/Footer';

const SchoolSubscriptionPage = () => {
  const features = [
    {
      title: "Dashboard Sekolah",
      description: "Monitor progress siswa, analisis performa, dan kelola akses dalam satu dashboard terintegrasi",
      icon: LayoutDashboard,
      color: "cyan",
      details: [
        "Tracking progress real-time",
        "Analisis performa kelas",
        "Manajemen akses siswa",
        "Laporan pembelajaran berkala"
      ]
    },
    {
      title: "Akses Premium Siswa",
      description: "Siswa mendapatkan akses penuh ke materi premium menggunakan email sekolah",
      icon: GraduationCap,
      color: "blue",
      details: [
        "Verifikasi otomatis email sekolah",
        "Akses penuh materi frontend",
        "Project-based learning",
        "Sertifikasi skill"
      ]
    },
    {
      title: "Kurikulum Terstruktur",
      description: "Materi pembelajaran yang disesuaikan dengan kebutuhan industri dan kurikulum sekolah",
      icon: BookOpen,
      color: "purple",
      details: [
        "HTML & CSS Fundamental",
        "JavaScript Modern",
        "React Development",
        "Real-world Projects"
      ]
    },
    {
      title: "Progress Monitoring",
      description: "Pantau perkembangan belajar siswa dengan metrik yang terukur",
      icon: LineChart,
      color: "green",
      details: [
        "Analytics dashboard",
        "Progress tracking",
        "Performance metrics",
        "Achievement badges"
      ]
    }
  ];

  const benefits = [
    {
      title: "Hemat Biaya",
      description: "Harga khusus untuk institusi pendidikan dengan unlimited student access",
      icon: BarChart
    },
    {
      title: "Mudah Digunakan",
      description: "Setup cepat dan dashboard yang user-friendly untuk guru dan siswa",
      icon: Settings
    },
    {
      title: "Dukungan Prioritas",
      description: "Tim support khusus untuk membantu implementasi dan penggunaan",
      icon: Shield
    }
  ];

  const highlights = [
    {
      value: "100%",
      label: "Materi Frontend",
      icon: Code
    },
    {
      value: "24/7",
      label: "Support Tim",
      icon: Users
    },
    {
      value: "50+",
      label: "Modul Belajar",
      icon: BookOpen
    },
    {
      value: "∞",
      label: "Akses Siswa",
      icon: GraduationCap
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
            <School className="w-5 h-5" />
            <span>For Education</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-6 text-4xl font-bold md:text-5xl"
          >
            <span className="text-white">
              Transformasi Digital
            </span>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Pembelajaran Coding
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto mb-8 text-xl text-gray-400"
          >
            Berikan akses premium RT Academy untuk seluruh siswa dengan Subskripsi Sekolah. Pantau progress dan kelola pembelajaran coding dengan mudah.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 font-medium text-white rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500"
            >
              Mulai Trial Gratis
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 font-medium text-white transition-colors border border-gray-700 rounded-lg hover:bg-gray-800"
            >
              <Mail className="w-5 h-5" />
              Hubungi Sales
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Stats Highlight */}
      <section className="relative px-6 py-16">
        <div className="grid max-w-5xl gap-4 mx-auto md:grid-cols-4">
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="flex flex-col items-center p-6 text-center transition-all duration-300 border border-gray-700 bg-gray-800/50 backdrop-blur-sm rounded-xl hover:border-cyan-500/50"
            >
              <div className="p-3 mb-4 rounded-lg bg-cyan-500/10">
                <highlight.icon className="w-6 h-6 text-cyan-400" />
              </div>
              <span className="text-2xl font-bold text-white">{highlight.value}</span>
              <span className="text-gray-400">{highlight.label}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features Grid */}
      <section className="relative px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12 text-3xl font-bold text-center text-white"
          >
            Fitur Unggulan untuk Sekolah
          </motion.h2>

          <div className="grid gap-8 md:grid-cols-2">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="p-6 transition-all duration-300 border border-gray-700 bg-gray-800/50 backdrop-blur-sm rounded-xl hover:border-cyan-500/50"
              >
                <div className={`p-3 rounded-lg bg-${feature.color}-500/10 w-fit mb-4`}>
                  <feature.icon className={`w-6 h-6 text-${feature.color}-400`} />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-white">
                  {feature.title}
                </h3>
                <p className="mb-4 text-gray-400">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12 text-3xl font-bold text-center text-white"
          >
            Keuntungan untuk Institusi
          </motion.h2>

          <div className="grid gap-8 md:grid-cols-3">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="p-6 text-center transition-all duration-300 border border-gray-700 bg-gray-800/50 backdrop-blur-sm rounded-xl hover:border-cyan-500/50"
              >
                <div className="p-3 mx-auto mb-4 rounded-lg w-fit bg-cyan-500/10">
                  <benefit.icon className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-white">
                  {benefit.title}
                </h3>
                <p className="text-gray-400">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="p-8 text-center border border-gray-700 md:p-12 bg-gradient-to-r from-gray-800/80 to-gray-800/50 rounded-2xl"
          >
            <School className="w-12 h-12 mx-auto mb-6 text-cyan-400" />
            <h2 className="mb-4 text-3xl font-bold text-white">
              Siap Upgrade Pembelajaran Coding?
            </h2>
            <p className="max-w-2xl mx-auto mb-8 text-xl text-gray-400">
              Jadikan sekolah Anda bagian dari revolusi pendidikan teknologi dengan RT Academy
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-8 py-4 font-medium text-white rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500"
              >
                <Star className="w-5 h-5" />
                Mulai Trial Gratis 30 Hari
              </motion.button>
              <motion.a
                href="#"
                className="inline-flex items-center text-cyan-400 hover:text-cyan-300"
              >
                <span>Pelajari Lebih Lanjut</span>
                <ChevronRight className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SchoolSubscriptionPage;