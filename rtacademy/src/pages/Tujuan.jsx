import React from 'react';
import { motion } from 'framer-motion';
import { 
  Target, Users, Rocket, 
  Book,  Globe, HeartHandshake,
  GraduationCap, BarChart, Briefcase, Shield
} from 'lucide-react';
import Navbar from '../components/common/navbar';
import Footer from '../components/common/Footer';

const AboutPage = () => {
  const vision = {
    title: "Visi Kami",
    description: "Menjadi platform pembelajaran teknologi terdepan yang membentuk generasi developer Indonesia yang berkualitas dan berdaya saing global.",
    points: [
      "Pendidikan teknologi berkualitas untuk semua",
      "Membentuk ekosistem developer yang kuat",
      "Meningkatkan daya saing SDM Indonesia"
    ]
  };

  const mission = {
    title: "Misi Kami",
    points: [
      {
        icon: Book,
        title: "Pembelajaran Berkualitas",
        description: "Menyediakan materi pembelajaran yang terstruktur dan up-to-date"
      },
      {
        icon: Users,
        title: "Komunitas Aktif",
        description: "Membangun komunitas developer yang saling mendukung"
      },
      {
        icon: Globe,
        title: "Standar Global",
        description: "Mengadopsi standar industri global dalam pengembangan skill"
      }
    ]
  };

  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "Berkomitmen untuk memberikan kualitas terbaik dalam setiap aspek pembelajaran",
      color: "cyan"
    },
    {
      icon: HeartHandshake,
      title: "Integrity",
      description: "Menjunjung tinggi kejujuran dan etika dalam setiap langkah",
      color: "blue"
    },
    {
      icon: Rocket,
      title: "Innovation",
      description: "Terus berinovasi dalam metode pembelajaran dan teknologi",
      color: "purple"
    }
  ];

  const stats = [
    {
      value: "5000+",
      label: "Siswa Aktif",
      icon: GraduationCap
    },
    {
      value: "95%",
      label: "Tingkat Kepuasan",
      icon: BarChart
    },
    {
      value: "100+",
      label: "Partner Perusahaan",
      icon: Briefcase
    },
    {
      value: "24/7",
      label: "Dukungan Mentor",
      icon: Shield
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
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 text-4xl font-bold md:text-5xl"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Membentuk Masa Depan
            </span>{" "}
            <span className="text-white">
              Developer Indonesia
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="max-w-3xl mx-auto text-xl text-gray-400"
          >
            RT Academy hadir untuk membantu para developer Indonesia mengembangkan skill dan karir mereka di industri teknologi global
          </motion.p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="p-6 text-center transition-all duration-300 border border-gray-700 bg-gray-800/50 backdrop-blur-sm rounded-xl group hover:border-cyan-500/50"
              >
                <stat.icon className="w-8 h-8 mx-auto mb-4 text-cyan-400" />
                <h3 className="mb-2 text-3xl font-bold text-white">{stat.value}</h3>
                <p className="text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="relative px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-8 border border-gray-700 bg-gray-800/50 backdrop-blur-sm rounded-2xl md:p-12"
          >
            <div className="max-w-3xl">
              <h2 className="mb-6 text-3xl font-bold text-white">{vision.title}</h2>
              <p className="mb-8 text-xl text-gray-300">{vision.description}</p>
              <div className="space-y-4">
                {vision.points.map((point, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-4"
                  >
                    <div className="p-2 rounded-lg bg-cyan-500/10">
                      <Target className="w-5 h-5 text-cyan-400" />
                    </div>
                    <span className="text-gray-300">{point}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="relative px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12 text-3xl font-bold text-center text-white"
          >
            {mission.title}
          </motion.h2>
          <div className="grid gap-8 md:grid-cols-3">
            {mission.points.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="p-6 transition-all duration-300 border border-gray-700 bg-gray-800/50 backdrop-blur-sm rounded-xl hover:border-cyan-500/50"
              >
                <div className="p-3 mb-4 rounded-lg bg-cyan-500/10 w-fit">
                  <point.icon className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-white">
                  {point.title}
                </h3>
                <p className="text-gray-400">
                  {point.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12 text-3xl font-bold text-center text-white"
          >
            Nilai-Nilai Kami
          </motion.h2>
          <div className="grid gap-8 md:grid-cols-3">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="p-6 transition-all duration-300 border border-gray-700 bg-gray-800/50 backdrop-blur-sm rounded-xl hover:border-cyan-500/50"
              >
                <div className={`p-3 rounded-lg bg-${value.color}-500/10 w-fit mb-4`}>
                  <value.icon className={`w-6 h-6 text-${value.color}-400`} />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-white">
                  {value.title}
                </h3>
                <p className="text-gray-400">
                  {value.description}
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
            transition={{ delay: 0.6 }}
            className="p-8 text-center border border-gray-700 md:p-12 bg-gradient-to-r from-gray-800/80 to-gray-800/50 rounded-2xl"
          >
            <h2 className="mb-4 text-3xl font-bold text-white">
              Mulai Perjalanan Anda
            </h2>
            <p className="mb-8 text-xl text-gray-400">
              Bergabung dengan ribuan developer Indonesia lainnya dan tingkatkan skill Anda bersama RT Academy
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 font-medium text-white rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500"
            >
              Mulai Belajar
            </motion.button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
