"use client";

import { motion } from "framer-motion";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { MagneticButton } from "../ui/MagneticButton";
import Image from "next/image";

const GithubIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const projects = [
  {
    title: "Lalit Publication",
    category: "Production Web Platform",
    overview: "A modern, highly scalable Marathi Publication website handling real-world traffic with a robust backend architecture.",
    tech: ["Next.js", "Firebase", "Firestore", "Tailwind CSS", "React"],
    link: "https://lalit-publication.web.app/",
    github: "https://github.com/pawarjay2443-code",
    featured: true,
    image: "/projects/lalitpublication.png"
  },
  {
    title: "Aqua Vision",
    category: "Live Web Application",
    overview: "A sleek, responsive digital experience designed with premium aesthetics and modern web technologies.",
    tech: ["React", "Tailwind CSS", "Framer Motion", "Vercel"],
    link: "https://aqua-viision.vercel.app/",
    github: "https://github.com/pawarjay2443-code",
    featured: false,
    image: "/projects/aqua-viision.png"
  }
];

export function FeaturedProjects() {
  return (
    <section id="projects" className="py-32 bg-background relative border-t border-black/5">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24 text-center md:text-left"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 tracking-tight">Featured Projects.</h2>
          <p className="text-neutral-500 text-lg max-w-2xl">
            A curated selection of my most significant engineering achievements.
          </p>
        </motion.div>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="group"
            >
              <div className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-24 items-center`}>
                
                {/* Project Visual */}
                <div className="w-full lg:w-[55%] relative rounded-3xl bg-neutral-100 aspect-video border border-black/5 p-4 lg:p-6 shadow-sm group-hover:shadow-xl transition-shadow duration-500 flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent z-10 pointer-events-none rounded-3xl" />
                  
                  <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-lg border border-black/10 bg-white group-hover:shadow-2xl transition-shadow duration-500 flex items-center justify-center">
                    {project.image ? (
                      <Image 
                        src={project.image} 
                        alt={project.title} 
                        fill 
                        className={`transition-transform duration-700 group-hover:scale-[1.02] ${project.title === 'Aqua Vision' ? 'object-contain' : 'object-cover object-top'}`}
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center text-neutral-300 transition-transform duration-700 group-hover:scale-[1.02] p-8 text-center bg-neutral-50">
                        <span className="text-2xl font-bold tracking-widest uppercase opacity-30 mb-2">{project.title}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Project Details */}
                <div className="w-full lg:w-[45%] flex flex-col justify-center">
                  <p className="text-neutral-400 text-xs font-bold tracking-widest uppercase mb-4">
                    {project.category}
                  </p>
                  <h3 className="font-bold text-black mb-6 tracking-tight text-4xl lg:text-5xl">
                    {project.title}
                  </h3>
                  
                  <p className="text-neutral-600 text-lg leading-relaxed mb-10">
                    {project.overview}
                  </p>
                  
                  <div className="mb-12">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map(t => (
                        <span key={t} className="px-4 py-2 rounded-full text-xs font-medium bg-neutral-100 text-neutral-700">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="block">
                      <MagneticButton variant="primary" size="md">
                        Live Demo
                        <ArrowUpRight className="w-4 h-4 ml-1.5" />
                      </MagneticButton>
                    </a>
                    
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="block">
                      <MagneticButton variant="outline" size="md">
                        <GithubIcon className="w-4 h-4 mr-2" />
                        GitHub
                      </MagneticButton>
                    </a>
                  </div>
                </div>
                
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

