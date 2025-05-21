
import React from 'react';
import { Check } from 'lucide-react';

const AboutSection: React.FC = () => {
  const features = [
    {
      title: "Profile Setup & Optimization",
      description: "We help you set up and optimize your AI assistant profiles for maximum effectiveness."
    },
    {
      title: "Custom GPT SMEs",
      description: "Create specialized AI assistants tailored to your specific industry and workflow needs."
    },
    {
      title: "Workflow Integration",
      description: "Seamlessly integrate AI tools into your existing workflows for enhanced productivity."
    }
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="mb-4">About <span className="text-gradient">Full Send AI</span></h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We help professionals, educators and teams master ChatGPT and AI productivity tools through 
            a systems-based approach that delivers immediate results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-fsai-orange/10 flex items-center justify-center mb-4">
                <Check className="h-6 w-6 text-fsai-orange" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-fsai-blue/5 rounded-xl p-6 md:p-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-2/3 mb-6 md:mb-0 md:pr-10">
              <h3 className="text-2xl font-bold mb-4">Our System-Based Approach</h3>
              <p className="text-gray-600 mb-4">
                Our methodology focuses on practical application. We don't just teach theory – we build systems that integrate 
                AI tools directly into your daily workflows for immediate impact.
              </p>
              <div className="flex flex-col space-y-2">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-fsai-orange mt-1 mr-3"></div>
                  <p className="text-gray-700"><span className="font-medium">Learn:</span> Master fundamental AI concepts and tool capabilities</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-fsai-blue mt-1 mr-3"></div>
                  <p className="text-gray-700"><span className="font-medium">Apply:</span> Implement AI solutions to your specific use cases</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-500 mt-1 mr-3"></div>
                  <p className="text-gray-700"><span className="font-medium">Transform:</span> Evolve your workflows for sustainable productivity gains</p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3 bg-white rounded-lg shadow p-6 border border-gray-100">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-fsai-orange/10 mb-4">
                  <span className="text-2xl font-bold text-fsai-orange">3X</span>
                </div>
                <h4 className="text-lg font-semibold mb-2">Average Productivity Boost</h4>
                <p className="text-gray-600 text-sm">
                  Our clients report tripling their productivity after implementing our AI systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
