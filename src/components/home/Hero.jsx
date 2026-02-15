import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight, BookOpen } from 'lucide-react';
import { companyInfo } from '../../data/mockData';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const Hero = () => {
  const [articles, setArticles] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    try {
      const response = await axios.get(`${BACKEND_URL}/api/articles`);
      setArticles(response.data.slice(0, 5)); // Max 5 articles in carousel
    } catch (err) {
      console.error('Failed to fetch articles:', err);
    }
  };

  const nextSlide = useCallback(() => {
    if (articles.length <= 1) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % articles.length);
      setIsTransitioning(false);
    }, 300);
  }, [articles.length]);

  const prevSlide = () => {
    if (articles.length <= 1) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + articles.length) % articles.length);
      setIsTransitioning(false);
    }, 300);
  };

  // Auto-advance carousel
  useEffect(() => {
    if (articles.length <= 1) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [articles.length, nextSlide]);

  const currentArticle = articles[currentIndex];

  return (
    <section className="relative min-h-screen bg-black overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gold-900/20 to-transparent" />
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-gold-900/10 to-transparent" />
        </div>
        {/* Geometric patterns */}
        <div className="absolute top-20 right-20 w-96 h-96 border border-gold-400/10 rotate-45" />
        <div className="absolute bottom-20 left-20 w-64 h-64 border border-gold-400/10 rotate-12" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-200px)]">
          {/* Left Column - Text */}
          <div className="space-y-8">
            <div className="inline-flex items-center px-4 py-2 bg-gold-400/10 border border-gold-400/30 rounded-full">
              <span className="text-gold-400 text-sm font-medium">Nigeria's Premier Consulting Firm</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Ready to
              <span className="block text-gold-400">
                transform your business?
              </span>
            </h1>
            
            <p className="text-lg text-gray-400 max-w-xl leading-relaxed">
              Game-changing work. People-powered growth. At Fiquant Consult, 
              we help you think bigger, build stronger, and expand opportunity for all Nigerian businesses.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/services"
                className="inline-flex items-center justify-center px-8 py-4 bg-gold-400 text-black font-semibold rounded hover:bg-gold-300 transition-all duration-300 group"
              >
                Explore Our Services
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center justify-center px-8 py-4 border border-gray-700 text-white font-semibold rounded hover:border-gold-400 hover:text-gold-400 transition-all duration-300"
              >
                Learn About Us
              </Link>
            </div>
          </div>

          {/* Right Column - Article Carousel */}
          <div className="relative">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden border border-gray-700/50 shadow-2xl">
              {articles.length > 0 && currentArticle ? (
                <div className="relative">
                  <div 
                    className={`aspect-video bg-gradient-to-br from-gold-900/30 to-gray-900 flex items-center justify-center transition-opacity duration-300 ${
                      isTransitioning ? 'opacity-0' : 'opacity-100'
                    }`}
                  >
                    {currentArticle.image ? (
                      <div className="relative w-full h-full">
                        <img 
                          src={currentArticle.image} 
                          alt={currentArticle.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                      </div>
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <BookOpen className="w-16 h-16 text-gold-400/30" />
                      </div>
                    )}
                    <div className="absolute bottom-0 left-0 right-0 p-8 text-center">
                      <span className="text-gold-400 text-sm font-medium uppercase tracking-wider">
                        {currentArticle.category}
                      </span>
                      <h3 className="text-xl font-bold text-white mt-3 mb-2 line-clamp-2">
                        {currentArticle.title}
                      </h3>
                      <p className="text-gray-400 text-sm line-clamp-2 mb-4">
                        {currentArticle.excerpt}
                      </p>
                      <Link 
                        to={`/library/${currentArticle.id}`}
                        className="inline-flex items-center text-gold-400 hover:text-gold-300 transition-colors group"
                      >
                        <span className="mr-2">Read article</span>
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>

                  {/* Carousel Controls */}
                  {articles.length > 1 && (
                    <>
                      <button
                        onClick={prevSlide}
                        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/80 rounded-full text-white transition-colors"
                        aria-label="Previous article"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <button
                        onClick={nextSlide}
                        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/80 rounded-full text-white transition-colors"
                        aria-label="Next article"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>

                      {/* Dots Indicator */}
                      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-2">
                        {articles.map((_, idx) => (
                          <button
                            key={idx}
                            onClick={() => setCurrentIndex(idx)}
                            className={`w-2 h-2 rounded-full transition-colors ${
                              idx === currentIndex ? 'bg-gold-400' : 'bg-gray-600'
                            }`}
                            aria-label={`Go to article ${idx + 1}`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>
              ) : (
                /* Fallback: Default Case Study when no articles */
                <div className="relative">
                  <div className="aspect-video bg-gradient-to-br from-gold-900/30 to-gray-900 flex items-center justify-center">
                    <div className="text-center p-8">
                      <span className="text-gold-400 text-sm font-medium uppercase tracking-wider">Case Study</span>
                      <h3 className="text-2xl font-bold text-white mt-4 mb-2">Leading Nigerian Bank</h3>
                      <p className="text-gray-400">Achieving 40% reduction in compliance costs through strategic optimization</p>
                      <Link 
                        to="/library"
                        className="mt-6 inline-flex items-center text-gold-400 hover:text-gold-300 transition-colors group"
                      >
                        <span className="mr-2">Explore our library</span>
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -left-6 bg-black border border-gold-400/30 rounded-xl p-6 shadow-xl">
              <div className="text-3xl font-bold text-gold-400">150+</div>
              <div className="text-gray-400 text-sm">Clients Served</div>
            </div>

            {/* Floating Trust Badge */}
            <div className="absolute -top-4 -right-4 bg-gold-400 rounded-full p-4 shadow-lg">
              <div className="text-black font-bold text-center">
                <div className="text-lg">7+</div>
                <div className="text-xs">Years</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#111111"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
