
import React, { useEffect } from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import AboutSectionPreview from '@/components/AboutSectionPreview';
import ResearchSectionPreview from '@/components/ResearchSectionPreview';
import PublicationsSectionPreview from '@/components/PublicationsSectionPreview';
import ExperienceSection from '@/components/ExperienceSection';
import EducationSection from '@/components/EducationSection';
import SkillsSection from '@/components/SkillsSection';
import AwardsSection from '@/components/AwardsSection';
import ContactSection from '@/components/ContactSection';

const Index: React.FC = () => {
  useEffect(() => {
    // Smooth scrolling for anchor links
    const handleAnchorClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        
        const href = target.getAttribute('href');
        if (href) {
          const targetElement = document.querySelector(href);
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: 'smooth'
            });
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return (
    <Layout className="bg-white dark:bg-slate-950">
      <HeroSection />
      <AboutSectionPreview />
      <ResearchSectionPreview />
      <PublicationsSectionPreview />
      <ExperienceSection />
      <EducationSection />
      <SkillsSection />
      <AwardsSection />
      <ContactSection />
    </Layout>
  );
};

export default Index;
