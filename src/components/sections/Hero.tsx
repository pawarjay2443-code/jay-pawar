"use client";

import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { ArrowRight, Mail, User2 } from "lucide-react";
import { MagneticButton } from "../ui/MagneticButton";

export function Hero() {
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-20">
      <div className="container mx-auto px-6 relative z-10 flex flex-col-reverse lg:flex-row items-center justify-between gap-16">
        
        {/* Left Content */}
        <div className="flex-1 max-w-2xl text-center lg:text-left mt-10 lg:mt-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-neutral-500 font-medium tracking-wider text-sm mb-4 uppercase">
              Jay Pawar
            </h2>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-black mb-6 leading-tight h-[100px] md:h-[150px] flex flex-col md:block">
              <span className="block mb-2 md:inline md:mr-4">I am a</span>
              <span className="text-neutral-400 block md:inline whitespace-nowrap">
                <Typewriter
                  options={{
                    strings: [
                      "Full Stack Developer.",
                      "AI Developer.",
                      "Graphic Designer.",
                    ],
                    autoStart: true,
                    loop: true,
                    delay: 50,
                    deleteSpeed: 30,
                  }}
                />
              </span>
            </h1>
            <p className="text-lg md:text-xl text-neutral-600 mb-10 max-w-xl leading-relaxed mx-auto lg:mx-0">
              Blending premium visual design with advanced artificial intelligence engineering to build world-class digital products.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <MagneticButton 
                variant="primary" 
                size="lg" 
                onClick={() => handleScrollTo("projects")}
              >
                View Projects
                <ArrowRight className="w-4 h-4 ml-1" />
              </MagneticButton>
              
              <MagneticButton 
                variant="outline" 
                size="lg"
                onClick={() => handleScrollTo("contact")}
              >
                Contact Me
                <Mail className="w-4 h-4 ml-1" />
              </MagneticButton>
            </div>
          </motion.div>
        </div>

        {/* Right Content - Photo / Silhouette */}
        <div className="flex-1 relative w-full max-w-md mx-auto lg:max-w-none flex justify-center lg:justify-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative w-72 h-72 sm:w-96 sm:h-96 rounded-full overflow-hidden border-8 border-white shadow-[0_20px_60px_rgba(0,0,0,0.08)] bg-neutral-100 flex items-center justify-center group"
          >
            {/* Fallback Silhouette Icon. In production, place `profile.png` in /public and use <Image> */}
            <User2 className="w-32 h-32 text-neutral-300 transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute bottom-6 px-4 py-1.5 bg-black/80 backdrop-blur-md rounded-full">
              <span className="text-white text-xs font-medium tracking-widest uppercase">Insert profile.png</span>
            </div>
          </motion.div>
        </div>
        
      </div>
    </section>
  );
}
