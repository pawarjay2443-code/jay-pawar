"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import { fadeUp } from "@/lib/animations";

interface SectionProps extends HTMLMotionProps<"section"> {
  children: React.ReactNode;
  id?: string;
  animate?: boolean;
}

export const Section = ({
  children,
  className,
  id,
  animate = true,
  ...props
}: SectionProps) => {
  if (!animate) {
    return (
      <motion.section id={id} className={cn("py-24 md:py-32 relative", className)} {...props}>
        {children}
      </motion.section>
    );
  }

  return (
    <motion.section
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeUp}
      className={cn("py-24 md:py-32 relative", className)}
      {...props}
    >
      {children}
    </motion.section>
  );
};
