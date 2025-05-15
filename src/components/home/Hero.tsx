
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      id: 1,
      title: "Improving Health. Empowering Communities.",
      subtitle: "We provide innovative solutions for healthier communities and individuals.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      cta: "Our Services",
      link: "/programs",
    },
    {
      id: 2,
      title: "Advancing Public Health Through Research",
      subtitle: "Our evidence-based programs create lasting positive impacts on communities.",
      image: "https://images.unsplash.com/photo-1631815590058-860e4f87b268?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80",
      cta: "Our Research",
      link: "/resources/research",
    },
    {
      id: 3,
      title: "Join Our Mission for Better Health",
      subtitle: "Support our work through donations, volunteering, or partnerships.",
      image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      cta: "Get Involved",
      link: "/donate",
    }
  ];
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };
  
  return (
    <section className="relative h-[90vh] min-h-[600px] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Dark overlay */}
          <div 
            className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 z-10"
            aria-hidden="true"
          ></div>
          
          {/* Background image */}
          <img
            src={slide.image}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
            aria-hidden="true"
          />
          
          {/* Content */}
          <div className="relative z-20 h-full flex items-center">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-3xl">
                <h1 className="text-white mb-4 animate-slide-in">{slide.title}</h1>
                <p className="text-white/90 text-lg md:text-xl mb-8 animate-slide-in">{slide.subtitle}</p>
                <div className="flex flex-wrap gap-4 animate-slide-in">
                  <Link to={slide.link}>
                    <Button size="lg" className="health-cta flex items-center gap-2">
                      {slide.cta} <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Link to="/service-finder">
                    <Button variant="outline" size="lg" className="bg-white/10 text-white border-white/20 hover:bg-white/20">
                      Find a Service
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      
      {/* Navigation dots */}
      <div className="absolute bottom-8 left-0 right-0 z-30 flex justify-center">
        <div className="flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentSlide ? "bg-white" : "bg-white/30"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
      
      {/* Arrow navigation */}
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 bg-white/10 rounded-full p-2 hover:bg-white/20"
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </button>
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 bg-white/10 rounded-full p-2 hover:bg-white/20"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
    </section>
  );
};

export default Hero;
