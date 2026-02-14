import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Headphones, FileText, Newspaper } from 'lucide-react';
import { insights } from '../../data/mockData';

const categoryIcons = {
  ARTICLE: Newspaper,
  PODCAST: Headphones,
  REPORT: FileText
};

const FeaturedInsights = () => {
  return (
    <section className="bg-[#111111] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <span className="text-gold-400 text-sm font-medium uppercase tracking-wider">Insights</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">
              Featured Insights
            </h2>
            <p className="text-gray-400 mt-4 max-w-2xl">
              Explore our latest thinking on the challenges and opportunities facing Nigerian businesses.
            </p>
          </div>
          <Link
            to="/insights"
            className="mt-6 md:mt-0 inline-flex items-center text-gold-400 hover:text-gold-300 transition-colors group"
          >
            View all insights
            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Insights Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {insights.map((insight, index) => {
            const Icon = categoryIcons[insight.category] || Newspaper;
            return (
              <article
                key={insight.id}
                className={`group bg-gray-900/50 border border-gray-800 rounded-xl overflow-hidden hover:border-gold-400/50 transition-all duration-300 ${
                  index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''
                }`}
              >
                <Link to={`/insights/${insight.id}`} className="block h-full">
                  {/* Image */}
                  <div className={`relative overflow-hidden ${index === 0 ? 'aspect-[16/10]' : 'aspect-video'}`}>
                    <img
                      src={insight.image}
                      alt={insight.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center px-3 py-1 bg-gold-400/90 text-black text-xs font-semibold rounded">
                        <Icon className="w-3 h-3 mr-1" />
                        {insight.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className={`font-bold text-white group-hover:text-gold-400 transition-colors leading-tight ${
                      index === 0 ? 'text-xl' : 'text-base'
                    }`}>
                      {insight.title}
                    </h3>
                    
                    {index === 0 && (
                      <p className="text-gray-400 mt-3 line-clamp-2">
                        {insight.excerpt}
                      </p>
                    )}

                    <div className="flex items-center mt-4 text-sm text-gray-500 space-x-4">
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {insight.readTime}
                      </span>
                      <span>{insight.date}</span>
                    </div>
                  </div>
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturedInsights;
