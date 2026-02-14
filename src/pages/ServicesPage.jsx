import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Briefcase, Calculator, Shield, Settings, CheckCircle } from 'lucide-react';

const ServicesPage = () => {
  return (
    <main className="bg-black">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gold-900/10 to-transparent" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-gold-400 text-sm font-medium uppercase tracking-wider">Our Services</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-4 leading-tight">
              Comprehensive solutions for
              <span className="text-gold-400"> Nigerian businesses</span>
            </h1>
            <p className="text-xl text-gray-400 mt-6 leading-relaxed">
              We combine deep industry expertise with practical experience to help organizations 
              navigate challenges and capitalize on opportunities in the Nigerian market.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {/* Service 1 - Business Consulting */}
            <div id="briefcase" className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-gold-400/10 border border-gold-400/30 rounded-full">
                  <Briefcase className="w-4 h-4 text-gold-400 mr-2" />
                  <span className="text-gold-400 text-sm font-medium">Service 01</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white">Business Consulting</h2>
                <p className="text-gray-400 text-lg leading-relaxed">
                  We provide comprehensive business consulting services to help organizations navigate complex challenges and capitalize on emerging opportunities in the Nigerian market.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start"><CheckCircle className="w-5 h-5 text-gold-400 mr-3 mt-0.5" /><span className="text-gray-300">Strategic Planning & Execution</span></li>
                  <li className="flex items-start"><CheckCircle className="w-5 h-5 text-gold-400 mr-3 mt-0.5" /><span className="text-gray-300">Market Entry Strategy</span></li>
                  <li className="flex items-start"><CheckCircle className="w-5 h-5 text-gold-400 mr-3 mt-0.5" /><span className="text-gray-300">Organizational Restructuring</span></li>
                  <li className="flex items-start"><CheckCircle className="w-5 h-5 text-gold-400 mr-3 mt-0.5" /><span className="text-gray-300">Performance Improvement</span></li>
                  <li className="flex items-start"><CheckCircle className="w-5 h-5 text-gold-400 mr-3 mt-0.5" /><span className="text-gray-300">Mergers & Acquisitions Advisory</span></li>
                </ul>
                <Link to="/contact" className="inline-flex items-center px-6 py-3 bg-gold-400 text-black font-semibold rounded hover:bg-gold-300 transition-all duration-300 group">
                  Get Started <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
              <div>
                <div className="relative">
                  <div className="aspect-square bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 flex items-center justify-center">
                    <div className="w-32 h-32 bg-gold-400/10 rounded-full flex items-center justify-center">
                      <Briefcase className="w-16 h-16 text-gold-400" />
                    </div>
                  </div>
                  <div className="absolute -bottom-4 -right-4 bg-gold-400 text-black font-bold px-6 py-3 rounded-lg">#1</div>
                </div>
              </div>
            </div>

            {/* Service 2 - Tax Consulting */}
            <div id="calculator" className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="lg:order-2 space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-gold-400/10 border border-gold-400/30 rounded-full">
                  <Calculator className="w-4 h-4 text-gold-400 mr-2" />
                  <span className="text-gold-400 text-sm font-medium">Service 02</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white">Tax Consulting & Advisory</h2>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Our tax experts help businesses navigate Nigeria's complex tax landscape, ensuring compliance while optimizing tax efficiency.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start"><CheckCircle className="w-5 h-5 text-gold-400 mr-3 mt-0.5" /><span className="text-gray-300">Tax Planning & Optimization</span></li>
                  <li className="flex items-start"><CheckCircle className="w-5 h-5 text-gold-400 mr-3 mt-0.5" /><span className="text-gray-300">Corporate Tax Compliance</span></li>
                  <li className="flex items-start"><CheckCircle className="w-5 h-5 text-gold-400 mr-3 mt-0.5" /><span className="text-gray-300">Transfer Pricing</span></li>
                  <li className="flex items-start"><CheckCircle className="w-5 h-5 text-gold-400 mr-3 mt-0.5" /><span className="text-gray-300">VAT Advisory</span></li>
                  <li className="flex items-start"><CheckCircle className="w-5 h-5 text-gold-400 mr-3 mt-0.5" /><span className="text-gray-300">Tax Dispute Resolution</span></li>
                </ul>
                <Link to="/contact" className="inline-flex items-center px-6 py-3 bg-gold-400 text-black font-semibold rounded hover:bg-gold-300 transition-all duration-300 group">
                  Get Started <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
              <div className="lg:order-1">
                <div className="relative">
                  <div className="aspect-square bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 flex items-center justify-center">
                    <div className="w-32 h-32 bg-gold-400/10 rounded-full flex items-center justify-center">
                      <Calculator className="w-16 h-16 text-gold-400" />
                    </div>
                  </div>
                  <div className="absolute -bottom-4 -right-4 bg-gold-400 text-black font-bold px-6 py-3 rounded-lg">#2</div>
                </div>
              </div>
            </div>

            {/* Service 3 - Risk Consulting */}
            <div id="shield" className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-gold-400/10 border border-gold-400/30 rounded-full">
                  <Shield className="w-4 h-4 text-gold-400 mr-2" />
                  <span className="text-gold-400 text-sm font-medium">Service 03</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white">Risk Consulting</h2>
                <p className="text-gray-400 text-lg leading-relaxed">
                  We help organizations identify, assess, and mitigate risks while building resilient frameworks for sustainable operations.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start"><CheckCircle className="w-5 h-5 text-gold-400 mr-3 mt-0.5" /><span className="text-gray-300">Enterprise Risk Management</span></li>
                  <li className="flex items-start"><CheckCircle className="w-5 h-5 text-gold-400 mr-3 mt-0.5" /><span className="text-gray-300">Internal Audit Services</span></li>
                  <li className="flex items-start"><CheckCircle className="w-5 h-5 text-gold-400 mr-3 mt-0.5" /><span className="text-gray-300">Fraud Investigation</span></li>
                  <li className="flex items-start"><CheckCircle className="w-5 h-5 text-gold-400 mr-3 mt-0.5" /><span className="text-gray-300">Regulatory Compliance</span></li>
                  <li className="flex items-start"><CheckCircle className="w-5 h-5 text-gold-400 mr-3 mt-0.5" /><span className="text-gray-300">Crisis Management</span></li>
                </ul>
                <Link to="/contact" className="inline-flex items-center px-6 py-3 bg-gold-400 text-black font-semibold rounded hover:bg-gold-300 transition-all duration-300 group">
                  Get Started <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
              <div>
                <div className="relative">
                  <div className="aspect-square bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 flex items-center justify-center">
                    <div className="w-32 h-32 bg-gold-400/10 rounded-full flex items-center justify-center">
                      <Shield className="w-16 h-16 text-gold-400" />
                    </div>
                  </div>
                  <div className="absolute -bottom-4 -right-4 bg-gold-400 text-black font-bold px-6 py-3 rounded-lg">#3</div>
                </div>
              </div>
            </div>

            {/* Service 4 - Business Process Optimisation */}
            <div id="settings" className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="lg:order-2 space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-gold-400/10 border border-gold-400/30 rounded-full">
                  <Settings className="w-4 h-4 text-gold-400 mr-2" />
                  <span className="text-gold-400 text-sm font-medium">Service 04</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white">Business Process Optimisation & Compliance</h2>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Transform your operations with our process optimization services, ensuring regulatory compliance and operational excellence.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start"><CheckCircle className="w-5 h-5 text-gold-400 mr-3 mt-0.5" /><span className="text-gray-300">Process Reengineering</span></li>
                  <li className="flex items-start"><CheckCircle className="w-5 h-5 text-gold-400 mr-3 mt-0.5" /><span className="text-gray-300">Compliance Framework Design</span></li>
                  <li className="flex items-start"><CheckCircle className="w-5 h-5 text-gold-400 mr-3 mt-0.5" /><span className="text-gray-300">Quality Management Systems</span></li>
                  <li className="flex items-start"><CheckCircle className="w-5 h-5 text-gold-400 mr-3 mt-0.5" /><span className="text-gray-300">Digital Transformation</span></li>
                  <li className="flex items-start"><CheckCircle className="w-5 h-5 text-gold-400 mr-3 mt-0.5" /><span className="text-gray-300">Standard Operating Procedures</span></li>
                </ul>
                <Link to="/contact" className="inline-flex items-center px-6 py-3 bg-gold-400 text-black font-semibold rounded hover:bg-gold-300 transition-all duration-300 group">
                  Get Started <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
              <div className="lg:order-1">
                <div className="relative">
                  <div className="aspect-square bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 flex items-center justify-center">
                    <div className="w-32 h-32 bg-gold-400/10 rounded-full flex items-center justify-center">
                      <Settings className="w-16 h-16 text-gold-400" />
                    </div>
                  </div>
                  <div className="absolute -bottom-4 -right-4 bg-gold-400 text-black font-bold px-6 py-3 rounded-lg">#4</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gold-900/20 via-black to-gold-900/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to transform your business?
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Let's discuss how Fiquant Consult can help you achieve your goals.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-gold-400 text-black font-semibold rounded hover:bg-gold-300 transition-all duration-300 group"
          >
            Schedule a Consultation
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default ServicesPage;
