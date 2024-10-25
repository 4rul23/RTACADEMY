import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
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
    { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-[#0A1525] border-t border-gray-800">
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-8 mb-8 md:grid-cols-2 lg:grid-cols-6">
          {/* Logo and Contact Section */}
          <div className="lg:col-span-2">
            <motion.img 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              src={logo} 
              alt="RT Academy Logo" 
              className="h-8 mb-6"
            />
            <p className="mb-6 text-gray-400">
              Platform pembelajaran coding terbaik untuk siswa SMA/SMK di Indonesia.
            </p>
            <div className="space-y-4">
              <a href="mailto:contact@rt-academy.com" className="flex items-center text-gray-400 transition-colors hover:text-cyan-400">
                <Mail className="w-5 h-5 mr-3" />
                contact@rt-academy.com
              </a>
              <a href="tel:+6281234567890" className="flex items-center text-gray-400 transition-colors hover:text-cyan-400">
                <Phone className="w-5 h-5 mr-3" />
                +62 812-3456-7890
              </a>
              <div className="flex items-center text-gray-400">
                <MapPin className="flex-shrink-0 w-5 h-5 mr-3" />
                <span>Jl. Telekomunikasi No. 1, Bandung, Indonesia</span>
              </div>
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="lg:col-span-1">
              <h3 className="mb-4 font-semibold text-white capitalize">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-gray-400 transition-colors hover:text-cyan-400"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="pt-8 mb-8 border-t border-gray-800">
          <div className="max-w-md">
            <h3 className="mb-4 font-semibold text-white">Subscribe to our newsletter</h3>
            <p className="mb-4 text-gray-400">
              Dapatkan update terbaru tentang materi pembelajaran dan promo menarik.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 text-white transition-colors border border-gray-700 rounded-lg bg-gray-900/50 placeholder:text-gray-500 focus:outline-none focus:border-cyan-500"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-2 font-medium text-white transition-opacity rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 hover:opacity-90"
              >
                Subscribe
              </motion.button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col items-center justify-between pt-8 space-y-4 border-t border-gray-800 md:flex-row md:space-y-0">
          <div className="text-sm text-gray-400">
            © {new Date().getFullYear()} RT Academy. All rights reserved.
          </div>

          {/* Social Links */}
          <div className="flex space-x-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 text-gray-400 transition-colors hover:text-cyan-400"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;