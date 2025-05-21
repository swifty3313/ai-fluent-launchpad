
import React from 'react';
import { Button } from "@/components/ui/button";
import { Check, Star } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const CourseSection: React.FC = () => {
  const freeCourses = [
    {
      title: "AI Fundamentals",
      description: "Understand how AI and Large Language Models work",
      lessons: 5,
      duration: "2 hours",
      gradient: "from-blue-400/80 to-blue-600"
    },
    {
      title: "Basic Prompt Engineering",
      description: "Learn how to craft effective prompts for better results",
      lessons: 4,
      duration: "1.5 hours",
      gradient: "from-green-400/80 to-green-600"
    },
    {
      title: "Workflow Integration Basics",
      description: "Start integrating AI into your daily tasks",
      lessons: 3,
      duration: "1 hour",
      gradient: "from-purple-400/80 to-purple-600"
    }
  ];

  const proCourses = [
    {
      title: "Advanced Prompt Techniques",
      description: "Master complex prompting strategies for specialized tasks",
      lessons: 8,
      duration: "3 hours",
      gradient: "from-amber-400/80 to-amber-600"
    },
    {
      title: "Custom GPT Building",
      description: "Create your own specialized AI assistants",
      lessons: 6,
      duration: "2.5 hours",
      gradient: "from-red-400/80 to-red-600"
    },
    {
      title: "API Integration",
      description: "Connect AI to your applications and software",
      lessons: 7,
      duration: "3 hours",
      gradient: "from-cyan-400/80 to-cyan-600"
    },
    {
      title: "Enterprise AI Strategy",
      description: "Develop organization-wide AI implementation plans",
      lessons: 5,
      duration: "2 hours",
      gradient: "from-pink-400/80 to-pink-600"
    }
  ];

  return (
    <section id="courses" className="section-padding bg-brand-beige">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="mb-4">Master AI with Our <span className="text-gradient">Courses</span></h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Structured learning paths to help you become proficient with ChatGPT and other AI tools, 
            from fundamental concepts to advanced applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Free Track Column */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="bg-gradient-to-r from-brand-orange/90 to-brand-orange p-6">
              <h3 className="text-white font-bold mb-2">Free Track</h3>
              <p className="text-white/90">Start your AI journey with these essential modules</p>
            </div>
            
            <div className="p-6">
              <div className="space-y-6">
                {freeCourses.map((course, index) => {
                  // Extract colors from gradient string for dot color
                  const colorClass = course.gradient.split(' ')[1]; // e.g. "to-blue-600"
                  
                  return (
                    <Card key={index} className="overflow-hidden border border-gray-100 shadow-sm">
                      <div className={`h-3 bg-gradient-to-r ${course.gradient}`}></div>
                      <CardContent className="p-4">
                        <div className="flex">
                          <div className="flex-shrink-0 mr-4">
                            <div className={`w-10 h-10 rounded-full bg-${colorClass.replace('to-', '')}/10 flex items-center justify-center`}>
                              <span className={`font-semibold text-${colorClass.replace('to-', '')}`}>{index + 1}</span>
                            </div>
                          </div>
                          <div>
                            <h4 className="font-semibold text-lg">{course.title}</h4>
                            <p className="text-gray-600 mb-2">{course.description}</p>
                            <div className="flex text-sm text-gray-500">
                              <span className="mr-4">{course.lessons} lessons</span>
                              <span>{course.duration}</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
              
              <Button asChild className="w-full mt-8 bg-brand-orange hover:bg-brand-orange/90">
                <a href="#contact">Start Learning Free</a>
              </Button>
            </div>
          </div>

          {/* Pro Track Column */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden relative">
            <div className="absolute top-4 right-4 bg-yellow-100 text-yellow-700 text-xs font-medium px-2 py-1 rounded-full flex items-center">
              <Star className="h-3 w-3 mr-1 fill-yellow-500 stroke-yellow-500" />
              Most Popular
            </div>
            
            <div className="bg-gradient-to-r from-brand-blue/90 to-brand-blue p-6">
              <h3 className="text-white font-bold mb-2">Pro Track</h3>
              <p className="text-white/90">Advanced modules for serious productivity gains</p>
            </div>
            
            <div className="p-6">
              <div className="space-y-6">
                {proCourses.map((course, index) => {
                  // Extract colors from gradient string for dot color
                  const colorClass = course.gradient.split(' ')[1]; // e.g. "to-amber-600"
                  
                  return (
                    <Card key={index} className="overflow-hidden border border-gray-100 shadow-sm">
                      <div className={`h-3 bg-gradient-to-r ${course.gradient}`}></div>
                      <CardContent className="p-4">
                        <div className="flex">
                          <div className="flex-shrink-0 mr-4">
                            <div className={`w-10 h-10 rounded-full bg-${colorClass.replace('to-', '')}/10 flex items-center justify-center`}>
                              <span className={`font-semibold text-${colorClass.replace('to-', '')}`}>{index + 4}</span>
                            </div>
                          </div>
                          <div>
                            <h4 className="font-semibold text-lg">{course.title}</h4>
                            <p className="text-gray-600 mb-2">{course.description}</p>
                            <div className="flex text-sm text-gray-500">
                              <span className="mr-4">{course.lessons} lessons</span>
                              <span>{course.duration}</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
              
              <div className="mt-8 mb-4">
                <div className="text-center mb-4">
                  <span className="text-2xl font-bold">$297</span>
                  <span className="text-gray-600 ml-2">one-time payment</span>
                </div>
                <Button asChild className="w-full bg-brand-blue hover:bg-brand-blue/90">
                  <a href="#contact">Upgrade to Pro</a>
                </Button>
              </div>
              
              <div className="flex items-center justify-center text-sm text-gray-500">
                <Check className="h-4 w-4 mr-1 text-green-500" />
                <span>14-day money-back guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseSection;
