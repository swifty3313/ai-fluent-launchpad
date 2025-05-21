
import React from 'react';

const TestimonialSection: React.FC = () => {
  return (
    <section id="testimonials" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-xl p-8 shadow-sm border border-brand-beige">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/4 mb-6 md:mb-0 flex justify-center">
              <div className="flex flex-col items-center">
                <div className="text-5xl font-bold text-brand-orange">94%</div>
                <div className="text-brand-slate text-center mt-2">Productivity Improvement</div>
              </div>
            </div>
            
            <div className="w-full md:w-1/4 mb-6 md:mb-0 flex justify-center">
              <div className="flex flex-col items-center">
                <div className="text-5xl font-bold text-brand-blue">3.5X</div>
                <div className="text-brand-slate text-center mt-2">ROI on Training</div>
              </div>
            </div>
            
            <div className="w-full md:w-1/4 mb-6 md:mb-0 flex justify-center">
              <div className="flex flex-col items-center">
                <div className="text-5xl font-bold text-green-600">12hrs</div>
                <div className="text-brand-slate text-center mt-2">Saved Per Week</div>
              </div>
            </div>
            
            <div className="w-full md:w-1/4 flex justify-center">
              <div className="flex flex-col items-center">
                <div className="text-5xl font-bold text-purple-600">98%</div>
                <div className="text-brand-slate text-center mt-2">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
