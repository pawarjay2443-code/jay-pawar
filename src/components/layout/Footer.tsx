import Link from "next/link";

const GithubIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 bg-background border-t border-black/5">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="flex items-center gap-2 text-sm font-semibold text-black tracking-tight">
            <span>&copy; {currentYear} Jay Pawar.</span>
          </div>

          <div className="text-xs font-medium text-neutral-400">
            Built with Next.js + Tailwind + Framer Motion
          </div>
          
          <div className="flex items-center gap-6">
            <span className="text-sm font-medium text-neutral-400">
              pawarjay2443@gmail.com
            </span>
            <a href="https://github.com/pawarjay2443-code" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-black transition-colors" aria-label="GitHub">
              <GithubIcon className="w-5 h-5" />
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}
