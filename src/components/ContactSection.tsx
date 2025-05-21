
import React from 'react';
import { Button } from "@/components/ui/button";
import { Mail, Phone, Calendar, Linkedin } from 'lucide-react';
const ContactSection: React.FC = () => {
  return <section id="contact" className="section-padding bg-brand-beige">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="mb-4 text-brand-navy">Ready to <span className="text-gradient">Get Started?</span></h2>
          <p className="text-xl text-brand-slate max-w-3xl mx-auto">
            Take the first step toward AI mastery. Contact us to learn more about our courses and services.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Contact Methods - direct contact methods without heading */}
          <div className="bg-white rounded-xl p-8 border border-brand-beige/50 shadow-sm">            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-center md:flex-col md:items-center md:text-center">
                <div className="w-12 h-12 rounded-full bg-brand-orange/10 flex items-center justify-center mr-4 md:mr-0 md:mb-3">
                  <Mail className="h-5 w-5 text-brand-orange" />
                </div>
                <div>
                  <div className="text-sm text-brand-slate">Email Us</div>
                  <div className="font-medium text-brand-navy">colin@fullsendaiconsulting.com</div>
                </div>
              </div>
              
              <div className="flex items-center md:flex-col md:items-center md:text-center">
                <div className="w-12 h-12 rounded-full bg-brand-blue/10 flex items-center justify-center mr-4 md:mr-0 md:mb-3">
                  <Phone className="h-5 w-5 text-brand-blue" />
                </div>
                <div>
                  <div className="text-sm text-brand-slate">Connect with Us</div>
                  <a 
                    href="https://www.linkedin.com/company/full-send-ai-consulting/?viewAsMember=true" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="font-medium text-brand-navy hover:text-brand-blue transition-colors"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
              
              <div className="flex items-center md:flex-col md:items-center md:text-center">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mr-4 md:mr-0 md:mb-3">
                  <Calendar className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <div className="text-sm text-brand-slate">Schedule a Free Consultation</div>
                  <Button asChild variant="link" className="p-0 h-auto font-medium text-green-600">
                    <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
                      Book a time slot
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-16">
          <Button asChild size="lg" className="bg-brand-orange hover:bg-brand-orange/90 text-white">
            <a href="#courses">Get Started Today</a>
          </Button>
        </div>
      </div>
    </section>;
};
export default ContactSection;
