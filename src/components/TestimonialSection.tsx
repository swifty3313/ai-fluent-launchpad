import React from 'react';
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Calendar } from 'lucide-react';
const TestimonialSection: React.FC = () => {
  return <section id="testimonials" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="mb-4 text-brand-navy">Ready to see what's <span className="text-gradient">Possible?</span></h2>
          <p className="text-xl text-brand-slate max-w-3xl mx-auto">
            Discover the measurable impact our solutions can bring to your organization.
          </p>
        </div>
        
        <div className="bg-white rounded-xl p-8 shadow-sm border border-brand-beige mb-12">
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

        {/* Contact Methods */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-xl p-8 border border-brand-beige/50 shadow-sm">            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-center md:flex-col md:items-center md:text-center">
                <a href="mailto:colin@fullsendaiconsulting.com" className="flex items-center md:flex-col md:items-center hover:text-brand-orange transition-colors">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4 md:mr-0 md:mb-3 bg-slate-400">
                    <Mail className="h-5 w-5 text-brand-orange" />
                  </div>
                  <div>
                    <div className="text-sm text-brand-slate">Email Us</div>
                    <div className="font-medium text-brand-navy">colin@fullsendaiconsulting.com</div>
                  </div>
                </a>
              </div>
              
              <div className="flex items-center md:flex-col md:items-center md:text-center">
                <div className="w-12 h-12 rounded-full bg-brand-blue/10 flex items-center justify-center mr-4 md:mr-0 md:mb-3">
                  <Linkedin className="h-5 w-5 text-brand-blue" />
                </div>
                <div>
                  <div className="text-sm text-brand-slate">Connect with Us</div>
                  <a href="https://www.linkedin.com/company/full-send-ai-consulting/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="font-medium text-brand-navy hover:text-brand-blue transition-colors">
                    LinkedIn
                  </a>
                </div>
              </div>
              
              <div className="flex items-center md:flex-col md:items-center md:text-center">
                <a href="https://calendly.com/clswift3313/first-consultation" target="_blank" rel="noopener noreferrer" className="flex items-center md:flex-col md:items-center hover:text-green-600 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mr-4 md:mr-0 md:mb-3">
                    <Calendar className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <div className="text-sm text-brand-slate">Schedule a Free Consultation</div>
                    <span className="font-medium text-green-600">
                      Book a time slot
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-16">
          <Button asChild size="lg" className="bg-brand-orange hover:bg-brand-orange/90 text-white">
            <a href="#courses">Contact Us</a>
          </Button>
        </div>
      </div>
    </section>;
};
export default TestimonialSection;