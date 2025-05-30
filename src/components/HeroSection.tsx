import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
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
                Turn ChatGPT into your <span className="text-gradient">smartest teammate</span>
              </h1>
              <p className="text-lg md:text-xl text-brand-slate mb-8">
                Master AI tools that transform your workflow. Learn to leverage ChatGPT and other AI technologies to boost your productivity and creativity.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-brand-orange hover:bg-brand-orange/90 text-white">
                  <a href="#courses">Start Learning Free</a>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-brand-blue text-brand-blue hover:bg-brand-blue/10">
                  <a href="#services" className="flex items-center">
                    Explore Services
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
            
            {/* Removed the user avatars and count section that was here */}
          </div>
          
          <div className="w-full md:w-1/2 relative">
            <div className="bg-gradient-to-br from-brand-orange to-brand-blue p-1 rounded-xl">
              <div className="bg-white rounded-lg p-6">
                <div className="border border-brand-beige rounded-md p-4 mb-4">
                  <div className="flex items-center mb-2">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium text-brand-orange mr-2 bg-slate-500">You</div>
                    <p className="text-sm font-medium">Team Lead</p>
                  </div>
                  <p className="text-brand-slate text-sm">Summarize this meeting transcript and create a follow-up email I can send to my team.</p>
                </div>
                
                <div className="border border-brand-beige rounded-md p-4">
                  <div className="flex items-center mb-2">
                    <div className="w-6 h-6 rounded-full bg-brand-blue/20 flex items-center justify-center text-xs font-medium text-brand-blue mr-2">AI</div>
                    <p className="text-sm font-medium">ChatGPT Assistant</p>
                  </div>
                  <p className="text-brand-slate text-sm">I've summarized your meeting notes and highlighted 3 key follow-ups. Here's a quick draft of the email with action items to share with your team…</p>
                </div>
              </div>
            </div>
            
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-brand-beige rounded-full z-[-1] hidden md:block"></div>
          </div>
        </div>
      </div>
    </div>;
};
export default HeroSection;