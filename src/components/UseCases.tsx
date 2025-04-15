
import { useState } from "react";
import { 
  Building, 
  ShoppingBag, 
  Stethoscope, 
  GraduationCap, 
  Home, 
  Car,
  CheckCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const useCases = [
  {
    id: "business",
    icon: Building,
    title: "Business",
    description: "Streamline your business operations with AI call handling that never misses a customer inquiry.",
    benefits: [
      "Replace or supplement receptionist at a fraction of the cost",
      "Route calls to appropriate departments automatically",
      "Handle customer inquiries and provide information 24/7",
      "Capture lead information with every call"
    ],
    cta: "Perfect for small to medium businesses looking to scale customer service without increasing headcount."
  },
  {
    id: "retail",
    icon: ShoppingBag,
    title: "Retail",
    description: "Enhance customer shopping experience with instant phone support that boosts sales and satisfaction.",
    benefits: [
      "Process orders and track shipping over the phone",
      "Answer product questions and assist with purchasing decisions",
      "Handle returns and exchanges efficiently",
      "Provide inventory information in real-time"
    ],
    cta: "Ideal for retail businesses looking to improve customer service and increase sales conversions."
  },
  {
    id: "healthcare",
    icon: Stethoscope,
    title: "Healthcare",
    description: "Deliver better patient experiences with intelligent scheduling and information services.",
    benefits: [
      "Schedule and manage patient appointments",
      "Provide medication reminders and follow-up calls",
      "Answer common medical questions and triage calls",
      "Handle insurance and billing inquiries"
    ],
    cta: "Designed for medical practices seeking to improve patient communication while reducing staff workload."
  },
  {
    id: "education",
    icon: GraduationCap,
    title: "Education",
    description: "Improve administrative efficiency and student support with AI call handling.",
    benefits: [
      "Answer enrollment and registration questions",
      "Provide information about courses and programs",
      "Handle routine administrative inquiries",
      "Connect callers with appropriate faculty or staff"
    ],
    cta: "Perfect for educational institutions wanting to improve responsiveness while controlling administrative costs."
  },
  {
    id: "realestate",
    icon: Home,
    title: "Real Estate",
    description: "Never miss a potential buyer or seller with around-the-clock property information.",
    benefits: [
      "Provide property details to interested buyers 24/7",
      "Schedule property viewings automatically",
      "Capture lead information for follow-up",
      "Answer common questions about listings and neighborhoods"
    ],
    cta: "Ideal for real estate agents and firms looking to maximize lead capture and conversion."
  },
  {
    id: "automotive",
    icon: Car,
    title: "Automotive",
    description: "Enhance customer service and appointment scheduling for automotive businesses.",
    benefits: [
      "Schedule service appointments and maintenance",
      "Provide information about inventory and pricing",
      "Handle routine customer service inquiries",
      "Send service reminders and follow-ups"
    ],
    cta: "Perfect for dealerships and service centers looking to improve customer experience and operational efficiency."
  }
];

const UseCases = () => {
  const [activeTab, setActiveTab] = useState("business");

  return (
    <section id="use-cases" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Solutions For Every Industry
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Discover how VoiceNova transforms phone operations across different industries 
            with customized AI call handling solutions.
          </p>
        </div>

        {/* Industry tabs */}
        <Tabs defaultValue="business" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-3 md:grid-cols-6 gap-2 bg-transparent h-auto mb-8">
            {useCases.map((useCase) => (
              <TabsTrigger 
                key={useCase.id} 
                value={useCase.id}
                className={`
                  flex flex-col items-center p-4 rounded-lg data-[state=active]:shadow-md
                  data-[state=active]:bg-white data-[state=active]:border-voicenova-purple
                  data-[state=active]:text-voicenova-purple hover:bg-white transition-all
                `}
              >
                <useCase.icon className="h-6 w-6 mb-2" />
                <span>{useCase.title}</span>
              </TabsTrigger>
            ))}
          </TabsList>
          
          {useCases.map((useCase) => (
            <TabsContent 
              key={useCase.id} 
              value={useCase.id}
              className="bg-white rounded-xl shadow-md p-6 md:p-8"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center mb-4">
                    <useCase.icon className="h-8 w-8 text-voicenova-purple mr-3" />
                    <h3 className="text-2xl font-bold">{useCase.title} Solutions</h3>
                  </div>
                  <p className="text-gray-700 mb-6">{useCase.description}</p>
                  
                  <div className="space-y-4 mb-8">
                    {useCase.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-voicenova-purple mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                  
                  <p className="text-voicenova-blue font-medium mb-6">{useCase.cta}</p>
                  
                  <Button className="bg-voicenova-purple hover:bg-voicenova-purple-light">
                    Learn More About {useCase.title} Solutions
                  </Button>
                </div>
                
                <div className="flex items-center justify-center bg-gradient-to-br from-voicenova-purple-light/10 to-voicenova-blue-light/10 rounded-lg p-6">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-voicenova-purple to-voicenova-blue rounded-full flex items-center justify-center mx-auto mb-6">
                      <useCase.icon className="h-12 w-12 text-white" />
                    </div>
                    <h4 className="text-xl font-semibold mb-2">
                      Ready to transform your {useCase.title.toLowerCase()} communication?
                    </h4>
                    <p className="text-gray-600 mb-6">
                      Schedule a demo to see how VoiceNova can be customized for your specific needs.
                    </p>
                    <Button variant="outline" className="border-voicenova-purple text-voicenova-purple hover:bg-voicenova-purple/10">
                      Request {useCase.title} Demo
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default UseCases;
