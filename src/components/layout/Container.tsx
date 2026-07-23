import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const Container = ({ children, className, ...props }: ContainerProps) => {
  return (
    <div
      className={cn(
        "w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
