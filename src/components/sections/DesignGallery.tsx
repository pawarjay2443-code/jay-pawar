"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Image as ImageIcon } from "lucide-react";

// Placeholder data since no images were uploaded yet.
// When you upload images to public/designs/, just update this array.
const designProjects = [
  {
    id: 1,
    title: "Minimalist Brand Identity",
    category: "Brand Identity",
    year: "2024",
    tools: ["Illustrator", "Photoshop"],
    description: "A complete brand identity design focusing on minimalism and typography for a modern tech startup.",
    imageUrl: "/designs/placeholder-1.jpg", 
  },
  {
    id: 2,
    title: "Gourmet Restaurant Menu",
    category: "Menu Cards",
    year: "2024",
    tools: ["CorelDRAW", "Canva"],
    description: "An elegant, premium menu design for a high-end restaurant, combining rich textures with clean serif typography.",
    imageUrl: "/designs/placeholder-2.jpg",
  },
  {
    id: 3,
    title: "AI Automation Poster",
    category: "Poster Design",
    year: "2025",
    tools: ["Photoshop", "Figma"],
    description: "A striking poster design promoting an AI automation workshop, utilizing futuristic themes and high-contrast colors.",
    imageUrl: "/designs/placeholder-3.jpg",
  },
  {
    id: 4,
    title: "Tech Startup Logo",
    category: "Logo Design",
    year: "2024",
    tools: ["Illustrator"],
    description: "A bold, scalable vector logo designed for a SaaS company, emphasizing connectivity and speed.",
    imageUrl: "/designs/placeholder-4.jpg",
  },
  {
    id: 5,
    title: "Social Media Campaign",
    category: "Social Media",
    year: "2025",
    tools: ["Figma", "Canva"],
    description: "A cohesive set of social media templates designed for high engagement and brand consistency.",
    imageUrl: "/designs/placeholder-5.jpg",
  },
  {
    id: 6,
    title: "AI Assisted Artwork",
    category: "AI Assisted Designs",
    year: "2026",
    tools: ["Midjourney", "Photoshop"],
    description: "Conceptual artwork blending AI generation with manual retouching for a surreal digital experience.",
    imageUrl: "/designs/placeholder-6.jpg",
  }
];

const categories = ["All", ...new Set(designProjects.map(p => p.category))];

export function DesignGallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<typeof designProjects[0] | null>(null);

  const filteredProjects = activeCategory === "All" 
    ? designProjects 
    : designProjects.filter(p => p.category === activeCategory);

  return (
    <section id="designs" className="py-24 bg-background relative min-h-screen">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center md:text-left"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-black mb-6 tracking-tight">Design Gallery.</h1>
          <p className="text-neutral-500 text-lg max-w-2xl">
            A showcase of my graphic design work, encompassing branding, print media, and digital art.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category 
                  ? "bg-black text-white" 
                  : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group relative aspect-square rounded-2xl overflow-hidden bg-neutral-100 cursor-pointer border border-black/5"
              >
                {/* Fallback visual if no image */}
                <div className="absolute inset-0 flex items-center justify-center text-neutral-300 transition-transform duration-700 group-hover:scale-105">
                   <ImageIcon className="w-16 h-16 opacity-20" />
                   <span className="absolute bottom-4 left-4 text-xs font-bold uppercase tracking-widest text-neutral-400">Placeholder Image</span>
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 z-10">
                  <span className="text-white/70 text-xs font-medium uppercase tracking-wider mb-1">{project.category}</span>
                  <h3 className="text-white text-xl font-semibold">{project.title}</h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 md:p-10"
            onClick={() => setSelectedProject(null)}
          >
            <button 
              className="absolute top-6 right-6 p-2 bg-white/10 rounded-full text-white hover:bg-white/20 transition-colors"
              onClick={() => setSelectedProject(null)}
            >
              <X className="w-6 h-6" />
            </button>

            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              className="flex flex-col lg:flex-row max-w-7xl w-full max-h-full bg-neutral-900 rounded-2xl overflow-hidden border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image Area */}
              <div className="w-full lg:w-2/3 bg-black aspect-video lg:aspect-auto flex items-center justify-center relative">
                <ImageIcon className="w-24 h-24 text-white/10" />
                <span className="absolute bottom-6 text-sm text-white/30 uppercase tracking-widest">Image preview placeholder</span>
              </div>
              
              {/* Details Area */}
              <div className="w-full lg:w-1/3 p-8 lg:p-12 flex flex-col justify-center bg-neutral-950">
                <div className="flex justify-between items-start mb-4">
                  <span className="px-3 py-1 bg-white/10 text-white text-xs font-medium rounded-full uppercase tracking-wider">
                    {selectedProject.category}
                  </span>
                  <span className="text-neutral-500 font-medium">{selectedProject.year}</span>
                </div>
                
                <h2 className="text-3xl font-bold text-white mb-6">{selectedProject.title}</h2>
                <p className="text-neutral-400 text-base leading-relaxed mb-8">
                  {selectedProject.description}
                </p>
                
                <div>
                  <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-3">Tools Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tools.map(tool => (
                      <span key={tool} className="px-3 py-1 border border-white/10 text-neutral-300 text-sm rounded-md">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
