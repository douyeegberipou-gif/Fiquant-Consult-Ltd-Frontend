import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Monitor, Shield, BarChart3, Workflow } from 'lucide-react';

const ProductsPage = () => {
  return (
    <main className="bg-black">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
          <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-gold-900/10 to-transparent" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-gold-400 text-sm font-medium uppercase tracking-wider">Our Products</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-4 leading-tight">
              Technology solutions for
              <span className="text-gold-400"> modern enterprises</span>
            </h1>
            <p className="text-xl text-gray-400 mt-6 leading-relaxed">
              Our suite of proprietary software solutions helps Nigerian businesses 
              streamline operations, ensure compliance, and drive growth.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Product 1 */}
            <div className="group bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden border border-gray-700/50 hover:border-gold-400/50 transition-all duration-300">
              <div className="relative h-48 bg-gradient-to-br from-gold-900/20 to-gray-800 p-8">
                <div className="w-16 h-16 bg-gold-400/10 rounded-xl flex items-center justify-center mb-4">
                  <Monitor className="w-8 h-8 text-gold-400" />
                </div>
                <h3 className="text-2xl font-bold text-white group-hover:text-gold-400 transition-colors">FQ Compliance Suite</h3>
              </div>
              <div className="p-8">
                <p className="text-gray-400 mb-6">An integrated compliance management platform for Nigerian businesses</p>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center"><CheckCircle className="w-4 h-4 text-gold-400 mr-3" /><span className="text-gray-300 text-sm">Regulatory tracking</span></div>
                  <div className="flex items-center"><CheckCircle className="w-4 h-4 text-gold-400 mr-3" /><span className="text-gray-300 text-sm">Automated reporting</span></div>
                  <div className="flex items-center"><CheckCircle className="w-4 h-4 text-gold-400 mr-3" /><span className="text-gray-300 text-sm">Risk assessment tools</span></div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-500 font-medium">Coming soon</span>
                  <span className="text-gray-500 text-sm">Enterprise Ready</span>
                </div>
              </div>
            </div>

            {/* Product 2 */}
            <div className="group bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden border border-gray-700/50 hover:border-gold-400/50 transition-all duration-300">
              <div className="relative h-48 bg-gradient-to-br from-gold-900/20 to-gray-800 p-8">
                <div className="w-16 h-16 bg-gold-400/10 rounded-xl flex items-center justify-center mb-4">
                  <BarChart3 className="w-8 h-8 text-gold-400" />
                </div>
                <h3 className="text-2xl font-bold text-white group-hover:text-gold-400 transition-colors">Fiquant TaxPro</h3>
              </div>
              <div className="p-8">
                <p className="text-gray-400 mb-6">Tax planning and calculation software tailored for Nigerian tax laws</p>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center"><CheckCircle className="w-4 h-4 text-gold-400 mr-3" /><span className="text-gray-300 text-sm">Tax calculations</span></div>
                  <div className="flex items-center"><CheckCircle className="w-4 h-4 text-gold-400 mr-3" /><span className="text-gray-300 text-sm">Filing assistance</span></div>
                  <div className="flex items-center"><CheckCircle className="w-4 h-4 text-gold-400 mr-3" /><span className="text-gray-300 text-sm">Compliance calendar</span></div>
                </div>
                <div className="flex items-center justify-between">
                  <Link to="/contact" className="inline-flex items-center text-gold-400 font-medium hover:text-gold-300 transition-colors">
                    Start Free Trial <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                  <span className="text-gray-500 text-sm">Enterprise Ready</span>
                </div>
              </div>
            </div>

            {/* Product 3 */}
            <div className="group bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden border border-gray-700/50 hover:border-gold-400/50 transition-all duration-300">
              <div className="relative h-48 bg-gradient-to-br from-gold-900/20 to-gray-800 p-8">
                <div className="w-16 h-16 bg-gold-400/10 rounded-xl flex items-center justify-center mb-4">
                  <Shield className="w-8 h-8 text-gold-400" />
                </div>
                <h3 className="text-2xl font-bold text-white group-hover:text-gold-400 transition-colors">RiskGuard Analytics</h3>
              </div>
              <div className="p-8">
                <p className="text-gray-400 mb-6">Enterprise risk monitoring and analytics dashboard</p>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center"><CheckCircle className="w-4 h-4 text-gold-400 mr-3" /><span className="text-gray-300 text-sm">Real-time monitoring</span></div>
                  <div className="flex items-center"><CheckCircle className="w-4 h-4 text-gold-400 mr-3" /><span className="text-gray-300 text-sm">Predictive analytics</span></div>
                  <div className="flex items-center"><CheckCircle className="w-4 h-4 text-gold-400 mr-3" /><span className="text-gray-300 text-sm">Custom reports</span></div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-500 font-medium">Coming soon</span>
                  <span className="text-gray-500 text-sm">Enterprise Ready</span>
                </div>
              </div>
            </div>

            {/* Product 4 */}
            <div className="group bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden border border-gray-700/50 hover:border-gold-400/50 transition-all duration-300">
              <div className="relative h-48 bg-gradient-to-br from-gold-900/20 to-gray-800 p-8">
                <div className="w-16 h-16 bg-gold-400/10 rounded-xl flex items-center justify-center mb-4">
                  <Workflow className="w-8 h-8 text-gold-400" />
                </div>
                <h3 className="text-2xl font-bold text-white group-hover:text-gold-400 transition-colors">ProcessFlow Manager</h3>
              </div>
              <div className="p-8">
                <p className="text-gray-400 mb-6">Business process mapping and optimization tool</p>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center"><CheckCircle className="w-4 h-4 text-gold-400 mr-3" /><span className="text-gray-300 text-sm">Process mapping</span></div>
                  <div className="flex items-center"><CheckCircle className="w-4 h-4 text-gold-400 mr-3" /><span className="text-gray-300 text-sm">Bottleneck identification</span></div>
                  <div className="flex items-center"><CheckCircle className="w-4 h-4 text-gold-400 mr-3" /><span className="text-gray-300 text-sm">Performance metrics</span></div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-500 font-medium">Coming soon</span>
                  <span className="text-gray-500 text-sm">Enterprise Ready</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-gold-400 text-sm font-medium uppercase tracking-wider">Integration</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mt-4">
                Seamless integration with your existing systems
              </h2>
              <p className="text-gray-400 mt-6 leading-relaxed">
                Our products are designed to work with your current technology stack. 
                We offer robust APIs, custom integrations, and dedicated support to ensure 
                smooth deployment and adoption.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="flex items-center"><CheckCircle className="w-5 h-5 text-gold-400 mr-2" /><span className="text-gray-300">ERP Systems</span></div>
                <div className="flex items-center"><CheckCircle className="w-5 h-5 text-gold-400 mr-2" /><span className="text-gray-300">Banking Platforms</span></div>
                <div className="flex items-center"><CheckCircle className="w-5 h-5 text-gold-400 mr-2" /><span className="text-gray-300">Accounting Software</span></div>
                <div className="flex items-center"><CheckCircle className="w-5 h-5 text-gold-400 mr-2" /><span className="text-gray-300">HR Systems</span></div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto bg-gold-400/10 rounded-full flex items-center justify-center mb-4">
                    <Workflow className="w-12 h-12 text-gold-400" />
                  </div>
                  <p className="text-white font-semibold">Unified Platform</p>
                  <p className="text-gray-400 text-sm mt-2">All tools in one place</p>
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
            Ready to modernize your operations?
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Schedule a demo to see how our products can transform your business.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-gold-400 text-black font-semibold rounded hover:bg-gold-300 transition-all duration-300 group"
          >
            Schedule a Demo
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default ProductsPage;
