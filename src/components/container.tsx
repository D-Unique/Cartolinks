import { ReactNode } from "react";
import clsx from "clsx"; // handy utility for conditional classes

interface ContainerProps {
  children: ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl" | "app"; 
  // sm = small content, md = medium marketing, lg = large, xl = extra wide, app = fixed 90rem
}

export default function Container({ 
  children, 
  className = "", 
  size = "app" 
}: ContainerProps) {
  const sizeClasses = {
  sm: "max-w-[90%] sm:max-w-[40rem]",   // mobile fluid, small content on sm screens
  md: "max-w-[90%] md:max-w-[64rem]",
  lg: "max-w-[90%] lg:max-w-[80rem]",
  xl: "max-w-[90%] xl:max-w-[120rem]",
  app: "max-w-[90%] xl:max-w-[90rem]",
};


  return (
    <div
      className={clsx(
        "w-full mx-auto px-6", 
        sizeClasses[size], 
        className
      )}
    >
      {children}
    </div>
  );
}
