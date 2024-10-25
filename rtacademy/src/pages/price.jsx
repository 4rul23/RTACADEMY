import React from "react";
import Navbar from "../components/common/navbar";
import centang from '../assets/images/check-solid.svg'
function Price() {
    return (
        <div className="harga">
            <Navbar />
            <div className="container">
                <h1>Harga dan paket</h1>
                <div className="paket-wrapper">
                    <div className="paket-card">
                        <h2 clas>PEMULA</h2>
                        <p className="deskripsi-harga">Langkah awal untuk mengenal dan memulai perjalanan Web Development anda</p>
                        <p className="hargas">Rp99.000/bulan</p>
                        <button className="btn-primary">Mulai Sekarang</button>
                    <div className="list-container">
                    <p className="list-description">Akses To </p>
                    <ul className="space-y-4">
                        <li className="flex items-center">
                        <img src={centang} alt="Green checkmark" className="checkmark" />
                            <span>Akses ke CSS, HTML dan Javascript Module</span>
                        </li>
                        <li className="flex items-center">
                        <img src={centang} alt="Green checkmark" className="checkmark" />
                            <span>Certification vouchers <i className="ml-1 text-gray-400 fas fa-info-circle"></i></span>
                        </li>
                        <li className="flex items-center">
                        <img src={centang} alt="Green checkmark" className="checkmark" />
                            <span>1,000+ hands-on scenarios</span>
                        </li>
                        <li className="flex items-center">
                        <img src={centang} alt="Green checkmark" className="checkmark" />
                            <span>1x CTF event (24h)</span>
                        </li>
                        <li className="flex items-center">
                        <img src={centang} alt="Green checkmark" className="checkmark" />
                            <span>CVE-based scenarios</span>
                        </li>
                        <li className="flex items-center">
                        <img src={centang} alt="Green checkmark" className="checkmark" />
                            <span>Purple team scenarios</span>
                        </li>
                    </ul>
                    </div>

                    </div>
                    <div className="paket-card">
                        <h2>MENENGAH</h2>
                        <p className="deskripsi-harga">Tingkat Lanjutkan Skill anda dalam pengembangan Website Yang Lebih Modern menggunakan Framework</p>
                        <p className="hargas">Rp199.000/bulan</p>
                        <button className="btn-primary">Mulai Sekarang</button>
                    <div className="list-container">
                        <p className="list-description">Akses To </p>
                        <div className="list-wrapper">
                            <p className="list-feature">Akses ke Module HTML, CSS, Javascript</p>
                        </div>
                        <div className="list-wrapper">
                            <p className="list-feature">5 Beginner Friendly Project</p>
                        </div>
                        <div className="list-wrapper">

                            <p className="list-feature">Access Ke Forum Konsultasi</p>
                        </div>
                        <div className="list-wrapper">

                            <p className="list-feature">Sertifikat Penyelesaian Modul</p>
                        </div>
                    </div>


                    </div>
                    <div className="paket-card">
                        <h2>AHLI</h2>
                        <p className="deskripsi-harga">Paket Tingkat Lanjut yang ditujukan kepada Junior-Senior Web Programmer AAAAAAAAAAAAA</p>
                        <p className="hargas">Rp299.000/bulan</p>
                        <button className="btn-primary">Mulai Sekarang</button>
                    <div className="list-container">
                        <p className="list-description">Akses To </p>
                        <div className="list-wrapper">
                            <p className="list-feature">Akses ke Module HTML, CSS, Javascript</p>
                        </div>
                        <div className="list-wrapper">
                            <p className="list-feature">5 Beginner Friendly Project</p>
                        </div>
                        <div className="list-wrapper">
                            <p className="list-feature">Access Ke Forum Konsultasi</p>
                        </div>
                        <div className="list-wrapper">
                            <p className="list-feature">Sertifikat Penyelesaian Modul</p>
                        </div>
                    </div>
                    </div>
                    <div className="paket-card sekolah">
                        <h2>SEKOLAH</h2>
                        <p className="deskripsi-harga"></p>
                        <p>Hubungi Kami</p>
                        <button className="btn-secondary">Contact Support</button>
                    <div className="list-container">
                        <p className="list-description">Akses To </p>
                        <div className="list-wrapper">
                            <p className="list-feature">Akses ke Module HTML, CSS, Javascript</p>
                        </div>
                        <div className="list-wrapper">
                            <p className="list-feature">5 Beginner Friendly Project</p>
                        </div>
                        <div className="list-wrapper">
                            <p className="list-feature">Access Ke Forum Konsultasi</p>
                        </div>
                        <div className="list-wrapper">
                            <p className="list-feature">Sertifikat Penyelesaian Modul</p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
}




export default Price;