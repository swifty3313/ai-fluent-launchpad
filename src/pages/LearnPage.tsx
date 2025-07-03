import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, ArrowRight } from 'lucide-react';

const LearnPage: React.FC = () => {
  const courses = [
    {
      title: "Welcome to Full Send AI: Course Kickoff",
      subtitle: "Start here to learn what Full Send AI is all about, your guide to mastering ChatGPT like a pro.",
      duration: "3 minutes",
      url: "https://rise.articulate.com/share/091K8RM_rX6fsSzkf_grRtdeupdCWGlP"
    },
    {
      title: "ChatGPT Starter Kit: Learn the Basics Fast",
      subtitle: "New to ChatGPT? This is the perfect launchpad, no experience required.",
      duration: "45-60 minutes",
      url: "https://rise.articulate.com/share/091K8RM_rX6fsSzkf_grRtdeupdCWGlP"
    },
    {
      title: "Full Send's Introduction to Prompt Engineering",
      subtitle: "Take your prompting from basic to brilliant using the Full Send Framework.",
      duration: "1-2 hours",
      url: "#" // Will be replaced with actual GitHub-hosted Rise 360 course URL
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white to-brand-beige py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-brand-navy mb-6">
            Start Learning with <span className="text-gradient">Full Send AI</span>
          </h1>
          <p className="text-xl md:text-2xl text-brand-slate mb-8 max-w-4xl mx-auto">
            Get instant access to our ChatGPT Starter Kit and Prompt Engineering courses. No fluff, just fluency.
          </p>
          <Button 
            onClick={() => document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-brand-orange hover:bg-brand-orange/90 text-white px-8 py-3 text-lg"
          >
            Choose a Course
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
              Free Learning Modules
            </h2>
            <p className="text-lg text-brand-slate max-w-2xl mx-auto">
              Start with these essential courses to build your AI foundation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {courses.map((course, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border border-gray-200 overflow-hidden">
                <div className="h-2 bg-gradient-to-r from-brand-orange to-brand-blue"></div>
                <CardContent className="p-6">
                  <div className="mb-4">
                    <div className="w-12 h-12 rounded-full bg-brand-orange/10 flex items-center justify-center mb-4">
                      <span className="font-bold text-brand-orange text-lg">{index + 1}</span>
                    </div>
                    <h3 className="font-bold text-xl text-brand-navy mb-3 group-hover:text-brand-orange transition-colors">
                      {course.title}
                    </h3>
                    <p className="text-brand-slate mb-4 leading-relaxed">
                      {course.subtitle}
                    </p>
                    <div className="flex items-center text-sm text-brand-slate mb-6">
                      <Clock className="h-4 w-4 mr-2" />
                      <span>{course.duration}</span>
                    </div>
                  </div>
                  <Button 
                    asChild
                    className="w-full bg-brand-navy hover:bg-brand-navy/90 text-white group-hover:bg-brand-orange group-hover:hover:bg-brand-orange/90 transition-all"
                  >
                    <a href={course.url} target="_blank" rel="noopener noreferrer">
                      Launch Course
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-beige py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-brand-navy mb-4">
            Ready for Advanced Training?
          </h2>
          <p className="text-lg text-brand-slate mb-8 max-w-2xl mx-auto">
            Unlock our Pro Track with advanced prompt techniques, custom GPT building, and enterprise strategies.
          </p>
          <Button asChild className="bg-brand-blue hover:bg-brand-blue/90 text-white px-8 py-3 text-lg">
            <a href="/#courses">View Pro Courses</a>
          </Button>
        </div>
      </section>

      {/* Custom Footer for Learn Page */}
      <footer className="bg-brand-navy py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-6">
            <img 
              src="/lovable-uploads/57d17de4-cf52-452c-887c-dc2631f77e86.png" 
              alt="Full Send AI Logo" 
              className="w-10 h-10 mr-3"
            />
            <h3 className="text-white font-bold text-xl">
              Full Send AI
            </h3>
          </div>
          <p className="text-white/80 mb-4">
            Need help? Email us at{' '}
            <a 
              href="mailto:colin@fullsendaiconsulting.com" 
              className="text-brand-orange hover:text-brand-orange/80 transition-colors"
            >
              colin@fullsendaiconsulting.com
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LearnPage;
