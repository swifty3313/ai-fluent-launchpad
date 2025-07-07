
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, User, MessageSquare } from 'lucide-react';

interface ContactFormProps {
  children: React.ReactNode;
}

const ContactForm: React.FC<ContactFormProps> = ({ children }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const createMailtoLink = () => {
    const subject = encodeURIComponent(`Contact from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    return `mailto:colin@fullsendaiconsulting.com?subject=${subject}&body=${body}`;
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-brand-navy">Contact Us</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-brand-navy">Name</Label>
            <div className="relative">
              <User className="absolute left-3 top-3 h-4 w-4 text-brand-slate" />
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                placeholder="Your name"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email" className="text-brand-navy">Email</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 h-4 w-4 text-brand-slate" />
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                placeholder="your@email.com"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="message" className="text-brand-navy">Message</Label>
            <div className="relative">
              <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-brand-slate" />
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-2 min-h-[100px] border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-orange focus:border-transparent resize-none"
                placeholder="Tell us about your project or questions..."
              />
            </div>
          </div>
          
          <Button 
            asChild
            className="w-full bg-brand-orange hover:bg-brand-orange/90 text-white"
          >
            <a href={createMailtoLink()}>
              Send Email
            </a>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactForm;
