import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import AIHubVisual from "./AIHubVisual";
const HeroSection: React.FC = () => {
  return <div className="relative bg-gradient-to-b from-white to-brand-beige">
      <div className="container mx-auto px-4 py-20 md:py-32">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-10 md:mb-0 md:pr-10">
            <div className="mb-6">
              <div className="inline-block text-brand-orange rounded-full px-3 py-1 text-sm font-medium mb-4 bg-slate-500">
                Next-Gen AI Training
              </div>
              <h1 className="font-bold leading-tight mb-4 text-brand-navy">
                Seamlessly Integrate AI Into Your <span className="text-gradient">Business Operations</span>
              </h1>
              <p className="text-lg md:text-xl text-brand-slate mb-8">
                We help business owners, business operators, and education professionals automate workflows, deploy GPTs, and embed AI across the tools you already use.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-brand-orange hover:bg-brand-orange/90 text-white">
                  <a href="#courses">Start With Our Free Prompting Fluency Course</a>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-brand-blue text-brand-blue hover:bg-brand-blue/10">
                  <a href="#services" className="flex items-center">
                    Book Your Free AI Strategy Call
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
            
            {/* Removed the user avatars and count section that was here */}
          </div>
          
          <div className="w-full md:w-1/2 relative">
            <AIHubVisual />
          </div>
        </div>
      </div>
    </div>;
};
export default HeroSection;