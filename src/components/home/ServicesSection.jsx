import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Briefcase, Calculator, Shield, Settings } from 'lucide-react';
import { services } from '../../data/mockData';

const iconMap = {
  briefcase: Briefcase,
  calculator: Calculator,
  shield: Shield,
  settings: Settings
};

const ServicesSection = () => {
  return (
    <section className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-gold-400 text-sm font-medium uppercase tracking-wider">How We Help Clients</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-4">
            Let's turn your biggest opportunities
            <br />
            <span className="text-gold-400">
              into your next big moves.
            </span>
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const Icon = iconMap[service.icon] || Briefcase;
            return (
              <div
                key={service.id}
                className="group relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl overflow-hidden border border-gray-700/50 hover:border-gold-400/50 transition-all duration-300"
              >
                {/* Decorative gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative p-8">
                  {/* Icon */}
                  <div className="w-14 h-14 bg-gold-400/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-gold-400/20 transition-colors duration-300">
                    <Icon className="w-7 h-7 text-gold-400" />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-gold-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    {service.shortDesc}
                  </p>

                  {/* Link */}
                  <Link
                    to={`/services#${service.icon}`}
                    className="inline-flex items-center text-gold-400 text-sm font-medium hover:text-gold-300 transition-colors group/link"
                  >
                    Learn more
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            to="/services"
            className="inline-flex items-center px-8 py-4 border border-gold-400/50 text-gold-400 font-semibold rounded hover:bg-gold-400/10 transition-all duration-300 group"
          >
            Explore All Services
            <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
