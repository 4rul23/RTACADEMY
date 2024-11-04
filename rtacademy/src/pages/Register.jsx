import React, { useState } from "react";
import { motion } from "framer-motion";
import { Eye, EyeOff, Lock, Mail, User, School, Phone } from 'lucide-react';
import { Link } from "react-router-dom";
import logo from '../assets/images/logos.png';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    accountType: "personal" 
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [step, setStep] = useState(1);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsLoading(false);
  };

  const nextStep = (e) => {
    e.preventDefault();
    setStep(2);
  };

  const previousStep = (e) => {
    e.preventDefault();
    setStep(1);
  };

  return (
    <div className="min-h-screen bg-[#0A1525] flex items-center justify-center p-4">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute rounded-full top-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 blur-3xl animate-pulse"></div>
        <div className="absolute delay-1000 rounded-full bottom-1/4 left-1/4 w-96 h-96 bg-blue-500/20 blur-3xl animate-pulse"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.05)_1px,transparent_1px)] bg-[size:44px_44px]"></div>
      </div>

      <div className="relative w-full max-w-xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="p-8 border border-gray-700 bg-gray-800/50 backdrop-blur-xl rounded-2xl md:p-12"
        >
          <Link to="/">
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", duration: 0.8 }}
            className="flex justify-center mb-8"
          >
            <img src={logo} alt="RT Academy Logo" className="h-12" />
            
          </motion.div>
          </Link>

          {/* Header */}
          <div className="mb-8 text-center">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-2 text-2xl font-bold text-white"
            >
              Mulai Perjalanan Belajar Anda
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-gray-400"
            >
              Daftar untuk mengakses pembelajaran pemrograman terbaik
            </motion.p>
          </div>

          {/* Account Type Selection */}
          <div className="mb-8">
            <div className="flex gap-4">
              <button
                onClick={() => setFormData({ ...formData, accountType: "personal" })}
                className={`flex-1 p-4 rounded-lg border ${
                  formData.accountType === "personal"
                    ? "border-cyan-500 bg-cyan-500/10"
                    : "border-gray-700 hover:border-gray-600"
                } transition-all duration-300`}
              >
                <User className="w-6 h-6 mx-auto mb-2 text-cyan-400" />
                <p className="font-medium text-white">Personal</p>
                <p className="text-sm text-gray-400">Untuk pembelajaran individu</p>
              </button>


            </div>
          </div>

          {/* Registration Form */}
          <motion.form
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            {step === 1 ? (
              // Step 1: Personal Information
              <>
                {/* Full Name Field */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Nama Lengkap</label>
                  <div className="relative">
                    <User className="absolute w-5 h-5 text-gray-400 transform -translate-y-1/2 left-3 top-1/2" />
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="w-full px-12 py-3 text-white transition-colors border border-gray-700 rounded-lg bg-gray-900/50 placeholder:text-gray-500 focus:outline-none focus:border-cyan-500"
                      placeholder="Masukkan nama lengkap"
                      required
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Email</label>
                  <div className="relative">
                    <Mail className="absolute w-5 h-5 text-gray-400 transform -translate-y-1/2 left-3 top-1/2" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-12 py-3 text-white transition-colors border border-gray-700 rounded-lg bg-gray-900/50 placeholder:text-gray-500 focus:outline-none focus:border-cyan-500"
                      placeholder="Masukkan email"
                      required
                    />
                  </div>
                </div>

                {/* Phone Field */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Nomor Telepon</label>
                  <div className="relative">
                    <Phone className="absolute w-5 h-5 text-gray-400 transform -translate-y-1/2 left-3 top-1/2" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-12 py-3 text-white transition-colors border border-gray-700 rounded-lg bg-gray-900/50 placeholder:text-gray-500 focus:outline-none focus:border-cyan-500"
                      placeholder="Masukkan nomor telepon"
                      required
                    />
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={nextStep}
                  className="w-full py-3 font-medium text-white rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500"
                >
                  Lanjutkan
                </motion.button>
              </>
            ) : (
              // Step 2: Password and Confirmation
              <>
                {/* Password Field */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Password</label>
                  <div className="relative">
                    <Lock className="absolute w-5 h-5 text-gray-400 transform -translate-y-1/2 left-3 top-1/2" />
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      className="w-full px-12 py-3 text-white transition-colors border border-gray-700 rounded-lg bg-gray-900/50 placeholder:text-gray-500 focus:outline-none focus:border-cyan-500"
                      placeholder="Buat password"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute text-gray-400 transform -translate-y-1/2 right-3 top-1/2 hover:text-gray-300"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                {/* Confirm Password Field */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Konfirmasi Password</label>
                  <div className="relative">
                    <Lock className="absolute w-5 h-5 text-gray-400 transform -translate-y-1/2 left-3 top-1/2" />
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      className="w-full px-12 py-3 text-white transition-colors border border-gray-700 rounded-lg bg-gray-900/50 placeholder:text-gray-500 focus:outline-none focus:border-cyan-500"
                      placeholder="Konfirmasi password"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute text-gray-400 transform -translate-y-1/2 right-3 top-1/2 hover:text-gray-300"
                    >
                      {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                {/* Agreement Checkbox */}
                <div className="space-y-4">
                  <label className="flex items-start gap-3 text-gray-400 cursor-pointer hover:text-gray-300">
                    <input type="checkbox" className="mt-1 border-gray-700 rounded bg-gray-900/50 text-cyan-500 focus:ring-cyan-500" />
                    <span className="text-sm">
                      Saya setuju dengan{' '}
                      <Link to="/terms" className="text-cyan-400 hover:text-cyan-300">
                        Syarat dan Ketentuan
                      </Link>
                      {' '}serta{' '}
                      <Link to="/privacy" className="text-cyan-400 hover:text-cyan-300">
                        Kebijakan Privasi
                      </Link>
                    </span>
                  </label>
                </div>

                <div className="flex gap-4">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={previousStep}
                    className="flex-1 py-3 font-medium text-white transition-colors bg-gray-700 rounded-lg hover:bg-gray-600"
                  >
                    Kembali
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={isLoading}
                    className="relative flex-1 py-3 overflow-hidden font-medium text-white rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 group"
                  >
                    {isLoading ? (
                      <svg className="w-5 h-5 mx-auto animate-spin" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                      </svg>
                    ) : (
                      <span>Daftar Sekarang</span>
                    )}
                  </motion.button>
                </div>
              </>
            )}

            {step === 1 && (
              <p className="text-center text-gray-400">
                Sudah punya akun?{' '}
                <Link to="/login" className="text-cyan-400 hover:text-cyan-300">
                  Login
                </Link>
              </p>
            )}
          </motion.form>
        </motion.div>
      </div>
    </div>
  );
};

export default RegisterPage;