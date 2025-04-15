
import { ArrowRight, PhoneCall, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-white pt-20">
      {/* Background gradient */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-voicenova-purple-light/30 rounded-full filter blur-3xl opacity-70 animate-pulse" />
      <div className="absolute top-0 -right-4 w-72 h-72 bg-voicenova-blue-light/30 rounded-full filter blur-3xl opacity-70 animate-pulse" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Hero content */}
          <div className="z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="bg-gradient-to-r from-voicenova-purple to-voicenova-blue bg-clip-text text-transparent">
                AI-Powered Calls
              </span>{" "}
              That Get Things Done
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              Employ the world's most advanced phone AI that doesn't just talk, 
              but also gets things done your way. Let VoiceNova handle your 
              entire phone line with intelligence and efficiency.
            </p>
            
            {/* Benefits list */}
            <div className="space-y-3 mb-8">
              {[
                "Save time with AI call handling",
                "Never miss an important call again",
                "Automated scheduling and customer service",
                "Personalized call experiences"
              ].map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-voicenova-purple mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
            
            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button size="lg" className="bg-voicenova-purple hover:bg-voicenova-purple-light text-white">
                Request Demo <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-voicenova-purple text-voicenova-purple hover:bg-voicenova-purple/10"
              >
                <PhoneCall className="mr-2 h-4 w-4" /> Schedule a Call
              </Button>
            </div>
          </div>
          
          {/* Hero image */}
          <div className="relative hidden lg:block z-10">
            <div className="w-full h-[450px] rounded-lg bg-gradient-to-br from-voicenova-purple-light to-voicenova-blue-light p-1">
              <div className="w-full h-full rounded-lg bg-white/95 flex items-center justify-center">
                <div className="text-center p-6">
                  <PhoneCall className="h-16 w-16 text-voicenova-purple mx-auto mb-4" />
                  <div className="flex items-center justify-center space-x-2 animate-pulse mb-4">
                    {[0, 1, 2].map((i) => (
                      <div key={i} className="w-3 h-3 bg-voicenova-purple rounded-full" />
                    ))}
                  </div>
                  <p className="text-lg font-semibold text-gray-800 mb-2">
                    "Hello, I'm VoiceNova AI."
                  </p>
                  <p className="text-gray-600">
                    I can handle your calls, schedule appointments, answer questions,
                    and perform tasks just like a human assistant would.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-20 h-20 bg-voicenova-blue/20 rounded-full" />
            <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-voicenova-purple/20 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
