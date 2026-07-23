"use client";

import { motion } from "framer-motion";

export function Journey() {
  return (
    <section id="about" className="py-32 bg-background border-t border-black/5">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center md:text-left"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-8 tracking-tight">About.</h2>
          <p className="text-neutral-600 text-lg md:text-xl leading-relaxed max-w-3xl font-medium">
            I started my journey with Graphic Design, mastering branding, typography, and digital aesthetics. 
            As my interest in technology grew, I transitioned into Web Development where I learned React, Next.js, and modern cloud architecture. 
            Today, I engineer intelligent, AI-powered full stack applications with a relentless focus on clean UI, performance, and exceptional user experiences.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
