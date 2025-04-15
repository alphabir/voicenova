
import { useState } from "react";
import { Phone, Mail, MessageSquare, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    interests: [] as string[]
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const interestOptions = [
    "General Information",
    "Pricing & Plans",
    "Technical Questions",
    "Partnership Opportunities",
    "Demo Request"
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleInterestToggle = (interest: string) => {
    setFormData(prev => {
      const newInterests = prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest];
      
      return { ...prev, interests: newInterests };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "We've received your inquiry and will get back to you soon.",
      });
      setIsSubmitting(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
        interests: []
      });
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact information */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Get in Touch
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                Have questions about VoiceNova? Want to see a demo of our AI call services?
                Our team is ready to help you transform your business communication.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="bg-voicenova-purple/10 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-voicenova-purple" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Call Us</h3>
                    <p className="text-gray-700">(555) 123-4567</p>
                    <p className="text-sm text-gray-500">Monday-Friday, 9AM-6PM EST</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-voicenova-blue/10 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-voicenova-blue" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Email Us</h3>
                    <p className="text-gray-700">info@voicenova.ai</p>
                    <p className="text-sm text-gray-500">We respond within 24 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-voicenova-purple/10 p-3 rounded-full mr-4">
                    <MessageSquare className="h-6 w-6 text-voicenova-purple" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Live Chat</h3>
                    <p className="text-gray-700">Chat with our team</p>
                    <p className="text-sm text-gray-500">Available 24/7 for urgent support</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-voicenova-purple/10 to-voicenova-blue/10 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Ready for a Demo?</h3>
                <p className="text-gray-700 mb-4">
                  Experience how VoiceNova can transform your business calls with our personalized demo.
                </p>
                <Button className="w-full bg-voicenova-purple hover:bg-voicenova-purple-light">
                  Schedule a Demo <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
            
            {/* Contact form */}
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
              <h3 className="text-2xl font-semibold mb-6">Send Us a Message</h3>
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name*
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email*
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                      Company
                    </label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full"
                      placeholder="Your company name"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    I'm interested in (select all that apply)
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {interestOptions.map((interest) => (
                      <button
                        key={interest}
                        type="button"
                        onClick={() => handleInterestToggle(interest)}
                        className={`px-4 py-2 rounded-md text-sm text-left transition-colors ${
                          formData.interests.includes(interest)
                            ? "bg-voicenova-purple text-white"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                      >
                        {interest}
                      </button>
                    ))}
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message*
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="w-full min-h-[120px]"
                    placeholder="How can we help you?"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-voicenova-purple hover:bg-voicenova-purple-light"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
