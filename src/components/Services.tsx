
import { BrainCircuit, Calendar, MessageSquare, Phone, ShieldCheck, Zap } from "lucide-react";

const serviceItems = [
  {
    icon: Phone,
    title: "Intelligent Call Handling",
    description: "Our AI answers calls 24/7, understands context, and responds naturally to caller requests.",
    color: "from-voicenova-purple to-voicenova-purple-light",
  },
  {
    icon: Calendar,
    title: "Smart Scheduling",
    description: "Book appointments, manage your calendar, and send reminders without human intervention.",
    color: "from-voicenova-blue to-voicenova-blue-light",
  },
  {
    icon: MessageSquare,
    title: "Customer Service",
    description: "Handle inquiries, provide information, and resolve issues with personalized AI responses.",
    color: "from-voicenova-purple-light to-voicenova-blue",
  },
  {
    icon: BrainCircuit,
    title: "Advanced Conversation",
    description: "Natural language processing for human-like conversations that understand context and intent.",
    color: "from-voicenova-blue-light to-voicenova-purple",
  },
  {
    icon: ShieldCheck,
    title: "Secure & Private",
    description: "Enterprise-grade security with end-to-end encryption to protect all conversations and data.",
    color: "from-voicenova-purple to-voicenova-blue",
  },
  {
    icon: Zap,
    title: "Call Automation",
    description: "Automate repetitive tasks and workflows, freeing your team for more important work.",
    color: "from-voicenova-blue to-voicenova-purple",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Powerful AI Call Services
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            VoiceNova doesn't just answer your calls - it transforms your entire phone experience with 
            intelligent automation and human-like conversations.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceItems.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
              <div className="p-6">
                <div className="w-12 h-12 rounded-full mb-5 flex items-center justify-center bg-gradient-to-br bg-opacity-10">
                  <div className={`bg-gradient-to-r ${service.color} p-3 rounded-full`}>
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
