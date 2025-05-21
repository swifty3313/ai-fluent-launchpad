
import React from 'react';
import { Star } from 'lucide-react';

const TestimonialSection: React.FC = () => {
  const testimonials = [
    {
      quote: "Full Send AI transformed how our marketing team creates content. We've cut production time by 60% while improving quality.",
      name: "Sarah Johnson",
      role: "Marketing Director",
      company: "TechGrowth Inc.",
      rating: 5
    },
    {
      quote: "The custom GPT they built for our research team has revolutionized how we analyze data. What took days now takes hours.",
      name: "Dr. Michael Chen",
      role: "Research Lead",
      company: "BioInnovate Labs",
      rating: 5
    },
    {
      quote: "Their training program gave our team the confidence to embrace AI tools. Now everyone is finding innovative ways to use ChatGPT.",
      name: "Alex Rivera",
      role: "Operations Manager",
      company: "Streamline Solutions",
      rating: 5
    },
    {
      quote: "As an educator, I was skeptical about AI. Full Send showed me how to use it ethically to reduce admin work and focus on teaching.",
      name: "Dr. Patricia Moore",
      role: "Department Chair",
      company: "Westview University",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="mb-4 text-brand-navy">Client <span className="text-gradient">Success Stories</span></h2>
          <p className="text-xl text-brand-slate max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about their experience with Full Send AI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-brand-beige rounded-xl p-6 shadow-sm border border-brand-beige/50">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 stroke-yellow-400" />
                ))}
              </div>
              
              <blockquote className="text-brand-slate mb-6">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-orange to-brand-blue flex items-center justify-center text-white font-bold">
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-brand-navy">{testimonial.name}</div>
                  <div className="text-sm text-brand-slate">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-xl p-8 shadow-sm border border-brand-beige">
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
