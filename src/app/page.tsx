import { Hero } from "@/components/sections/Hero";
import { Journey } from "@/components/sections/Journey";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { DesignGallery } from "@/components/sections/DesignGallery";
import { Github } from "@/components/sections/Github";
import { Uses } from "@/components/sections/Uses";
import { ContactForm } from "@/components/sections/ContactForm";

export default function Home() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      <Hero />
      <Journey />
      <FeaturedProjects />
      <DesignGallery />
      <Github />
      <Uses />
      <ContactForm />
    </div>
  );
}
