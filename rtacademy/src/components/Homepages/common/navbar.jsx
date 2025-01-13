import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import logo from '../../assets/images/logos.png';

function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { to: "/produk", label: "Produk" },
        { to: "/tujuan", label: "Tujuan" },
        { to: "/harga", label: "Harga" },
        { to: "/Resources", label: "Resources" },
        { to: "/Student", label: "Student" }
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 left-0 right-0 z-50 bg-gray-900 shadow-lg"
        >
            <div className="px-6 mx-auto max-w-7xl lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                    >
                        <Link to="/" className="flex items-center">
                            <img 
                                src={logo} 
                                alt="RT ACADEMY Logo" 
                                className="w-auto h-12"
                            />
                        </Link>
                    </motion.div>

                    {/* Main Navigation Links */}
                    <div className="items-center hidden space-x-6 md:flex">
                        {navLinks.map((link) => (
                            <Link
                                key={link.to}
                                to={link.to}
                                className="relative px-4 py-2 text-base font-bold text-gray-400 transition-colors duration-200 hover:text-gray-200"
                            >
                                {location.pathname === link.to && (
                                    <motion.div
                                        layoutId="navbar-indicator"
                                        className="absolute inset-0 bg-gray-800 rounded-lg"
                                        style={{ zIndex: -1 }}
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* Auth Links */}
                    <div className="items-center hidden space-x-6 md:flex">
                        <Link 
                            to="/sekolah"
                            className="text-base font-medium text-gray-400 transition-colors duration-200 hover:text-gray-200"
                        >
                            Sekolah
                        </Link>
                        
                        <div className="w-px h-5 bg-gray-700"></div>
                        
                        <Link 
                            to="/login"
                            className="text-base font-medium text-gray-400 transition-colors duration-200 hover:text-gray-200"
                        >
                            Login
                        </Link>
                        
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link
                                to="/mulai"
                                className="px-6 py-2.5 text-base font-medium text-white bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg hover:opacity-90 transition-opacity duration-200"
                            >
                                Mulai
                            </Link>
                        </motion.div>
                    </div>

                    {/* Mobile Menu Button */}
                    <motion.button
                        whileTap={{ scale: 0.95 }}
                        className="p-2 text-gray-400 rounded-lg md:hidden hover:text-gray-200 hover:bg-gray-800"
                    >
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </motion.button>
                </div>
            </div>
            
            {/* Progress Bar - Only visible when scrolled */}
            {scrolled && (
                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                    className="h-[2px] bg-gradient-to-r from-cyan-500 to-blue-500 origin-left"
                />
            )}
        </motion.nav>
    );
}

export default Navbar;