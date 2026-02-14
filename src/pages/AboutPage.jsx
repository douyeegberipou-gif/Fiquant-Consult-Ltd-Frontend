import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Eye, Award, Users } from 'lucide-react';
import { companyInfo, teamMembers, stats, testimonials } from '../data/mockData';

const AboutPage = () => {
  return (
    <main className="bg-black">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gold-900/10 to-transparent" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-gold-400 text-sm font-medium uppercase tracking-wider">About Us</span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-4 leading-tight">
                Empowering Nigerian
                <span className="text-gold-400"> businesses to thrive</span>
              </h1>
              <p className="text-xl text-gray-400 mt-6 leading-relaxed">
                Since {companyInfo.founded}, Fiquant Consult has been at the forefront of 
                transforming businesses across Nigeria through strategic consulting and innovative solutions.
              </p>
            </div>
            <div className="relative">
              <img
                src={companyInfo.logoUrl}
                alt={companyInfo.name}
                className="w-full max-w-md mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-gold-900/20 via-black to-gold-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl sm:text-5xl font-bold text-gold-400 mb-2">
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

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700/50">
              <div className="w-14 h-14 bg-gold-400/10 rounded-lg flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-gold-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-gray-400 leading-relaxed">
                To deliver exceptional consulting services that enable Nigerian businesses 
                to achieve sustainable growth, operational excellence, and regulatory compliance 
                while creating lasting value for all stakeholders.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700/50">
              <div className="w-14 h-14 bg-gold-400/10 rounded-lg flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-gold-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-gray-400 leading-relaxed">
                To be the most trusted consulting partner for businesses in Nigeria and 
                West Africa, recognized for our expertise, integrity, and commitment to 
                driving transformational change.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-gold-400 text-sm font-medium uppercase tracking-wider">Our Story</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-4 mb-8">
              Building Nigeria's future, one business at a time
            </h2>
            <div className="space-y-6 text-gray-400 leading-relaxed">
              <p>
                Founded in {companyInfo.founded}, Fiquant Consult emerged from a vision to provide 
                world-class consulting services tailored specifically for the Nigerian business 
                environment. Our founders recognized a gap in the market for a consulting firm 
                that truly understood the unique challenges and opportunities of operating in Nigeria.
              </p>
              <p>
                Today, we have grown into a team of over 50 professionals serving clients across 
                banking, oil & gas, manufacturing, technology, and professional services sectors. 
                Our approach combines global best practices with deep local expertise, ensuring 
                our solutions are both innovative and practical.
              </p>
              <p>
                Our commitment to excellence has earned us the trust of leading Nigerian organizations, 
                from established conglomerates to ambitious startups. We measure our success not 
                just by our growth, but by the impact we create for our clients and the broader 
                Nigerian economy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-gold-400 text-sm font-medium uppercase tracking-wider">Leadership</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-4">
              Meet our leadership team
            </h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Our leaders bring decades of combined experience across consulting, 
              finance, and industry.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="group bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl overflow-hidden border border-gray-700/50 hover:border-gold-400/50 transition-all duration-300"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-white group-hover:text-gold-400 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-gold-400 text-sm">{member.role}</p>
                  <p className="text-gray-400 text-sm mt-2">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-gold-400 text-sm font-medium uppercase tracking-wider">Our Values</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-4">
              What drives us every day
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Award, title: 'Excellence', desc: 'We strive for the highest standards in everything we do.' },
              { icon: Users, title: 'Partnership', desc: 'We work alongside our clients as true partners in their success.' },
              { icon: Target, title: 'Impact', desc: 'We measure our success by the tangible results we deliver.' }
            ].map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto bg-gold-400/10 rounded-full flex items-center justify-center mb-6">
                  <value.icon className="w-8 h-8 text-gold-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-gray-400">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-gold-400 text-sm font-medium uppercase tracking-wider">Client Testimonials</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-4">
              What our clients say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-8 border border-gray-700/50"
              >
                <div className="text-gold-400 text-4xl mb-4">"</div>
                <p className="text-gray-300 leading-relaxed mb-6">
                  {testimonial.quote}
                </p>
                <div>
                  <p className="text-white font-semibold">{testimonial.author}</p>
                  <p className="text-gray-500 text-sm">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gold-900/20 via-black to-gold-900/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to work with us?
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Let's discuss how Fiquant Consult can help transform your business.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-gold-400 text-black font-semibold rounded hover:bg-gold-300 transition-all duration-300 group"
          >
            Contact Us Today
            <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
