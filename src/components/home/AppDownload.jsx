import React from 'react';
import { Apple, Smartphone } from 'lucide-react';
import { companyInfo } from '../../data/mockData';

const AppDownload = () => {
  return (
    <section className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gold-900/20 to-transparent" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold-400/5 rounded-full blur-3xl" />
          </div>

          <div className="relative grid lg:grid-cols-2 gap-12 items-center p-8 lg:p-16">
            {/* Left Content */}
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
                The world moves fast.
                <span className="block text-gold-400">
                  Don't just keep pace. Stay ahead.
                </span>
              </h2>
              <p className="text-gray-400 leading-relaxed">
                Download the Fiquant Insights app for the latest business insights, 
                market analysis, and expert perspectives delivered directly to your device.
              </p>
              
              {/* App Store Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-black rounded-lg hover:bg-gray-100 transition-colors group"
                >
                  <Apple className="w-6 h-6 mr-3" />
                  <div className="text-left">
                    <div className="text-xs text-gray-600">Download on the</div>
                    <div className="font-semibold">App Store</div>
                  </div>
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-black rounded-lg hover:bg-gray-100 transition-colors group"
                >
                  <Smartphone className="w-6 h-6 mr-3" />
                  <div className="text-left">
                    <div className="text-xs text-gray-600">Get it on</div>
                    <div className="font-semibold">Google Play</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Right Content - Phone Mockup */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative">
                {/* Phone Frame */}
                <div className="w-64 h-[500px] bg-gradient-to-b from-gray-700 to-gray-800 rounded-[3rem] p-2 shadow-2xl">
                  <div className="w-full h-full bg-black rounded-[2.5rem] overflow-hidden relative">
                    {/* Screen Content */}
                    <div className="absolute inset-4 bg-gradient-to-b from-gray-900 to-black rounded-2xl p-4">
                      {/* App Header */}
                      <div className="flex items-center space-x-3 mb-6">
                        <img
                          src={companyInfo.logoUrl}
                          alt="Fiquant"
                          className="w-10 h-10 rounded-lg"
                        />
                        <div>
                          <div className="text-white font-semibold text-sm">Fiquant Insights</div>
                          <div className="text-gray-500 text-xs">Latest Updates</div>
                        </div>
                      </div>
                      
                      {/* Mock Content */}
                      <div className="space-y-4">
                        <div className="bg-gray-800/50 rounded-lg p-3">
                          <div className="text-gold-400 text-xs font-medium">NEW INSIGHT</div>
                          <div className="text-white text-sm mt-1">Tax Reform Impact Analysis</div>
                        </div>
                        <div className="bg-gray-800/50 rounded-lg p-3">
                          <div className="text-gold-400 text-xs font-medium">MARKET UPDATE</div>
                          <div className="text-white text-sm mt-1">Q3 Business Outlook</div>
                        </div>
                        <div className="bg-gray-800/50 rounded-lg p-3">
                          <div className="text-gold-400 text-xs font-medium">PODCAST</div>
                          <div className="text-white text-sm mt-1">CEO Perspectives</div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Notch */}
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-5 bg-black rounded-full" />
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gold-400/20 rounded-full blur-xl" />
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-gold-400/30 rounded-full blur-lg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDownload;
