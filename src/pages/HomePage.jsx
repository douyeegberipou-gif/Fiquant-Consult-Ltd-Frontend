import React from 'react';
import Hero from '../components/home/Hero';
import FeaturedInsights from '../components/home/FeaturedInsights';
import ServicesSection from '../components/home/ServicesSection';
import StatsSection from '../components/home/StatsSection';
import CareersSection from '../components/home/CareersSection';
import SocietalImpact from '../components/home/SocietalImpact';
import AppDownload from '../components/home/AppDownload';

const HomePage = () => {
  return (
    <main>
      <Hero />
      <FeaturedInsights />
      <ServicesSection />
      <StatsSection />
      <CareersSection />
      <SocietalImpact />
      <AppDownload />
    </main>
  );
};

export default HomePage;
