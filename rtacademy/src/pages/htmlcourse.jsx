import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ChevronLeft,  
  CheckCircle,
  Share2,
  Bookmark,
  Menu,
  X,
  ArrowLeft,
  ArrowRight,
  Code,
  Copy,
  PlayCircle,
  Settings,
  Maximize2,
  Layout
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CourseViewer = () => {
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(true);
    const [currentSection, setCurrentSection] = useState(0);
    const [editorTheme, setEditorTheme] = useState('dark');
    const [codeContent, setCodeContent] = useState(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <title>My First Web Page</title>
  </head>
  <body>
      <h1>Hello World!</h1>
      <p>This is my first web page.</p>
  </body>
  </html>`);

  // Sample course data
  const courseData = {
    title: "Pengantar HTML",
    progress: 25,
    sections: [
      {
        title: "Persiapan Belajar",
        completed: true,
        subsections: [
          { title: "Perkenalan", completed: true },
          { title: "Prasyarat Teknis", completed: true },
          { title: "Mekanisme Belajar", completed: true }
        ]
      },
      {
        title: "Pendahuluan",
        completed: true,
        subsections: [
          { title: "Pengenalan Front-end", completed: true },
          { title: "Struktur Website", completed: true }
        ]
      },
      {
        title: "Pengantar HTML",
        completed: false,
        subsections: [
          { title: "Pengantar HTML", completed: false },
          { title: "Latihan: Membangun Halaman Web Pertama", completed: false },
          { title: "Latihan: Identifikasi Elemen", completed: false },
          { title: "Anatomi Elemen HTML", completed: false },
          { title: "Attribute di Elemen HTML", completed: false },
          { title: "Anatomi Dokumen HTML", completed: false }
        ],
        active: true
      }
    ],
    currentContent: {
      title: "Pengantar HTML",
      description: "Pada modul sebelumnya, Anda sudah belajar banyak hal sebagai penuntun Anda memasuki front-end web development. Ada banyak pengetahuan yang telah diserap, seperti cara internet bekerja, website dan halaman web, web server, dan web browser. Selain itu, kamu juga sudah memahami anatomi dari website sehingga memahami komponen vital pembangun website."
    }
  };

  return (
    <div className="min-h-screen bg-[#0A1525] text-white flex relative overflow-hidden">
      {/* Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Animated Gradient Orbs */}
        <div className="absolute rounded-full top-1/4 -left-12 w-96 h-96 bg-cyan-500/20 blur-3xl animate-pulse"/>
        <div className="absolute rounded-full bottom-1/4 -right-12 w-96 h-96 bg-blue-500/20 blur-3xl animate-pulse"/>
        <div className="absolute delay-150 rounded-full top-3/4 left-1/4 w-96 h-96 bg-purple-500/20 blur-3xl animate-pulse"/>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.05)_1px,transparent_1px)] bg-[size:44px_44px]"/>
        
        {/* Additional Decorative Elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent"/>
      </div>
      
      {/* Sidebar Navigation */}
      <motion.div
        initial={{ x: menuOpen ? 0 : -320 }}
        animate={{ x: menuOpen ? 0 : -320 }}
        className="fixed top-0 bottom-0 left-0 z-50 border-r border-gray-800 w-80 bg-gray-900/95 backdrop-blur-xl"
      >
        {/* Course Progress Header */}
        <div className="p-4 border-b border-gray-800">
          <div className="flex items-center gap-4 mb-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/module')}
              className="p-2 rounded-lg hover:bg-gray-800"
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>
            <h2 className="font-semibold">Course Content</h2>
          </div>
          <div className="mb-2">
            <div className="flex justify-between mb-1 text-sm">
              <span className="text-gray-400">Progress</span>
              <span className="text-cyan-400">{courseData.progress}%</span>
            </div>
            <div className="h-2 bg-gray-800 rounded-full">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${courseData.progress}%` }}
                className="h-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Course Sections */}
        <div className="overflow-y-auto h-[calc(100vh-120px)]">
          {courseData.sections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="border-b border-gray-800">
              <button
                className={`w-full px-4 py-3 flex items-center justify-between hover:bg-gray-800/50 ${
                  section.active ? 'bg-cyan-500/10' : ''
                }`}
              >
                <div className="flex items-center gap-3">
                  {section.completed ? (
                    <CheckCircle className="w-5 h-5 text-green-400" />
                  ) : (
                    <div className={`w-5 h-5 rounded-full border-2 ${
                      section.active ? 'border-cyan-500' : 'border-gray-600'
                    }`} />
                  )}
                  <span className={section.active ? 'text-cyan-400' : 'text-gray-300'}>
                    {section.title}
                  </span>
                </div>
              </button>
              {section.subsections.map((subsection, subIndex) => (
                <button
                  key={subIndex}
                  onClick={() => setCurrentSection(subIndex)}
                  className={`w-full pl-12 pr-4 py-2 flex items-center gap-3 hover:bg-gray-800/50 ${
                    currentSection === subIndex ? 'bg-cyan-500/10 text-cyan-400' : 'text-gray-400'
                  }`}
                >
                  {subsection.completed ? (
                    <CheckCircle className="w-4 h-4 text-green-400" />
                  ) : (
                    <div className="w-4 h-4 border-2 border-gray-600 rounded-full" />
                  )}
                  <span className="text-sm">{subsection.title}</span>
                </button>
              ))}
            </div>
          ))}
        </div>
      </motion.div>

      {/* Main Content Area */}
      <div className={`flex-1 ${menuOpen ? 'ml-80' : 'ml-0'} transition-all duration-300`}>
        {/* Top Navigation */}
        <div className="sticky top-0 z-40 border-b border-gray-800 bg-gray-900/95 backdrop-blur-xl">
          <div className="flex items-center justify-between h-16 px-6">
            <div className="flex items-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setMenuOpen(!menuOpen)}
                className="p-2 rounded-lg hover:bg-gray-800"
              >
                {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </motion.button>
              <h1 className="text-lg font-semibold">{courseData.currentContent.title}</h1>
            </div>
            <div className="flex items-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 text-gray-400 rounded-lg hover:text-white hover:bg-gray-800"
              >
                <Bookmark className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 text-gray-400 rounded-lg hover:text-white hover:bg-gray-800"
              >
                <Share2 className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </div>

{/* Content Area */}
<div className="max-w-6xl p-8 mx-auto">
          {/* Course Header */}
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10">
                <Code className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <h2 className="text-3xl font-bold">{courseData.currentContent.title}</h2>
                <p className="text-gray-400">Module 3 of 12</p>
              </div>
            </div>
            <p className="leading-relaxed text-gray-300">
              {courseData.currentContent.description}
            </p>
          </div>

                    {/* Interactive Code Editor Section */}
                    <div className="mb-8">
            <div className="overflow-hidden border border-gray-800 rounded-xl bg-gray-900/50 backdrop-blur-sm">
              {/* Editor Header */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-gray-700 bg-gray-800/50">
                <div className="flex items-center gap-4">
                  <span className="text-sm font-medium text-gray-300">index.html</span>
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 text-gray-400 rounded-lg hover:text-white hover:bg-gray-700"
                  >
                    <Copy className="w-4 h-4" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 text-gray-400 rounded-lg hover:text-white hover:bg-gray-700"
                  >
                    <Settings className="w-4 h-4" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 text-gray-400 rounded-lg hover:text-white hover:bg-gray-700"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>
              
              {/* Code Editor */}
              <div className="p-4 font-mono text-sm">
                <pre className="text-gray-300 whitespace-pre-wrap">
                  <code>{codeContent}</code>
                </pre>
              </div>

              {/* Editor Footer */}
              <div className="flex items-center justify-between px-4 py-3 border-t border-gray-700 bg-gray-800/50">
                <div className="flex items-center gap-4">
                  <span className="text-sm text-gray-400">HTML</span>
                  <span className="text-sm text-gray-400">UTF-8</span>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-2 px-4 py-2 text-white rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500"
                >
                  <PlayCircle className="w-4 h-4" />
                  Run Code
                </motion.button>
              </div>
            </div>
          </div>

          {/* Preview Section */}
          <div className="mb-8">
            <h3 className="mb-4 text-xl font-semibold">Preview</h3>
            <div className="bg-white border border-gray-800 rounded-xl">
              <div className="h-64 p-4">
                {/* Preview content will be rendered here */}
                <div className="text-black">
                  <h1 className="text-2xl font-bold">Hello World!</h1>
                  <p>This is my first web page.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Exercise Section */}
          <div className="mb-8">
            <div className="p-6 border border-gray-800 rounded-xl bg-gray-800/50 backdrop-blur-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-2 rounded-lg bg-purple-500/10">
                  <Layout className="w-5 h-5 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold">Exercise</h3>
              </div>
              <p className="mb-4 text-gray-300">
                Try to modify the HTML code above to:
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-500"></div>
                  <span>Add a title to your web page</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-500"></div>
                  <span>Create a paragraph with your name</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-500"></div>
                  <span>Add an image to your page</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between pt-6 border-t border-gray-800">
            <motion.button
              whileHover={{ scale: 1.02, x: -5 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 px-4 py-2 text-gray-400 rounded-lg hover:text-white hover:bg-gray-800"
            >
              <ArrowLeft className="w-4 h-4" />
              Previous Lesson
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02, x: 5 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 px-4 py-2 text-white rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500"
            >
              Next Lesson
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseViewer;