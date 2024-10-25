
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      text: "Platform RT Academy sangat membantu saya dalam belajar web development dari nol. Materi pembelajarannya terstruktur dan mudah dipahami. Setelah 6 bulan belajar, saya berhasil mendapatkan pekerjaan sebagai Junior Frontend Developer.",
      author: "Budi Santoso",
      role: "Frontend Developer, Tech Startup Jakarta",
      initials: "BS",
      bgColor: "bg-cyan-500"
    },
    {
      text: "Sebagai siswa SMK, RT Academy memberikan saya fondasi yang kuat dalam pengembangan web. Proyek-proyek praktis dan bimbingan mentornya sangat membantu dalam memahami konsep programming yang kompleks.",
      author: "Anisa Rahma",
      role: "Siswa SMKN 1 Bandung",
      initials: "AR",
      bgColor: "bg-blue-500"
    },
    {
      text: "Saya suka sekali dengan metode pembelajaran di sini. Modulnya lengkap dari HTML, CSS, JavaScript sampai React. Yang paling membantu adalah latihan project nyata dan code review dari mentor yang berpengalaman.",
      author: "Dimas Pratama",
      role: "Fullstack Developer, Perusahaan E-commerce",
      initials: "DP",
      bgColor: "bg-green-500"
    },
    {
      text: "Awalnya bingung mau mulai belajar programming dari mana. RT Academy memberikan roadmap yang jelas dan komunitas yang sangat supportif. Sekarang sudah bisa freelance dan membuat website untuk klien.",
      author: "Putri Wulandari",
      role: "Freelance Web Developer",
      initials: "PW",
      bgColor: "bg-purple-500"
    },
    {
      text: "Materi pembelajaran selalu update dengan teknologi terbaru. Saya belajar banyak tentang modern web development, dari fundamental sampai advanced. Support tim RT Academy juga sangat responsif.",
      author: "Reza Firmansyah",
      role: "Web Developer, Startup Fintech",
      initials: "RF",
      bgColor: "bg-orange-500"
    },
    {
      text: "Program bootcamp-nya intens tapi sangat worth it. Dalam 6 bulan, saya berhasil switch career dari admin menjadi web developer. Sistem belajarnya fleksibel, bisa disesuaikan dengan jadwal kerja.",
      author: "Maya Kusuma",
      role: "Backend Developer, Perusahaan IT",
      initials: "MK",
      bgColor: "bg-teal-500"
    }
  ];

  const [currentPage, setCurrentPage] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const testimonialsPerPage = 2;
  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);

  const handlePageChange = (newPage) => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentPage(newPage);
      setTimeout(() => {
        setIsAnimating(false);
      }, 50);
    }, 300);
  };

  const nextSlide = () => {
    const newPage = (currentPage + 1) % totalPages;
    handlePageChange(newPage);
  };

  const prevSlide = () => {
    const newPage = (currentPage - 1 + totalPages) % totalPages;
    handlePageChange(newPage);
  };

  const getCurrentTestimonials = () => {
    const start = currentPage * testimonialsPerPage;
    return testimonials.slice(start, start + testimonialsPerPage);
  };

  return (
    <div className="px-8 py-16 text-white bg-[#0A1525]">
      {/* Main heading section */}
      <div className="mx-auto mb-16 max-w-7xl">
        <h1 className="mb-4 text-5xl font-bold text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text">
          Dipercaya Oleh
        </h1>
        <h1 className="text-5xl font-bold">
          Siswa/Siswi Indonesia
        </h1>
      </div>

      {/* Testimonials grid */}
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 md:grid-cols-2">
          {getCurrentTestimonials().map((testimonial, index) => (
            <div 
              key={currentPage * testimonialsPerPage + index} 
              className={`bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 p-8 transform transition-all duration-500 ease-in-out hover:border-cyan-500/50 ${
                isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
              }`}
            >
              <p className="mb-8 text-lg leading-relaxed text-gray-300">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center">
                <div className={`w-12 h-12 ${testimonial.bgColor} rounded-lg mr-4 flex items-center justify-center`}>
                  <span className="text-xl font-bold text-white">{testimonial.initials}</span>
                </div>
                <div>
                  <p className="font-medium text-white">{testimonial.author}</p>
                  <p className="text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation buttons and indicators */}
      <div className="flex items-center justify-between mx-auto mt-8 max-w-7xl">
        <div className="flex gap-2">
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentPage === index 
                  ? 'bg-cyan-400 w-8' 
                  : 'bg-gray-600 w-2 hover:bg-gray-500'
              }`}
              onClick={() => handlePageChange(index)}
              disabled={isAnimating}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <button 
            className="p-2 transition-colors rounded-lg bg-gray-800/80 hover:bg-gray-700 disabled:opacity-50"
            onClick={prevSlide}
            disabled={isAnimating}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button 
            className="p-2 transition-colors rounded-lg bg-gray-800/80 hover:bg-gray-700 disabled:opacity-50"
            onClick={nextSlide}
            disabled={isAnimating}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
