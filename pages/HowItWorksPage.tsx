import React, { useEffect } from 'react';
import HowItWorksHero from '../components/HowItWorksHero';
import DetailedProcess from '../components/DetailedProcess';
import HomeIntegrations from '../components/HomeIntegrations';
import HomeCTA from '../components/HomeCTA';

const HowItWorksPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col w-full">
      <HowItWorksHero />
      <DetailedProcess />
      <HomeIntegrations />
      <HomeCTA />
    </div>
  );
};

export default HowItWorksPage;