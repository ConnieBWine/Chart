import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Home, AlertTriangle, ShieldCheck, Stethoscope, Globe, BookOpen } from 'lucide-react';

const SlideNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const slides = [
    {
      path: '/',
      title: 'Introduction',
      description: 'Understanding asthma and its impact',
      Icon: BookOpen
    },
    {
      path: '/dashboard',
      title: 'Hospital Admissions',
      description: 'Current state of asthma hospitalizations',
      Icon: Home
    },
    {
      path: '/riskfactors',
      title: 'Risk Factors',
      description: 'Understanding the causes of asthma',
      Icon: AlertTriangle
    },
    {
      path: '/prevention',
      title: 'Prevention',
      description: 'Strategies to prevent asthma attacks',
      Icon: ShieldCheck
    },
    {
      path: '/treatment',
      title: 'Treatment',
      description: 'Treatment options and effectiveness',
      Icon: Stethoscope
    },
    {
      path: '/globaltrends',
      title: 'Global Trends',
      description: 'Worldwide patterns and insights',
      Icon: Globe
    }
  ];

  const currentIndex = Math.max(
    slides.findIndex(slide => slide.path === location.pathname),
    0
  );
  
  const goToSlide = (index) => {
    if (index >= 0 && index < slides.length) {
      navigate(slides[index].path);
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg">
      {/* Progress bar */}
      <div className="h-0.5 bg-gray-100">
        <div 
          className="h-full bg-blue-500 transition-all duration-300"
          style={{ 
            width: `${((currentIndex + 1) / slides.length) * 100}%`,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-3">
          <div className="flex justify-between items-center">
            {slides.map((slide, index) => {
              const { Icon } = slide;
              const isActive = index === currentIndex;
              
              return (
                <button
                  key={slide.path}
                  onClick={() => goToSlide(index)}
                  className={`group flex flex-col items-center px-3 py-2 rounded-lg transition-colors ${
                    isActive 
                      ? 'text-blue-600' 
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <Icon className={`w-5 h-5 mb-1 ${
                    isActive ? 'text-blue-600' : 'text-gray-400 group-hover:text-gray-500'
                  }`} />
                  <span className="text-xs font-medium whitespace-nowrap">{slide.title}</span>
                  {isActive && (
                    <span className="text-xs text-gray-500 mt-0.5 text-center max-w-[120px] whitespace-normal">
                      {slide.description}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Navigation arrows */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center space-x-2">
        <button
          onClick={() => goToSlide(currentIndex - 1)}
          disabled={currentIndex === 0}
          className={`p-1 rounded-full ${
            currentIndex === 0 
              ? 'text-gray-300 cursor-not-allowed' 
              : 'text-gray-400 hover:text-gray-600 hover:bg-gray-100'
          } transition-colors`}
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        
        <button
          onClick={() => goToSlide(currentIndex + 1)}
          disabled={currentIndex === slides.length - 1}
          className={`p-1 rounded-full ${
            currentIndex === slides.length - 1 
              ? 'text-gray-300 cursor-not-allowed' 
              : 'text-gray-400 hover:text-gray-600 hover:bg-gray-100'
          } transition-colors`}
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default SlideNavigation;