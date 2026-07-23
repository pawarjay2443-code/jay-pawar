"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Star, GitFork, BookOpen, CircleDot, Activity } from "lucide-react";
import { MagneticButton } from "../ui/MagneticButton";

const GithubIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

interface Repository {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
}

interface GithubProfile {
  public_repos: number;
  followers: number;
  avatar_url: string;
  html_url: string;
}

export function Github() {
  const [repos, setRepos] = useState<Repository[]>([]);
  const [profile, setProfile] = useState<GithubProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const [reposRes, profileRes] = await Promise.all([
          fetch("https://api.github.com/users/pawarjay2443-code/repos?sort=updated&per_page=4"),
          fetch("https://api.github.com/users/pawarjay2443-code")
        ]);
        
        if (reposRes.ok && profileRes.ok) {
          setRepos(await reposRes.json());
          setProfile(await profileRes.json());
        }
      } catch (error) {
        console.error("Error fetching github data:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <section id="github" className="py-32 bg-neutral-50 relative border-t border-black/5">
      <div className="container mx-auto px-6 max-w-5xl">
        
        {/* Header / Profile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-black/5 pb-12"
        >
          <div className="flex items-center gap-6">
            <div className="w-24 h-24 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-black/5 overflow-hidden">
              {profile?.avatar_url ? (
                <img src={profile.avatar_url} alt="GitHub Avatar" className="w-full h-full object-cover" />
              ) : (
                <GithubIcon className="w-12 h-12 text-black" />
              )}
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-black tracking-tight mb-2">Developer Dashboard</h2>
              <div className="flex items-center gap-4 text-sm font-medium text-neutral-500">
                <a href="https://github.com/pawarjay2443-code" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">
                  @pawarjay2443-code
                </a>
                {profile && (
                  <>
                    <span className="w-1 h-1 rounded-full bg-neutral-300" />
                    <span>{profile.public_repos} Public Repos</span>
                  </>
                )}
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <a href="https://github.com/pawarjay2443-code" target="_blank" rel="noopener noreferrer" className="block">
              <MagneticButton variant="primary" size="md">
                Follow on GitHub
              </MagneticButton>
            </a>
            <a href="https://github.com/pawarjay2443-code" target="_blank" rel="noopener noreferrer" className="block hidden sm:block">
              <MagneticButton variant="outline" size="icon">
                <Activity className="w-5 h-5 text-black" />
              </MagneticButton>
            </a>
          </div>
        </motion.div>

        {/* Repositories */}
        <div>
          <h3 className="text-xl font-semibold text-black mb-8 flex items-center gap-3">
            <Activity className="w-5 h-5 text-neutral-400" />
            Latest Activity
          </h3>
          
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-40 rounded-xl bg-neutral-200/50 animate-pulse border border-black/5" />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {repos.map((repo, index) => (
                <motion.div
                  key={repo.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="group p-8 rounded-2xl border border-black/5 bg-white hover:border-black/10 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-2 rounded-lg bg-neutral-50 border border-black/5 shrink-0">
                        <BookOpen className="w-5 h-5 text-black" />
                      </div>
                      <div className="flex-1 mt-1">
                        <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-black hover:text-[#0969da] transition-colors line-clamp-1">
                          {repo.name}
                        </a>
                      </div>
                    </div>
                    <p className="text-neutral-500 text-sm mb-8 line-clamp-2 leading-relaxed">
                      {repo.description || "No description provided."}
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-6 text-xs font-semibold text-neutral-400">
                    {repo.language && (
                      <span className="flex items-center gap-1.5 text-black">
                        <CircleDot className="w-3 h-3 text-[#0969da]" fill="currentColor" />
                        {repo.language}
                      </span>
                    )}
                    {repo.stargazers_count > 0 && (
                      <span className="flex items-center gap-1 hover:text-[#0969da] transition-colors cursor-pointer">
                        <Star className="w-4 h-4" />
                        {repo.stargazers_count}
                      </span>
                    )}
                    {repo.forks_count > 0 && (
                      <span className="flex items-center gap-1 hover:text-[#0969da] transition-colors cursor-pointer">
                        <GitFork className="w-4 h-4" />
                        {repo.forks_count}
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
