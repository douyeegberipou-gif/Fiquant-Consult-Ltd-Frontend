import React from 'react';
import { ArrowRight, BookOpen, GraduationCap, TrendingUp } from 'lucide-react';

const impactItems = [
  {
    icon: BookOpen,
    title: "Fiquant Academy",
    description: "Skill-building programs—at no cost—so professionals and individuals can achieve even more.",
    link: "/academy"
  },
  {
    icon: GraduationCap,
    title: "Fiquant Forward",
    description: "An online learning journey designed to equip individuals at different stages of their professional career.",
    link: "/forward"
  },
  {
    icon: TrendingUp,
    title: "Sustainable Inclusive Growth",
    description: "We support organizations in innovating sustainably, achieving lasting performance gains.",
    link: "/sustainability"
  }
];

const SocietalImpact = () => {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 py-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-gold-900/10 to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-gold-900/10 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-gold-400 text-sm font-medium uppercase tracking-wider">Societal Impact</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-4">
            Sharing our best to help more
            <span className="text-gold-400"> people succeed</span>
          </h2>
        </div>

        {/* Impact Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {impactItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl overflow-hidden border border-gray-700/50 hover:border-gold-400/50 transition-all duration-300"
              >
                {/* Image placeholder */}
                <div className="aspect-[4/3] bg-gradient-to-br from-gold-900/30 to-gray-800 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Icon className="w-16 h-16 text-gold-400/30" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gold-400 mb-3 flex items-center">
                    {item.title}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SocietalImpact;
