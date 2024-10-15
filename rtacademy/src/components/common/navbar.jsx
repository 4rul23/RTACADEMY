import React from "react";
import logo from '../../assets/images/logos.png'
import { Link } from "react-router-dom";
function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar-logo">
            <Link to="/">
                <img src={logo} alt="RT ACADEMY Logo" className="logo" />
                </Link>
            </div>
            <div className="navbar-links">
                <Link to="/produk" className="nav-link">Produk</Link>
                <Link to="/tujuan" className="nav-link">Tujuan</Link>
                <Link to="/harga" className="nav-link">Harga</Link>
                <Link to="/resources" className="nav-link">Resources</Link>
                <Link to="/perusahaan" className="nav-link">Perusahaan</Link>
            </div>
            <div className="navbar-links2">
                <Link to="/sekolah" className="nav-link">Sekolah</Link>
                <span className="auth-separator"></span>
                <Link to="/login" className="nav-link">Login</Link>
                <Link to="/mulai" className="nav-link get-started">Mulai</Link>
            </div>
        </div>
    );
}

export default Navbar;