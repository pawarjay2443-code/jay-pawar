"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-32 bg-black relative border-t border-white/5 overflow-hidden">
      {/* Subtle Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/[0.02] rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center justify-center p-4 rounded-full bg-white/5 border border-white/10 mb-8">
            <Mail className="w-6 h-6 text-white" />
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Let's build something <br /> <span className="text-neutral-500">extraordinary.</span>
          </h2>
          
          <p className="text-neutral-400 text-xl max-w-2xl mx-auto mb-12">
            Whether you have a revolutionary idea, require advanced AI integration, or need a premium web application, I am ready to turn your vision into reality.
          </p>

          <a
            href="mailto:hello@jaypawar.com" // Update to actual email if needed
            className="group relative inline-flex items-center justify-center px-10 py-4 text-base font-medium text-black bg-white rounded-full overflow-hidden transition-transform hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(255,255,255,0.1)]"
          >
            <span className="relative z-10 flex items-center gap-2">
              Get in Touch
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
