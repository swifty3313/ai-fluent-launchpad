
import React from 'react';
import { Button } from "@/components/ui/button";
import { Briefcase, Users, Award } from 'lucide-react';

const ServiceSection: React.FC = () => {
  const services = [
    {
      title: "AI Onboarding Workshops",
      description: "Jumpstart your team's AI journey with focused, hands-on workshops that teach practical skills.",
      icon: <Briefcase className="h-6 w-6 text-brand-orange" />,
      features: [
        "2-6 hour interactive sessions",
        "Customized to your industry",
        "Hands-on exercises with real use cases",
        "Implementation roadmap"
      ],
      primaryColor: "bg-brand-beige",
      textColor: "text-brand-orange",
      dotColor: "bg-brand-orange",
      buttonColor: "bg-brand-orange hover:bg-brand-orange/90",
      action: "Schedule Workshop"
    },
    {
      title: "Team Training Programs",
      description: "Comprehensive training for teams looking to develop advanced AI capabilities.",
      icon: <Users className="h-6 w-6 text-brand-blue" />,
      features: [
        "Multi-week structured program",
        "Role-specific training paths",
        "Weekly coaching calls",
        "Custom workflow development"
      ],
      primaryColor: "bg-brand-beige",
      textColor: "text-brand-blue",
      dotColor: "bg-brand-blue",
      buttonColor: "bg-brand-blue hover:bg-brand-blue/90",
      action: "Explore Training"
    },
    {
      title: "Custom Solutions Consulting",
      description: "Expert guidance on building specialized AI assistants tailored to your specific needs.",
      icon: <Award className="h-6 w-6 text-green-600" />,
      features: [
        "Requirements analysis",
        "Knowledge base development",
        "1-on-1 and team consulting available",
        "Integration & optimization"
      ],
      primaryColor: "bg-brand-beige",
      textColor: "text-green-600",
      dotColor: "bg-green-600",
      buttonColor: "bg-green-600 hover:bg-green-600/90",
      action: "Get Consulting"
    }
  ];

  return (
    <section id="services" className="section-padding bg-brand-beige">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="mb-4 text-brand-navy">Our <span className="text-gradient">Services</span></h2>
          <p className="text-xl text-brand-slate max-w-3xl mx-auto">
            From workshops to comprehensive training programs, we offer services designed to elevate
            your team's AI capabilities and transform your workflows.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-brand-beige/50 overflow-hidden hover:shadow-md transition-shadow">
              <div className={`${service.primaryColor} p-4 flex items-center border-b border-gray-200`}>
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center border border-gray-200">
                  {service.icon}
                </div>
                <h3 className={`${service.textColor} font-semibold ml-4`}>{service.title}</h3>
              </div>
              
              <div className="p-6">
                <p className="text-brand-slate mb-6">{service.description}</p>
                
                <div className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start">
                      <div className={`w-2 h-2 ${service.dotColor} rounded-full mt-2 mr-3`}></div>
                      <span className="text-brand-slate">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button 
                  asChild 
                  className={`w-full ${service.buttonColor}`}
                >
                  <a href="https://calendly.com/clswift3313/first-consultation" target="_blank" rel="noopener noreferrer">{service.action}</a>
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-brand-slate mb-6">
            Not sure which service is right for you? Contact us for a personalized recommendation.
          </p>
          <Button asChild size="lg" variant="outline" className="border-brand-blue text-brand-blue hover:bg-brand-blue/10">
            <a href="https://calendly.com/clswift3313/first-consultation" target="_blank" rel="noopener noreferrer">Book a Free Consultation</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
