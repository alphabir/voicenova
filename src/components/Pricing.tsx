
import { CheckCircle, HelpCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const pricingPlans = [
  {
    name: "Starter",
    description: "Perfect for small businesses just getting started with AI call handling.",
    price: "$299",
    period: "per month",
    features: [
      { name: "Up to 500 minutes of AI calls", included: true },
      { name: "Basic call handling", included: true },
      { name: "Calendar scheduling", included: true },
      { name: "Business hours management", included: true },
      { name: "Email notifications", included: true },
      { name: "Basic reporting", included: true },
      { name: "Custom voice selection", included: false },
      { name: "Advanced integrations", included: false },
      { name: "Custom workflows", included: false },
      { name: "Dedicated account manager", included: false },
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Professional",
    description: "For growing businesses that need more advanced features and capacity.",
    price: "$699",
    period: "per month",
    features: [
      { name: "Up to 1,500 minutes of AI calls", included: true },
      { name: "Advanced call handling", included: true },
      { name: "Calendar scheduling", included: true },
      { name: "Business hours management", included: true },
      { name: "Email & SMS notifications", included: true },
      { name: "Advanced reporting & analytics", included: true },
      { name: "Custom voice selection", included: true },
      { name: "CRM integrations", included: true },
      { name: "Custom workflows", included: false },
      { name: "Dedicated account manager", included: false },
    ],
    cta: "Get Started",
    popular: true,
  },
  {
    name: "Enterprise",
    description: "For organizations with high volume needs and custom requirements.",
    price: "Custom",
    period: "contact us",
    features: [
      { name: "Unlimited AI call minutes", included: true },
      { name: "Enterprise-grade call handling", included: true },
      { name: "Advanced scheduling system", included: true },
      { name: "Custom business rules", included: true },
      { name: "Multi-channel notifications", included: true },
      { name: "Custom reports & dashboards", included: true },
      { name: "Custom voice & brand experience", included: true },
      { name: "Premium integrations", included: true },
      { name: "Custom AI workflows", included: true },
      { name: "Dedicated account manager", included: true },
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

const featureDescriptions: Record<string, string> = {
  "Up to 500 minutes of AI calls": "Total monthly AI conversation time with callers.",
  "Up to 1,500 minutes of AI calls": "Extended monthly AI conversation time for higher volumes.",
  "Unlimited AI call minutes": "No limits on your monthly AI call handling volume.",
  "Basic call handling": "AI answers calls and handles simple inquiries and routing.",
  "Advanced call handling": "Enhanced AI capabilities for complex conversations and scenarios.",
  "Enterprise-grade call handling": "Our most sophisticated AI system with highest accuracy and capabilities.",
  "Calendar scheduling": "AI can schedule appointments on your calendar system.",
  "Advanced scheduling system": "Enhanced scheduling with conflict resolution and prioritization.",
  "Custom business rules": "Implement your specific business logic and rules into the AI system.",
  "Custom workflows": "Create tailored conversation flows and business processes.",
  "Dedicated account manager": "A personal contact for support and optimization.",
};

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Choose the perfect plan for your business needs. All plans include our 
            core AI voice technology with no hidden fees.
          </p>
        </div>

        {/* Pricing grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative rounded-xl overflow-hidden ${
                plan.popular 
                  ? "border-2 border-voicenova-purple shadow-xl" 
                  : "border border-gray-200 shadow-md"
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-voicenova-purple text-white px-4 py-1 text-sm font-medium">
                  Most Popular
                </div>
              )}
              
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-600 h-12 mb-6">{plan.description}</p>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-gray-600 ml-2">{plan.period}</span>
                </div>
                
                <Button 
                  className={`w-full mb-8 ${
                    plan.popular
                      ? "bg-voicenova-purple hover:bg-voicenova-purple-light"
                      : plan.name === "Enterprise" 
                        ? "bg-voicenova-blue hover:bg-voicenova-blue-light" 
                        : "bg-gray-800 hover:bg-gray-700"
                  }`}
                >
                  {plan.cta}
                </Button>
                
                <div className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start">
                      {feature.included ? (
                        <CheckCircle className="h-5 w-5 text-voicenova-purple mr-2 flex-shrink-0 mt-0.5" />
                      ) : (
                        <X className="h-5 w-5 text-gray-400 mr-2 flex-shrink-0 mt-0.5" />
                      )}
                      <span className={feature.included ? "text-gray-800" : "text-gray-500"}>
                        {feature.name}
                      </span>
                      
                      {featureDescriptions[feature.name] && (
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <span className="ml-1 cursor-help">
                                <HelpCircle className="h-4 w-4 text-gray-400 inline" />
                              </span>
                            </TooltipTrigger>
                            <TooltipContent className="max-w-xs">
                              <p>{featureDescriptions[feature.name]}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Additional pricing info */}
        <div className="mt-16 text-center">
          <p className="text-gray-700 mb-6">
            Need a custom solution? Contact our sales team for a tailored plan.
          </p>
          <Button 
            variant="outline" 
            className="border-voicenova-purple text-voicenova-purple hover:bg-voicenova-purple/10"
          >
            Contact Sales
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
