"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Projects", id: "projects" },
  { name: "Designs", id: "designs" },
  { name: "GitHub", id: "github" },
  { name: "Uses", id: "uses" },
  { name: "Contact", id: "contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px", // Adjust these values to trigger highlight at correct scroll point
      threshold: 0,
    };

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    navLinks.forEach((link) => {
      const element = document.getElementById(link.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      // If lenis is active, standard window.scrollTo or element.scrollIntoView works 
      // but native scrollIntoView is smoothed by Lenis.
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-4 md:px-12",
        isScrolled ? "bg-white/80 backdrop-blur-md border-b border-black/5 py-4 shadow-sm" : "bg-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a 
          href="#home" 
          onClick={(e) => handleScrollTo(e, "home")}
          className="relative group z-50" 
          aria-label="Home"
        >
          <span className="text-lg font-semibold tracking-tight text-black">
            Jay Pawar.
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-2 bg-black/5 px-4 py-1.5 rounded-full border border-black/5 backdrop-blur-md">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => handleScrollTo(e, link.id)}
              className={cn(
                "relative px-3 py-1.5 text-sm font-medium transition-colors rounded-full",
                activeSection === link.id ? "text-black" : "text-neutral-500 hover:text-black"
              )}
            >
              {link.name}
              {activeSection === link.id && (
                <motion.div
                  layoutId="active-nav"
                  className="absolute inset-0 bg-white rounded-full shadow-sm -z-10"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </a>
          ))}
        </nav>

        {/* Mobile Nav (Scrollable row) */}
        <nav className="flex lg:hidden overflow-x-auto absolute top-16 left-0 w-full px-4 pb-4 gap-2 no-scrollbar bg-white/80 backdrop-blur-md border-b border-black/5 opacity-0 pointer-events-none transition-opacity" 
             style={isScrolled ? { opacity: 1, pointerEvents: 'auto' } : {}}>
             {/* Note: In a real app we'd build a hamburger menu, but for single-page scrolling navs, a swipeable header row is very modern. 
                 To keep it simple, we'll just show it below the header on mobile when scrolled. */}
             {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => handleScrollTo(e, link.id)}
                  className={cn(
                    "shrink-0 px-3 py-1 text-xs font-medium rounded-full border border-black/5 transition-colors",
                    activeSection === link.id ? "bg-black text-white" : "bg-white text-neutral-600"
                  )}
                >
                  {link.name}
                </a>
             ))}
        </nav>

        <div className="flex items-center gap-4">
          <a 
            href="#contact" 
            onClick={(e) => handleScrollTo(e, "contact")}
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-black rounded-full hover:bg-neutral-800 transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </motion.header>
  );
};
