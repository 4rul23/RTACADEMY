import React, { useState } from 'react';
import cardimg from '../assets/images/Frontend.png';

const SolutionsLayout = () => {
  const [activeTeam, setActiveTeam] = useState('red');
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleTeamChange = (team) => {
    if (team === activeTeam) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveTeam(team);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 50);
    }, 300);
  };

  const teamContent = {
    red: {
      image: cardimg,
      imageAlt: "Frontend Development",
      title: "Kuasai pengembangan Aplikasi Web Di bidang Frontend Dengan Teknologi Web3",
      description: "Untuk Developer Frontend yang bertujuan mengembangkan aplikasi web Berstandar Nasional",
      features: [
        "React & Next.js expertise",
        "Modern UI/UX practices",
        "Responsive design mastery",
        "State management tools"
      ]
    },
    blue: {
      image: cardimg,
      imageAlt: "Backend Development",
      title: "Build robust backend systems and scalable architectures.",
      description: "For developers specializing in server-side logic and database management.",
      features: [
        "API development",
        "Database optimization",
        "Server architecture",
        "Cloud deployment"
      ]
    },
    purple: {
      image: cardimg,
      imageAlt: "Full Stack Development",
      title: "Combine frontend and backend for complete web solutions.",
      description: "For developers seeking to master the Both Front end and Backend Into Fullstack",
      features: [
        "End-to-end development",
        "Full system architecture",
        "DevOps integration",
        "Performance optimization"
      ]
    }
  };

  return (
    <div className="p-8 text-gray-100 ">
      <div className="grid max-w-6xl grid-cols-1 gap-8 mx-auto lg:grid-cols-2">
        {/* Left Column */}
        <div className="space-y-6">
          <h1 className="text-5xl font-bold leading-tight">
            Solutions for all web development domains.
          </h1>
          
          <div className="space-y-4">
            <button 
              onClick={() => handleTeamChange('red')}
              className={`w-full text-left p-4 rounded-lg transition-all duration-300 ${
                activeTeam === 'red' 
                  ? 'bg-[rgb(20,29,40)] border-l-4 border-red-500' 
                  : 'bg-[rgb(20,29,40)]/50 hover:bg-[rgb(20,29,40)]/70'
              }`}
            >
              Frontend Development
            </button>
            <button 
              onClick={() => handleTeamChange('blue')}
              className={`w-full text-left p-4 rounded-lg transition-all duration-300 ${
                activeTeam === 'blue' 
                  ? 'bg-[rgb(20,29,40)] border-l-4 border-blue-500' 
                  : 'bg-[rgb(20,29,40)]/50 hover:bg-[rgb(20,29,40)]/70'
              }`}
            >
              Backend Development
            </button>
            <button 
              onClick={() => handleTeamChange('purple')}
              className={`w-full text-left p-4 rounded-lg transition-all duration-300 ${
                activeTeam === 'purple' 
                  ? 'bg-[rgb(20,29,40)] border-l-4 border-purple-500' 
                  : 'bg-[rgb(20,29,40)]/50 hover:bg-[rgb(20,29,40)]/70'
              }`}
            >
              Full Stack Development
            </button>
          </div>
        </div>

        {/* Right Column - Combined Card */}
        <div 
          className="overflow-hidden rounded-2xl"
          style={{
            background: 'linear-gradient(135deg, rgba(20,29,40,0.95) 0%, rgba(20,29,40,0.85) 100%)'
          }}
        >
          {/* Image Section */}
          <div className="relative w-full h-48 overflow-hidden">
            <img 
              src={teamContent[activeTeam].image}
              alt={teamContent[activeTeam].imageAlt}
              className={`w-full h-full object-cover transform transition-all duration-500 ${
                isTransitioning ? 'scale-110 opacity-0' : 'scale-100 opacity-100'
              }`}
            />
            <div 
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(to bottom, transparent 0%, rgb(20,29,40) 100%)'
              }}
            />
          </div>

          {/* Content Section */}
          <div 
            className={`p-8 space-y-6 transition-all duration-300 transform ${
              isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
            }`}
          >
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">
                {teamContent[activeTeam].title}
              </h2>
              <p className="text-gray-300">
                {teamContent[activeTeam].description}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {teamContent[activeTeam].features.map((feature, index) => (
                <div 
                  key={index} 
                  className={`flex items-center gap-2 transition-all duration-300 transform
                    ${isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}
                  `}
                  style={{
                    transitionDelay: `${index * 50}ms`
                  }}
                >
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-lime-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>

            <button className="px-6 py-2 text-gray-900 transition-colors duration-300 rounded-md bg-cyan-500 hover:bg-cyan-500">
              See More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionsLayout;