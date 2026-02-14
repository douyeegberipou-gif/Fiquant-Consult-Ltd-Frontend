import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play } from 'lucide-react';

const CareersSection = () => {
  return (
    <section className="bg-[#111111] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <span className="text-gold-400 text-sm font-medium uppercase tracking-wider">Careers</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Looking for your
              <span className="text-gold-400"> next move?</span>
            </h2>
            <p className="text-gray-400 leading-relaxed">
              We look for people who are energized by the same things as our clients: bold thinking, 
              real impact, and the courage to move first. Join Nigeria's fastest-growing consulting team.
            </p>
            <Link
              to="/careers"
              className="inline-flex items-center px-6 py-3 bg-gold-400 text-black font-semibold rounded hover:bg-gold-300 transition-all duration-300 group"
            >
              Explore Careers
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Right Content - Video/Image Card */}
          <div className="relative">
            <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden border border-gray-700">
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800"
                  alt="Team collaboration"
                  className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <button className="absolute inset-0 flex items-center justify-center group">
                  <div className="w-20 h-20 bg-gold-400 rounded-full flex items-center justify-center shadow-lg shadow-gold-400/30 group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-8 h-8 text-black ml-1" fill="currentColor" />
                  </div>
                </button>
              </div>
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white font-semibold">Life at Fiquant Consult</p>
                <p className="text-gray-400 text-sm">Watch our team story</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareersSection;
