"use client";

import { motion } from "framer-motion";
import { MonitorPlay, Code2, Sparkles, PenTool } from "lucide-react";

export function Uses() {
  const categories = [
    {
      title: "Development",
      icon: Code2,
      tools: ["VS Code", "Git", "GitHub", "Next.js", "React", "TypeScript", "Tailwind CSS", "Firebase", "Supabase", "Vercel"],
    },
    {
      title: "AI",
      icon: Sparkles,
      tools: ["Gemini", "ChatGPT", "Claude", "Cursor"],
    },
    {
      title: "Design",
      icon: PenTool,
      tools: ["Canva", "Adobe Photoshop", "Adobe Illustrator", "CorelDRAW"],
    },
    {
      title: "Productivity",
      icon: MonitorPlay,
      tools: ["Notion", "Google Drive", "Chrome", "Figma (Learning)"],
    },
  ];

  return (
    <section id="uses" className="py-32 bg-background relative border-t border-black/5">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4 tracking-tight">Uses.</h2>
          <p className="text-neutral-500 text-lg max-w-2xl mx-auto">
            The software, tools, and platforms I use daily to design, build, and deploy premium digital products.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-6 rounded-2xl border border-black/5 bg-neutral-50 hover:bg-white hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:border-black/10 transition-all"
            >
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-black/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <category.icon className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-lg font-semibold text-black mb-4">{category.title}</h3>
              <ul className="space-y-2">
                {category.tools.map((tool) => (
                  <li key={tool} className="text-neutral-500 font-medium text-sm flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-neutral-300" />
                    {tool}
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
