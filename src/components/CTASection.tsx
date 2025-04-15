
import { ArrowRight, CalendarCheck, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-voicenova-purple to-voicenova-blue text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Transform Your Business Communication Today
          </h2>
          <p className="text-xl opacity-90 mb-10">
            Join thousands of businesses that trust VoiceNova to handle their calls with
            intelligence, efficiency, and a human touch.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <Button 
              size="lg" 
              className="bg-white text-voicenova-purple hover:bg-gray-100 transition-colors"
            >
              <PhoneCall className="mr-2 h-5 w-5" />
              Schedule a Demo
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white/10 transition-colors"
            >
              <CalendarCheck className="mr-2 h-5 w-5" />
              Start 14-Day Trial <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          
          <p className="mt-8 text-sm opacity-80">
            No credit card required. Cancel anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
