import Banner from '@/components/HomePage/Banner';
import ExperienceHighlights from '@/components/HomePage/ExperienceHighLight';
import FeaturedProjects from '@/components/HomePage/FeaturedProjects';
import SkillsPreview from '@/components/HomePage/SkillPreview';
import TrustedTechStack from '@/components/HomePage/TrustedTechStack';
import WhyHireMe from '@/components/HomePage/WhyHireMe';
import Image from 'next/image';
import Education from './education/page';
import EducationPreview from '@/components/HomePage/EducationPreview';
import ServicesSection from '@/components/HomePage/ServiceSection';
import Testimonials from '@/components/HomePage/Testimonial';

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <TrustedTechStack />
      <WhyHireMe />
      <FeaturedProjects />
      <ExperienceHighlights />
      <SkillsPreview />
      <EducationPreview />
      <ServicesSection />
      <Testimonials />
    </div>
  );
}
