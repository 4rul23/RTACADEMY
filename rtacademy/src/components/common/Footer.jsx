import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ExternalLink, ChevronRight } from 'lucide-react';
import logo from '../../assets/images/logos.png';

const Footer = () => {
  const footerLinks = {
    product: [
      { name: 'Features', href: '/features' },
      { name: 'Learning Path', href: '/learning-path' },
      { name: 'Pricing', href: '/pricing' },
      { name: 'Release Notes', href: '/releases' },
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Careers', href: '/careers' },
      { name: 'News', href: '/news' },
      { name: 'Contact', href: '/contact' },
    ],
    resources: [
      { name: 'Blog', href: '/blog' },
      { name: 'Documentation', href: '/docs' },
      { name: 'Community', href: '/community' },
      { name: 'Help Center', href: '/help' },
    ],
    legal: [
      { name: 'Terms', href: '/terms' },
      { name: 'Privacy', href: '/privacy' },
      { name: 'Cookies', href: '/cookies' },
      { name: 'Licenses', href: '/licenses' },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com', label: 'Facebook', color: 'hover:text-blue-500' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter', color: 'hover:text-blue-400' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram', color: 'hover:text-pink-500' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn', color: 'hover:text-blue-600' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    },
  };

  return (
    <footer className="relative bg-[#0A1525] border-t border-gray-800 overflow-hidden">

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute rounded-full top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 blur-3xl animate-pulse"></div>
        <div className="absolute delay-1000 rounded-full bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 blur-3xl animate-pulse"></div>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8"
      >

        <div className="grid grid-cols-1 gap-12 mb-16 md:grid-cols-2 lg:grid-cols-6">

          <motion.div 
            variants={itemVariants}
            className="space-y-8 lg:col-span-2"
          >
            <Link to="/">
              <motion.img 
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                src={logo} 
                alt="RT Academy Logo" 
                className="h-10"
              />
            </Link>
            <p className="text-lg leading-relaxed text-gray-400">
              Platform pembelajaran coding terbaik untuk siswa SMA/SMK di Indonesia.
            </p>
            <div className="space-y-4">
              <motion.a 
                whileHover={{ x: 5 }}
                href="mailto:contact@rt-academy.com" 
                className="flex items-center text-gray-400 transition-colors hover:text-cyan-400 group"
              >
                <Mail className="w-5 h-5 mr-3 transition-transform group-hover:rotate-12" />
                contact@rt-academy.com
              </motion.a>
              <motion.a 
                whileHover={{ x: 5 }}
                href="tel:+6281234567890" 
                className="flex items-center text-gray-400 transition-colors hover:text-cyan-400 group"
              >
                <Phone className="w-5 h-5 mr-3 transition-transform group-hover:rotate-12" />
                +62 812-3456-7890
              </motion.a>
              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-start text-gray-400 group"
              >
                <MapPin className="w-5 h-5 mt-1 mr-3 transition-transform group-hover:rotate-12" />
                <span>Jl. Telekomunikasi No. 1, Bandung, Indonesia</span>
              </motion.div>
            </div>
          </motion.div>


          {Object.entries(footerLinks).map(([category, links], idx) => (
            <motion.div 
              variants={itemVariants}
              key={category} 
              className="lg:col-span-1"
            >
              <h3 className="mb-6 text-lg font-semibold text-white">{category}</h3>
              <ul className="space-y-4">
                {links.map((link, index) => (
                  <motion.li 
                    key={link.name}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Link
                      to={link.href}
                      className="flex items-center text-gray-400 transition-colors hover:text-cyan-400 group"
                    >
                      <ChevronRight className="w-4 h-4 mr-2 transition-all -translate-x-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0" />
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>


        <motion.div
          variants={itemVariants}
          className="relative p-8 mb-16 border bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-2xl border-gray-700/50 backdrop-blur-sm"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="mb-4 text-2xl font-bold text-white">Stay Updated</h3>
            <p className="mb-8 text-gray-400">
              Dapatkan update terbaru tentang materi pembelajaran dan promo menarik langsung di inbox Anda.
            </p>
            <form className="flex max-w-md gap-4 mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 text-white transition-colors border border-gray-700 rounded-lg bg-gray-900/50 placeholder:text-gray-500 focus:outline-none focus:border-cyan-500"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-2 px-6 py-3 font-medium text-white transition-opacity rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 hover:opacity-90 group"
              >
                Subscribe
                <ExternalLink className="w-4 h-4 transition-transform group-hover:rotate-45" />
              </motion.button>
            </form>
          </div>
        </motion.div>


        <motion.div
          variants={itemVariants} 
          className="flex flex-col items-center justify-between gap-6 pt-8 border-t border-gray-800 md:flex-row"
        >
          <div className="text-sm text-gray-400">
            © {new Date().getFullYear()} RT Academy. All rights reserved.
          </div>


          <div className="flex gap-6">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
                className={`text-gray-400 transition-colors ${social.color}`}
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;