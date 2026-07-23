import { cn } from "@/lib/utils";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hoverEffect?: boolean;
}

export const GlassCard = ({ children, className, hoverEffect = true, ...props }: GlassCardProps) => {
  return (
    <div
      className={cn(
        "glass-card rounded-2xl p-8 transition-all duration-300 border border-white/5 bg-white/[0.02]",
        hoverEffect && "hover:border-white/10 hover:-translate-y-1 hover:bg-white/[0.04]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
