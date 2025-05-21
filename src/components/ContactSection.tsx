import React from 'react';
import { Button } from "@/components/ui/button";
import { Mail, Phone, Calendar } from 'lucide-react';
const ContactSection: React.FC = () => {
  return <section id="contact" className="section-padding bg-brand-beige">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="mb-4 text-brand-navy">Ready to <span className="text-gradient">Get Started?</span></h2>
          <p className="text-xl text-brand-slate max-w-3xl mx-auto">
            Take the first step toward AI mastery. Contact us to learn more about our courses and services.
          </p>
        </div>

        <div className="mb-16 max-w-3xl mx-auto">
          {/* Contact Methods - Now full width */}
          <div className="bg-white rounded-xl p-8 border border-brand-beige/50 shadow-sm">
            <h3 className="text-2xl font-bold mb-8 text-brand-navy text-center">Get in Touch</h3>
            
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
                  <div className="font-medium text-brand-navy">LinkedIn</div>
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
        
        <div className="text-center">
          <p className="text-xl font-semibold mb-4 text-brand-navy">Ready to transform your AI skills?</p>
          <Button asChild size="lg" className="bg-brand-orange hover:bg-brand-orange/90 text-white">
            <a href="#courses">Get Started Today</a>
          </Button>
        </div>
      </div>
    </section>;
};
export default ContactSection;