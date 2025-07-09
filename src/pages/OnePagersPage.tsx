
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Users, Target, Calendar, DollarSign, CheckCircle, Globe, Mail, Phone } from 'lucide-react';

const OnePagersPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-brand-navy text-white py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center">One-Pagers</h1>
          <p className="text-center mt-2 text-xl opacity-90">Marketing Resources for Educational Organizations</p>
        </div>
      </div>

      {/* Educational One-Pager */}
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <Card className="shadow-lg">
          <CardHeader className="text-center bg-brand-beige">
            <CardTitle className="text-3xl text-brand-navy mb-2">
              Full Send AI Consulting
            </CardTitle>
            <CardDescription className="text-lg text-brand-slate">
              Instructional Coaching Solutions for Educational Organizations
            </CardDescription>
          </CardHeader>

          <CardContent className="p-8 space-y-8">
            {/* Introduction */}
            <div className="text-center">
              <p className="text-lg text-brand-slate leading-relaxed">
                Transform your instructional coaching with AI-powered solutions designed specifically for K-12 education. 
                Choose from two flexible service models that fit your district's needs and budget.
              </p>
            </div>

            <Separator />

            {/* Option 1 */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Users className="h-8 w-8 text-brand-orange" />
                <h2 className="text-2xl font-bold text-brand-navy">
                  Option 1: Instructional Coach Enablement Partner
                </h2>
              </div>
              
              <p className="text-brand-slate text-lg">
                Empower your existing instructional coaches with cutting-edge AI training and strategic support.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mt-6">
                <div className="space-y-3">
                  <h3 className="font-semibold text-brand-navy flex items-center gap-2">
                    <Target className="h-5 w-5 text-brand-blue" />
                    1:1 Training
                  </h3>
                  <ul className="space-y-2 text-brand-slate">
                    <li>• Personalized AI strategy development</li>
                    <li>• Custom workflow creation</li>
                    <li>• Individual coaching sessions</li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h3 className="font-semibold text-brand-navy flex items-center gap-2">
                    <Users className="h-5 w-5 text-brand-blue" />
                    1:Few & 1:Many
                  </h3>
                  <ul className="space-y-2 text-brand-slate">
                    <li>• Team-based AI workshops</li>
                    <li>• District-wide training programs</li>
                    <li>• Collaborative resource development</li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h3 className="font-semibold text-brand-navy flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-brand-blue" />
                    Support Services
                  </h3>
                  <ul className="space-y-2 text-brand-slate">
                    <li>• PD alignment & integration</li>
                    <li>• Custom resource creation</li>
                    <li>• Ongoing strategy support</li>
                  </ul>
                </div>
              </div>
            </div>

            <Separator />

            {/* Option 2 */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Calendar className="h-8 w-8 text-brand-orange" />
                <h2 className="text-2xl font-bold text-brand-navy">
                  Option 2: Fractional Instructional Coach on Retainer
                </h2>
              </div>
              
              <p className="text-brand-slate text-lg">
                Replace or supplement full-time hires with our flexible retainer model designed for budget-conscious districts.
              </p>

              <div className="bg-brand-beige p-6 rounded-lg">
                <div className="flex items-center gap-2 mb-4">
                  <DollarSign className="h-6 w-6 text-brand-orange" />
                  <h3 className="text-xl font-semibold text-brand-navy">Pricing & Structure</h3>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="font-semibold text-brand-navy mb-2">Starting at $2,000/month</p>
                    <ul className="space-y-2 text-brand-slate">
                      <li>• Credit-based system for calls</li>
                      <li>• Flexible deliverable options</li>
                      <li>• No long-term contracts required</li>
                    </ul>
                  </div>
                  
                  <div>
                    <p className="font-semibold text-brand-navy mb-2">Key Benefits</p>
                    <ul className="space-y-2 text-brand-slate">
                      <li>• 60-70% cost savings vs. full-time hire</li>
                      <li>• Flexible delivery scheduling</li>
                      <li>• Asynchronous support included</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <Separator />

            {/* Value Proposition */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-brand-navy text-center">
                Why Choose Full Send AI Consulting?
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center space-y-3">
                  <div className="w-16 h-16 bg-brand-orange/10 rounded-full flex items-center justify-center mx-auto">
                    <Target className="h-8 w-8 text-brand-orange" />
                  </div>
                  <h3 className="font-semibold text-brand-navy">Deep Instructional Design Expertise</h3>
                  <p className="text-brand-slate">Years of experience in K-12 education and curriculum development</p>
                </div>

                <div className="text-center space-y-3">
                  <div className="w-16 h-16 bg-brand-blue/10 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle className="h-8 w-8 text-brand-blue" />
                  </div>
                  <h3 className="font-semibold text-brand-navy">AI-First Workflows</h3>
                  <p className="text-brand-slate">Cutting-edge AI integration designed specifically for educators</p>
                </div>

                <div className="text-center space-y-3">
                  <div className="w-16 h-16 bg-green-600/10 rounded-full flex items-center justify-center mx-auto">
                    <Globe className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-brand-navy">Platform Compatibility</h3>
                  <p className="text-brand-slate">Seamless integration with Amplify, Google Workspace, Canvas, and more</p>
                </div>
              </div>
            </div>

            <Separator />

            {/* CTA */}
            <div className="bg-brand-navy text-white p-8 rounded-lg text-center space-y-6">
              <h2 className="text-2xl font-bold">Ready to Transform Your Instructional Coaching?</h2>
              <p className="text-lg opacity-90">
                Contact us today to discuss which solution fits your district's needs.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="flex items-center gap-2">
                  <Mail className="h-5 w-5" />
                  <a href="mailto:hello@fullsend.ai" className="hover:underline">hello@fullsend.ai</a>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="h-5 w-5" />
                  <a href="https://fullsend.ai" className="hover:underline">fullsend.ai</a>
                </div>
              </div>
              
              <Button asChild size="lg" className="bg-brand-orange hover:bg-brand-orange/90 text-white">
                <a href="https://calendly.com/clswift3313/first-consultation" target="_blank" rel="noopener noreferrer">
                  Schedule a Consultation
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default OnePagersPage;
