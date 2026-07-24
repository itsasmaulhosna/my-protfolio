import Banner from '@/components/HomePage/Banner';

import FeaturedProjects from '@/components/HomePage/FeaturedProjects';
import SkillsPreview from '@/components/HomePage/SkillPreview';
import TrustedTechStack from '@/components/HomePage/TrustedTechStack';
import WhyHireMe from '@/components/HomePage/WhyHireMe';

import EducationPreview from '@/components/HomePage/EducationPreview';
import ServicesSection from '@/components/HomePage/ServiceSection';

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <TrustedTechStack />
      <WhyHireMe />
      <FeaturedProjects />

      <SkillsPreview />
      <EducationPreview />
      <ServicesSection />
    </div>
  );
}
