import React, { useState } from "react";
import Navbar from "../components/common/navbar";
import { motion } from "framer-motion";
import { Check, Star, Zap, Users, Award, Clock } from 'lucide-react';

function Price() {
    const [isYearly, setIsYearly] = useState(false);

    const packages = [
        {
            title: "PEMULA",
            description: "Langkah awal untuk mengenal dan memulai perjalanan Web Development anda",
            monthlyPrice: "Rp99.000",
            yearlyPrice: "Rp990.000",
            features: [
                "Akses ke CSS, HTML dan Javascript Module",
                "Certification vouchers",
                "1,000+ hands-on scenarios",
                "1x CTF event (24h)",
                "CVE-based scenarios",
                "Purple team scenarios"
            ],
            icon: Star,
            buttonText: "Mulai Sekarang",
            delay: 0.2
        },
        {
            title: "MENENGAH",
            description: "Tingkat Lanjutkan Skill anda dalam pengembangan Website Yang Lebih Modern menggunakan Framework",
            monthlyPrice: "Rp199.000",
            yearlyPrice: "Rp1.990.000",
            features: [
                "Akses ke Module HTML, CSS, Javascript",
                "5 Beginner Friendly Project",
                "Access Ke Forum Konsultasi",
                "Sertifikat Penyelesaian Modul",
                "Mentoring Session",
                "Advanced Project Cases"
            ],
            icon: Zap,
            buttonText: "Mulai Sekarang",
            popular: true,
            delay: 0.3
        },
        {
            title: "AHLI",
            description: "Paket Tingkat Lanjut yang ditujukan kepada Junior-Senior Web Developer",
            monthlyPrice: "Rp299.000",
            yearlyPrice: "Rp2.990.000",
            features: [
                "Semua fitur di Paket Menengah",
                "Advanced Framework Modules",
                "Real-world Project Cases",
                "1-on-1 Mentoring Session",
                "Priority Support Access",
                "Job Connect Program"
            ],
            icon: Award,
            buttonText: "Mulai Sekarang",
            premium: true,
            delay: 0.4,
            highlight: "Most Value"
        },
        {
            title: "SEKOLAH",
            description: "Program khusus untuk institusi pendidikan dengan fitur dan dukungan lengkap",
            monthlyPrice: "Hubungi Kami",
            yearlyPrice: "Hubungi Kami",
            features: [
                "Akses Unlimited untuk Semua Siswa",
                "Custom Learning Path",
                "Progress Tracking Dashboard",
                "Dedicated Support Team",
                "Teacher Training Program",
                "Regular Performance Reports"
            ],
            icon: Users,
            buttonText: "Contact Support",
            isEnterprise: true,
            delay: 0.5,
            customPrice: true
        }
    ];

    return (
        <div className="min-h-screen bg-[#0A1525] text-white pt-20">
            <Navbar />
            
            <div className="px-4 py-20 mx-auto max-w-7xl">
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center"
                >
                    <motion.h1 
                        className="mb-6 text-5xl font-bold md:text-6xl"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <span className="text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text">
                            Harga dan Paket
                        </span>
                    </motion.h1>
                    <motion.p 
                        className="max-w-2xl mx-auto text-xl text-gray-400"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Pilih paket yang sesuai dengan kebutuhan belajar Anda
                    </motion.p>

                    {/* Billing Toggle */}
                    <motion.div 
                        className="inline-flex items-center gap-4 p-2 mt-8 rounded-full bg-gray-800/50 backdrop-blur-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <button 
                            className={`px-6 py-2 rounded-full transition-all ${!isYearly ? 'bg-cyan-500 text-white' : 'text-gray-400'}`}
                            onClick={() => setIsYearly(false)}
                        >
                            Bulanan
                        </button>
                        <button 
                            className={`px-6 py-2 rounded-full transition-all ${isYearly ? 'bg-cyan-500 text-white' : 'text-gray-400'}`}
                            onClick={() => setIsYearly(true)}
                        >
                            Tahunan
                            <span className="px-2 py-1 ml-2 text-xs text-white bg-green-500 rounded-full">Save 20%</span>
                        </button>
                    </motion.div>
                </motion.div>

                {/* Pricing Cards Grid */}
                <div className="grid grid-cols-1 gap-8 mx-auto md:grid-cols-2 lg:grid-cols-4 max-w-7xl">
                    {packages.map((pkg, index) => (
                        <motion.div
                            key={pkg.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: pkg.delay }}
                            className={`relative rounded-xl overflow-hidden ${
                                pkg.popular 
                                    ? 'border-2 border-cyan-500 shadow-lg shadow-cyan-500/20' 
                                    : 'border border-gray-700'
                            } bg-gray-800/50 backdrop-blur-sm group hover:border-cyan-500/50 transition-all duration-300`}
                        >
                            {/* Popular Badge */}
                            {pkg.popular && (
                                <motion.div 
                                    className="absolute top-4 right-4"
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ type: "spring", delay: pkg.delay + 0.2 }}
                                >
                                    <span className="px-3 py-1 text-xs font-semibold text-white rounded-full bg-gradient-to-r from-cyan-500 to-blue-500">
                                        Popular
                                    </span>
                                </motion.div>
                            )}

                            <div className="p-8">
                                {/* Icon */}
                                <div className="mb-6">
                                    <pkg.icon className="w-10 h-10 text-cyan-400" />
                                </div>

                                <h2 className="mb-4 text-2xl font-bold">{pkg.title}</h2>
                                <p className="text-gray-400 mb-8 min-h-[60px]">{pkg.description}</p>

                                {/* Price */}
                                <div className="mb-8">
                                    <div className="text-3xl font-bold">
                                        {isYearly ? pkg.yearlyPrice : pkg.monthlyPrice}
                                        <span className="text-lg text-gray-400">/bulan</span>
                                    </div>
                                    {isYearly && (
                                        <p className="mt-2 text-sm text-green-500">Save 20% with yearly billing</p>
                                    )}
                                </div>

                                {/* CTA Button */}
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className={`w-full py-4 px-6 rounded-lg font-medium mb-8 ${
                                        pkg.isEnterprise 
                                            ? 'bg-gray-700 hover:bg-gray-600' 
                                            : 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:opacity-90'
                                    } transition-all duration-300`}
                                >
                                    {pkg.buttonText}
                                </motion.button>

                                {/* Features List */}
                                <div className="space-y-4">
                                    <p className="mb-6 font-medium text-gray-300">Termasuk fitur:</p>
                                    {pkg.features.map((feature, idx) => (
                                        <motion.div 
                                            key={idx} 
                                            className="flex items-start gap-3"
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.3, delay: pkg.delay + (idx * 0.1) }}
                                        >
                                            <Check className="w-5 h-5 text-cyan-400 mt-0.5 shrink-0" />
                                            <span className="text-gray-300">{feature}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Additional Features Section */}
                <motion.div 
                    className="mt-20 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                >
                    <h2 className="mb-12 text-3xl font-bold">Semua paket termasuk</h2>
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                        <div className="p-6 rounded-xl bg-gray-800/30 backdrop-blur-sm">
                            <Clock className="w-8 h-8 mx-auto mb-4 text-cyan-400" />
                            <h3 className="mb-2 text-xl font-semibold">Akses Seumur Hidup</h3>
                            <p className="text-gray-400">Pelajari dengan kecepatan Anda sendiri</p>
                        </div>
                        <div className="p-6 rounded-xl bg-gray-800/30 backdrop-blur-sm">
                            <Users className="w-8 h-8 mx-auto mb-4 text-cyan-400" />
                            <h3 className="mb-2 text-xl font-semibold">Komunitas</h3>
                            <p className="text-gray-400">Bergabung dengan komunitas developer</p>
                        </div>
                        <div className="p-6 rounded-xl bg-gray-800/30 backdrop-blur-sm">
                            <Award className="w-8 h-8 mx-auto mb-4 text-cyan-400" />
                            <h3 className="mb-2 text-xl font-semibold">Sertifikasi</h3>
                            <p className="text-gray-400">Dapatkan sertifikat resmi</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export default Price;