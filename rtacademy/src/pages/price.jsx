import React from "react";
import Navbar from "../components/common/navbar";
function Price() {
    return (
        <div className="harga">
            <Navbar />
            <div className="container">
                <h1>Harga dan paket</h1>
                <div className="paket-wrapper">
                    {/* Pemula Package */}
                    <div className="paket-card">
                        <h2>PEMULA</h2>
                        <p className="deskripsi-harga">Langkah awal untuk mengenal dan memulai perjalanan Web Development anda</p>
                        <p className="hargas">Rp99.000/bulan</p>
                        <button className="btn-primary">Mulai Sekarang</button>
                        <ul>
                            <li>✔️ Akses ke Module HTML, CSS, Javascript</li>
                            <li>✔️ 5 Beginner Friendly Project</li>
                            <li>✔️ Access Ke Forum Konsultasi</li>
                            <li>✔️ Sertifikat Penyelesaian Modul</li>
                        </ul>
                    </div>

                    {/* Menengah Package */}
                    <div className="paket-card">
                        <h2>MENENGAH</h2>
                        <p className="deskripsi-harga">Tingkat Lanjutkan Skill anda dalam pengembangan Website Yang Lebih Modern menggunakan Framework</p>
                        <p className="hargas">Rp199.000/bulan</p>
                        <button className="btn-primary">Mulai Sekarang</button>
                        <ul>
                            <li>✔️ Semua Fitur Pricing Pemula</li>
                            <li>✔️ Kursus React, Node.js, Express</li>
                            <li>✔️ 10 Medium Difficulty Project</li>
                            <li>✔️ Sertifikat Penyelesaian Modul</li>
                        </ul>
                    </div>

                    {/* Ahli Package */}
                    <div className="paket-card">
                        <h2>AHLI</h2>
                        <p className="deskripsi-harga">Paket Tingkat Lanjut yang ditujukan kepada Junior-Senior Web Programmer</p>
                        <p className="hargas">Rp299.000/bulan</p>
                        <button className="btn-primary">Mulai Sekarang</button>
                        <ul>
                            <li>✔️ Semua Fitur Menengah</li>
                            <li>✔️ Semua Kursus dapat di Akses</li>
                            <li>✔️ 15 Expert Project</li>
                            <li>✔️ Sertifikat Penyelesaian Modul</li>
                        </ul>
                    </div>

                    {/* Sekolah Package */}
                    <div className="paket-card sekolah">
                        <h2>SEKOLAH</h2>
                        <p className="deskripsi-harga"></p>
                        <p>Hubungi Kami</p>
                        <button className="btn-secondary">Contact Support</button>
                        <ul>
                            <li>✔️ Semua Fitur Pricing Pemula</li>
                            <li>✔️ Kursus React, Node.js, Express</li>
                            <li>✔️ 10 Medium Difficulty Project</li>
                            <li>✔️ Sertifikat Penyelesaian Modul</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Price;