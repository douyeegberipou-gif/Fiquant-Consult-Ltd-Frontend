import React from 'react';
import { stats } from '../../data/mockData';

const StatsSection = () => {
  return (
    <section className="bg-gradient-to-r from-gold-900/20 via-black to-gold-900/20 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group"
            >
              <div className="text-4xl sm:text-5xl font-bold text-gold-400 mb-2 transition-transform duration-300 group-hover:scale-110">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
