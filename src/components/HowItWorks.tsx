
import { 
  PhoneIncoming, 
  BrainCircuit, 
  CalendarCheck, 
  MessageSquare, 
  ArrowRight 
} from "lucide-react";

const steps = [
  {
    icon: PhoneIncoming,
    title: "Call Received",
    description: "Incoming calls are instantly answered by VoiceNova AI 24/7, without delays or hold times.",
    color: "bg-voicenova-purple"
  },
  {
    icon: BrainCircuit,
    title: "AI Processing",
    description: "Our advanced AI understands natural language, context, and caller intent with remarkable accuracy.",
    color: "bg-voicenova-blue"
  },
  {
    icon: MessageSquare,
    title: "Intelligent Response",
    description: "The AI provides helpful, personalized responses that sound completely natural and human-like.",
    color: "bg-voicenova-purple"
  },
  {
    icon: CalendarCheck,
    title: "Task Execution",
    description: "VoiceNova completes requested tasks like scheduling, information gathering, or service delivery.",
    color: "bg-voicenova-blue"
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How VoiceNova Works
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Our seamless process transforms every incoming call into an efficient, 
            productive interaction - without any human intervention needed.
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Connection line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -translate-y-1/2 z-0"></div>
            
            {/* Steps */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="relative z-10 flex flex-col items-center text-center">
                  {/* Step number with icon */}
                  <div className={`${step.color} w-16 h-16 rounded-full flex items-center justify-center mb-4 shadow-lg`}>
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  {/* Step number */}
                  <div className="absolute top-0 right-0 transform translate-x-1/3 -translate-y-1/3 bg-voicenova-gray-light text-voicenova-purple font-bold w-6 h-6 rounded-full flex items-center justify-center text-sm border border-voicenova-purple">
                    {index + 1}
                  </div>
                  
                  {/* Arrow for mobile */}
                  {index < steps.length - 1 && (
                    <div className="md:hidden flex justify-center my-4">
                      <ArrowRight className="h-6 w-6 text-gray-400" />
                    </div>
                  )}
                  
                  {/* Step content */}
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
