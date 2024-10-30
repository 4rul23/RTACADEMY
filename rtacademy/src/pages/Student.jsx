import React from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, Percent, Mail, CreditCard, CheckCircle2, 
  AlertCircle, HelpCircle, School, BookOpen, Users, Award
} from 'lucide-react';
import Navbar from '../components/common/navbar';
import Footer from '../components/common/Footer';

const StudentBenefits = () => {
  const benefits = [
    {
      icon: Percent,
      title: "50% Diskon",
      description: "Dapatkan potongan harga 50% untuk semua paket pembelajaran",
      color: "cyan"
    },
    {
      icon: BookOpen,
      title: "Akses Penuh",
      description: "Akses ke semua materi pembelajaran dan fitur premium",
      color: "blue"
    },
    {
      icon: Users,
      title: "Study Group",
      description: "Bergabung dengan komunitas khusus mahasiswa",
      color: "purple"
    },
    {
      icon: Award,
      title: "Sertifikasi Gratis",
      description: "Gratis sertifikasi untuk setiap modul yang diselesaikan",
      color: "green"
    }
  ];

  const steps = [
    {
      title: "Siapkan Dokumen",
      description: "Email kampus aktif atau Kartu Mahasiswa",
      icon: School,
      color: "cyan"
    },
    {
      title: "Verifikasi Status",
      description: "Kirimkan dokumen melalui form verifikasi",
      icon: CheckCircle2,
      color: "green"
    },
    {
      title: "Aktivasi Diskon",
      description: "Diskon akan aktif setelah verifikasi berhasil",
      icon: CreditCard,
      color: "blue"
    }
  ];

  const faqs = [
    {
      question: "Siapa yang berhak mendapatkan diskon mahasiswa?",
      answer: "Semua mahasiswa aktif dari institusi pendidikan yang diakui di Indonesia dengan bukti kartu mahasiswa atau email kampus yang valid."
    },
    {
      question: "Berapa lama proses verifikasi?",
      answer: "Proses verifikasi biasanya memakan waktu 1-2 hari kerja. Kami akan mengirimkan notifikasi melalui email setelah verifikasi selesai."
    },
    {
      question: "Apakah diskon berlaku selamanya?",
      answer: "Diskon berlaku selama status mahasiswa masih aktif dan perlu diperbarui setiap semester dengan mengunggah dokumen terbaru."
    },
    {
      question: "Apa saja dokumen yang diterima untuk verifikasi?",
      answer: "Kami menerima kartu mahasiswa aktif, surat keterangan aktif dari kampus, atau email resmi dari domain kampus Anda."
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
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 border rounded-full border-cyan-500/20 bg-cyan-500/10 text-cyan-400"
          >
            <GraduationCap className="w-5 h-5" />
            <span>Khusus Mahasiswa</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-6 text-4xl font-bold md:text-5xl"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              50% Discount
            </span>{" "}
            <span className="text-white">
              untuk Mahasiswa
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto mb-8 text-xl text-gray-400"
          >
            Dapatkan akses ke semua materi premium dengan harga khusus untuk mahasiswa. Mulai belajar dan bangun karirmu sekarang!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col justify-center gap-4 sm:flex-row"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 font-medium text-white rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500"
            >
              Dapatkan Diskon
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 font-medium text-white bg-gray-800 border border-gray-700 rounded-lg hover:bg-gray-700"
            >
              Pelajari Lebih Lanjut
            </motion.button>
          </motion.div>
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
            Benefit untuk Mahasiswa
          </motion.h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-6 transition-all duration-300 border border-gray-700 bg-gray-800/50 backdrop-blur-sm rounded-xl hover:border-cyan-500/50"
              >
                <div className={`p-3 rounded-lg bg-${benefit.color}-500/10 w-fit mb-4`}>
                  <benefit.icon className={`h-6 w-6 text-${benefit.color}-400`} />
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

      {/* How to Get Discount Section */}
      <section className="relative px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12 text-3xl font-bold text-center text-white"
          >
            Cara Mendapatkan Diskon
          </motion.h2>

          <div className="grid gap-8 md:grid-cols-3">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative p-6 transition-all duration-300 border border-gray-700 bg-gray-800/50 backdrop-blur-sm rounded-xl hover:border-cyan-500/50"
              >
                {index !== steps.length - 1 && (
                  <div className="hidden md:block absolute -right-4 top-1/2 w-8 h-[2px] bg-gradient-to-r from-cyan-500 to-transparent"></div>
                )}
                <div className={`p-3 rounded-lg bg-${step.color}-500/10 w-fit mb-4`}>
                  <step.icon className={`h-6 w-6 text-${step.color}-400`} />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-white">
                  {step.title}
                </h3>
                <p className="text-gray-400">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative px-6 py-16">
        <div className="max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12 text-3xl font-bold text-center text-white"
          >
            FAQ Seputar Diskon Mahasiswa
          </motion.h2>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-6 transition-all duration-300 border border-gray-700 bg-gray-800/50 backdrop-blur-sm rounded-xl hover:border-cyan-500/50"
              >
                <h3 className="flex items-start gap-3 mb-3 text-lg font-semibold text-white">
                  <HelpCircle className="flex-shrink-0 w-5 h-5 mt-1 text-cyan-400" />
                  {faq.question}
                </h3>
                <p className="ml-8 text-gray-400">
                  {faq.answer}
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
            className="p-8 text-center border border-gray-700 md:p-12 bg-gradient-to-r from-gray-800/80 to-gray-800/50 rounded-2xl"
          >
            <GraduationCap className="w-12 h-12 mx-auto mb-6 text-cyan-400" />
            <h2 className="mb-4 text-3xl font-bold text-white">
              Mulai Belajar dengan Diskon Mahasiswa
            </h2>
            <p className="max-w-2xl mx-auto mb-8 text-xl text-gray-400">
              Verifikasi status mahasiswamu sekarang dan dapatkan akses ke semua materi premium dengan harga spesial!
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 font-medium text-white rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500"
            >
              <Mail className="w-5 h-5" />
              Verifikasi Email Kampus
            </motion.button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default StudentBenefits;