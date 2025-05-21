
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { Mail, Phone, Calendar, Check } from 'lucide-react';

const ContactSection: React.FC = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      console.log("Subscribing email:", email);
      // In a real app, you would send this to your backend
      toast({
        title: "Thanks for subscribing!",
        description: "You've been added to our newsletter list.",
      });
      setSubscribed(true);
      setEmail('');
    } else {
      toast({
        title: "Email required",
        description: "Please enter your email address.",
        variant: "destructive",
      });
    }
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="mb-4">Ready to <span className="text-gradient">Get Started?</span></h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Take the first step toward AI mastery. Contact us to learn more about our courses and services.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Contact Methods */}
          <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
            <h3 className="text-2xl font-bold mb-8">Get in Touch</h3>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-fsai-orange/10 flex items-center justify-center mr-4">
                  <Mail className="h-5 w-5 text-fsai-orange" />
                </div>
                <div>
                  <div className="text-sm text-gray-600">Email Us</div>
                  <div className="font-medium">hello@fullsendai.com</div>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-fsai-blue/10 flex items-center justify-center mr-4">
                  <Phone className="h-5 w-5 text-fsai-blue" />
                </div>
                <div>
                  <div className="text-sm text-gray-600">Call Us</div>
                  <div className="font-medium">(555) 123-4567</div>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mr-4">
                  <Calendar className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <div className="text-sm text-gray-600">Schedule a Demo</div>
                  <Button asChild variant="link" className="p-0 h-auto font-medium text-green-600">
                    <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
                      Book a time slot
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Newsletter Signup */}
          <div className="bg-fsai-blue rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Join Our Newsletter</h3>
            <p className="mb-6">
              Get weekly AI productivity tips, exclusive tutorials, and updates on our latest courses.
            </p>
            
            {subscribed ? (
              <div className="flex items-center bg-white/10 rounded-lg p-4">
                <Check className="h-6 w-6 mr-3 text-green-400" />
                <p>Thanks for subscribing! Check your inbox soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                  />
                </div>
                <Button type="submit" className="w-full bg-white text-fsai-blue hover:bg-white/90">
                  Subscribe
                </Button>
              </form>
            )}
            
            <div className="mt-6 text-sm text-white/80">
              We respect your privacy. Unsubscribe at any time.
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <p className="text-xl font-semibold mb-4">Ready to transform your AI skills?</p>
          <Button asChild size="lg" className="bg-fsai-orange hover:bg-fsai-orange/90 text-white">
            <a href="#courses">Get Started Today</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
