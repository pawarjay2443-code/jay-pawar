"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Image as ImageIcon } from "lucide-react";
import Image from "next/image";

// Placeholder data since no images were uploaded yet.
const designProjects = [
  {
    id: 1,
    title: "Brand Identity",
    category: "Brand Identity",
    year: "2024",
    tools: ["Illustrator", "Photoshop"],
    description: "A complete brand identity design focusing on minimalism and typography for a modern tech startup.",
    imageUrl: "/design/branding/branding.png", 
  },
  {
    id: 2,
    title: "Gourmet Restaurant Menu",
    category: "Menu Cards",
    year: "2024",
    tools: ["CorelDRAW", "Canva"],
    description: "An elegant, premium menu design for a high-end restaurant, combining rich textures with clean serif typography.",
    imageUrl: "/design/menu/menu1.png",
  },
  {
    id: 3,
    title: "Cafe Menu Layout",
    category: "Menu Cards",
    year: "2024",
    tools: ["Photoshop", "Illustrator"],
    description: "A beautiful and structured menu layout designed to highlight signature dishes.",
    imageUrl: "/design/menu/menu2.png",
  },
  {
    id: 4,
    title: "Jay Graphic Design Logo",
    category: "Logo Design",
    year: "2024",
    tools: ["Illustrator"],
    description: "A bold, scalable vector logo designed for a SaaS company, emphasizing connectivity and speed.",
    imageUrl: "/design/logos/jay-graphic-design.png",
  },
  {
    id: 5,
    title: "Scalerix Logo",
    category: "Logo Design",
    year: "2025",
    tools: ["Illustrator", "Figma"],
    description: "A modern startup logo emphasizing growth and scalability.",
    imageUrl: "/design/logos/scalerix.png",
  },
  {
    id: 6,
    title: "Social Media Campaign",
    category: "Social Media",
    year: "2025",
    tools: ["Figma", "Canva"],
    description: "A cohesive set of social media templates designed for high engagement and brand consistency.",
    imageUrl: "/design/social/social.png",
  }
];

const categories = ["All", ...new Set(designProjects.map(p => p.category))];

export function DesignGallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const filteredProjects = activeCategory === "All" 
    ? designProjects 
    : designProjects.filter(p => p.category === activeCategory);

  const openLightbox = (index: number) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);

  const goToPrev = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev === 0 ? filteredProjects.length - 1 : (prev as number) - 1));
  }, [selectedIndex, filteredProjects.length]);

  const goToNext = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev === filteredProjects.length - 1 ? 0 : (prev as number) + 1));
  }, [selectedIndex, filteredProjects.length]);

  // Handle Keyboard Navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") goToPrev();
      if (e.key === "ArrowRight") goToNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, goToPrev, goToNext]);

  return (
    <section id="designs" className="py-24 bg-background relative min-h-screen">
      <div className="container mx-auto px-6 lg:px-12">
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
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-colors ${
                activeCategory === category 
                  ? "bg-black text-white" 
                  : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Uniform Gallery Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, index) => {
              const isLogo = project.category === "Logo Design";
              const isMenu = project.category === "Menu Cards";

              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                  key={project.id}
                  onClick={() => openLightbox(index)}
                  className="group relative rounded-3xl bg-neutral-100 aspect-square border border-black/5 p-6 lg:p-8 shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer w-full hover:scale-[1.03]"
                >
                  {/* Subtle top gradient overlay matching Lalit card */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent z-10 pointer-events-none rounded-3xl" />
                  
                  {/* Inner White Container */}
                  <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-lg border border-black/10 bg-white group-hover:shadow-2xl transition-all duration-500 flex items-center justify-center p-4">
                    
                    {isLogo ? (
                       <div className="relative w-[60%] h-[60%]">
                         <Image 
                           src={project.imageUrl} 
                           alt={project.title} 
                           fill 
                           className="object-contain transition-transform duration-700 group-hover:scale-110" 
                         />
                       </div>
                    ) : (
                       <div className={`relative w-full h-full flex items-center justify-center ${isMenu ? '[clip-path:inset(1.5%)] scale-[1.02]' : ''}`}>
                         <Image 
                           src={project.imageUrl} 
                           alt={project.title} 
                           fill
                           className="object-contain transition-transform duration-700 group-hover:scale-105" 
                         />
                       </div>
                    )}

                    {/* Dark Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 z-20 pointer-events-none rounded-2xl">
                      <span className="text-white/80 text-xs font-semibold uppercase tracking-widest mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                        {project.category}
                      </span>
                      <h3 className="text-white text-xl md:text-2xl font-bold tracking-tight transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Fullscreen Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-2xl p-4 md:p-10"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button 
              className="absolute top-6 right-6 p-3 bg-white/10 rounded-full text-white hover:bg-white/20 transition-colors z-50"
              onClick={closeLightbox}
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation Buttons */}
            {filteredProjects.length > 1 && (
              <>
                <button 
                  className="absolute left-6 top-1/2 -translate-y-1/2 p-4 bg-white/10 rounded-full text-white hover:bg-white/20 transition-colors z-50 hidden md:block"
                  onClick={(e) => { e.stopPropagation(); goToPrev(); }}
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button 
                  className="absolute right-6 top-1/2 -translate-y-1/2 p-4 bg-white/10 rounded-full text-white hover:bg-white/20 transition-colors z-50 hidden md:block"
                  onClick={(e) => { e.stopPropagation(); goToNext(); }}
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}

            <motion.div 
              key={selectedIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
              className="flex flex-col lg:flex-row max-w-[90vw] max-h-[90vh] bg-neutral-900 rounded-[32px] overflow-hidden border border-white/10 shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image Area */}
              <div className="w-full lg:max-w-4xl bg-[#0a0a0a] flex items-center justify-center relative overflow-y-auto overflow-x-hidden p-0">
                <Image 
                  src={filteredProjects[selectedIndex].imageUrl} 
                  alt={filteredProjects[selectedIndex].title} 
                  width={1600}
                  height={1600}
                  className={`w-full h-auto object-contain ${filteredProjects[selectedIndex].category === 'Logo Design' ? 'max-w-[70%] p-10' : ''}`} 
                />
              </div>
              
              {/* Details Area */}
              <div className="w-full lg:w-96 p-8 lg:p-12 flex flex-col justify-center bg-neutral-950 shrink-0 border-l border-white/5">
                <div className="flex justify-between items-start mb-6">
                  <span className="px-4 py-1.5 bg-white/10 text-white text-xs font-semibold rounded-full uppercase tracking-widest">
                    {filteredProjects[selectedIndex].category}
                  </span>
                  <span className="text-neutral-500 font-medium">{filteredProjects[selectedIndex].year}</span>
                </div>
                
                <h2 className="text-3xl font-bold text-white mb-6 leading-tight">{filteredProjects[selectedIndex].title}</h2>
                <p className="text-neutral-400 text-base leading-relaxed mb-8">
                  {filteredProjects[selectedIndex].description}
                </p>
                
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-4">Tools Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {filteredProjects[selectedIndex].tools.map(tool => (
                      <span key={tool} className="px-3 py-1.5 bg-white/5 border border-white/10 text-neutral-300 text-xs font-medium rounded-lg">
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
