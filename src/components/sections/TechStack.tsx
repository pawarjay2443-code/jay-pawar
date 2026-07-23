"use client";

import { motion } from "framer-motion";

const skills = [
  {
    category: "Frontend",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "HTML", "CSS", "JavaScript"],
  },
  {
    category: "Backend & Database",
    items: ["Node.js", "PostgreSQL", "Supabase", "Firebase"],
  },
  {
    category: "Artificial Intelligence",
    items: ["Google Gemini API", "OpenAI API", "Agentic Workflows"],
  },
  {
    category: "Graphic & UI/UX Design",
    items: ["Figma", "CorelDRAW", "Photoshop", "Illustrator", "Canva", "Brand Identity", "Logo Design"],
  },
  {
    category: "Tools & Deployment",
    items: ["Git", "GitHub", "Vercel", "Firebase Hosting", "REST APIs"],
  },
];

export function TechStack() {
  return (
    <section id="tech-stack" className="py-24 bg-background relative border-t border-black/5">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4 tracking-tight">Engineering & Design Arsenal.</h2>
          <p className="text-neutral-500 text-lg max-w-2xl mx-auto">
            A comprehensive suite of modern technologies and design tools I leverage to build scalable, premium digital products.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-2xl border border-black/5 bg-neutral-50/50 hover:bg-neutral-100 transition-colors shadow-sm"
            >
              <h3 className="text-sm font-semibold text-black mb-6 uppercase tracking-widest">
                {skillGroup.category}
              </h3>
              <ul className="space-y-3">
                {skillGroup.items.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-black/20" />
                    <span className="text-neutral-600 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
