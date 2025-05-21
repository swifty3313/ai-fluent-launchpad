
import React from 'react';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import CourseSection from '@/components/CourseSection';
import ServiceSection from '@/components/ServiceSection';
import TestimonialSection from '@/components/TestimonialSection';
import { Toaster } from "@/components/ui/toaster";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Toaster />
      <HeroSection />
      <AboutSection />
      <CourseSection />
      <ServiceSection />
      <TestimonialSection />
    </div>
  );
};

export default Index;
