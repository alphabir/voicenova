
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "How does VoiceNova AI call handling work?",
    answer: "VoiceNova uses advanced AI to answer your business calls, understand caller requests, and take appropriate actions. The system processes natural language, responds with human-like conversation, and can perform tasks like scheduling appointments, answering questions, and routing calls to the right person when needed."
  },
  {
    question: "Can VoiceNova integrate with my existing business systems?",
    answer: "Yes! VoiceNova is designed to integrate seamlessly with popular business tools including calendar systems (Google Calendar, Outlook, etc.), CRM platforms (Salesforce, HubSpot, etc.), and other business software. Our Professional and Enterprise plans include standard integrations, and custom integrations can be developed for specific needs."
  },
  {
    question: "What happens if the AI can't handle a particular call?",
    answer: "VoiceNova is designed to recognize when a situation requires human intervention. In these cases, the system can transfer the call to a designated person on your team, send a detailed notification, or take a message with full context so you can follow up appropriately. You control how escalations are handled."
  },
  {
    question: "Is my business data secure with VoiceNova?",
    answer: "Absolutely. Security is a top priority at VoiceNova. We use enterprise-grade encryption for all data, both in transit and at rest. We're compliant with industry standards and regulations, and we never share your data with third parties. We also offer data retention controls to manage how long call information is stored."
  },
  {
    question: "How much time does it take to set up VoiceNova?",
    answer: "Most businesses can be up and running with VoiceNova in just 1-2 business days. Our onboarding process includes system configuration, business rules setup, and training the AI with information specific to your business. For Enterprise clients with complex requirements, setup may take slightly longer, but our team handles the entire process."
  },
  {
    question: "Can I customize how the AI voice sounds and responds?",
    answer: "Yes! Professional and Enterprise plans allow you to select from multiple voice options or create a custom voice that matches your brand. You can also customize how the AI responds to callers, including greeting style, conversation tone, and specific phrases or terminology important to your business."
  },
  {
    question: "What happens if I exceed my monthly minutes?",
    answer: "If you approach your monthly minute limit, we'll notify you in advance. Should you exceed your plan's limit, additional minutes are billed at a competitive rate. You can also upgrade your plan at any time if you consistently need more capacity. Enterprise plans offer unlimited minutes for businesses with high call volumes."
  },
  {
    question: "Do you offer a trial or money-back guarantee?",
    answer: "We offer a 14-day money-back guarantee for new customers on our Starter and Professional plans. We're confident you'll love the service, but if it doesn't meet your expectations within the first two weeks, we'll provide a full refund. We also offer live demos to show you exactly how the system works before you commit."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Got questions about VoiceNova? Find answers to the most common questions below.
          </p>
        </div>

        {/* FAQ accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200">
                <AccordionTrigger className="text-left text-lg font-medium py-4 hover:text-voicenova-purple">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 pb-4">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        {/* Additional support info */}
        <div className="mt-16 text-center">
          <p className="text-gray-700 mb-6">
            Can't find the answer you're looking for? Our team is here to help.
          </p>
          <div className="flex justify-center space-x-4">
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md font-medium text-voicenova-purple bg-voicenova-purple/10 hover:bg-voicenova-purple/20 transition-colors"
            >
              Contact Support
            </a>
            <a 
              href="#" 
              className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 rounded-md font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors"
            >
              View Documentation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
