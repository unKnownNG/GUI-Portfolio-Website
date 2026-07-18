import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  className?: string;
}

export const LeafOne: React.FC<IconProps> = ({ size = 24, className = "", ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`botanical-icon ${className}`}
    {...props}
  >
    {/* Main leaf outline - imperfect organic curve */}
    <path d="M2,22 C5,19 8,11 6,6 C9,4 15,3 19,6 C22,9 22,15 19,18 C15,21 9,21 2,22 Z" />
    {/* Center vein */}
    <path d="M4.5,19.5 C8,16.5 13,12.5 19,6" />
    {/* Side veins */}
    <path d="M9.5,15 C11.5,15.5 14,15 15.5,14" />
    <path d="M12.5,12 C14.5,12 16.5,11 17.5,9.5" />
    <path d="M7.5,17 C8.5,18 10,18.5 11,18.5" />
  </svg>
);

export const LeafTwo: React.FC<IconProps> = ({ size = 24, className = "", ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`botanical-icon ${className}`}
    {...props}
  >
    {/* Left Leaf */}
    <path d="M12,21 C10,18 5,17 4,12 C3,7 7,5 11,8 C12.5,9 12.5,11.5 12,21 Z" />
    <path d="M5.5,15 C8,13.5 10,12 11.5,9.5" />
    {/* Right Leaf */}
    <path d="M12,21 C14,18 19,17 20,12 C21,7 17,5 13,8 C11.5,9 11.5,11.5 12,21 Z" />
    <path d="M18.5,15 C16,13.5 14,12 12.5,9.5" />
  </svg>
);

export const BranchOne: React.FC<IconProps> = ({ size = 24, className = "", ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`botanical-icon ${className}`}
    {...props}
  >
    {/* Stem */}
    <path d="M3,21 C7,19 12,14 15,7 C16.5,3.5 18,2 18,2" />
    
    {/* Leaves along the branch */}
    {/* Leaf 1 (bottom left) */}
    <path d="M6,18 C4,16 4.5,13 6.5,12.5 C8.5,12 9.5,14 8,17 C7.5,18 7,18 6,18 Z" />
    {/* Leaf 2 (mid right) */}
    <path d="M11,15 C13,15.5 15.5,14.5 16,12.5 C16.5,10.5 14.5,9.5 12,11.5 C11,12.5 10.5,13.5 11,15 Z" />
    {/* Leaf 3 (mid left) */}
    <path d="M10,12 C8.5,10 9,7.5 11,7 C13,6.5 14,8.5 12.5,11 C11.5,12 11,12 10,12 Z" />
    {/* Leaf 4 (top right) */}
    <path d="M14.5,8 C16.5,8.5 18.5,7.5 19,5.5 C19.5,3.5 17.5,2.5 15.5,4.5 C14.5,5.5 14,6.5 14.5,8 Z" />
  </svg>
);

export const Sprout: React.FC<IconProps> = ({ size = 24, className = "", ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`botanical-icon ${className}`}
    {...props}
  >
    {/* Main stem */}
    <path d="M12,22 C12,18 11.5,12 9,8 C8,6.5 7,5 7,5" />
    {/* Left leaf */}
    <path d="M9,11 C7,10 4,10 3,7.5 C2,5 4.5,4 7,5.5 C8.5,6.5 9,8.5 9,11 Z" />
    {/* Right leaf branching off */}
    <path d="M11,13 C12.5,12 13.5,9.5 15,8 C17,6 20,6.5 21,9 C22,11.5 19.5,13.5 17,13 C15,12.5 13,12 11,13 Z" />
    {/* Soil line */}
    <path d="M4,22 C8,21.5 16,21.5 20,22" />
  </svg>
);

export const Flower: React.FC<IconProps> = ({ size = 24, className = "", ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`botanical-icon ${className}`}
    {...props}
  >
    {/* Stem */}
    <path d="M12,13 C12,16 11,20.5 9.5,23" />
    {/* Center seed */}
    <path d="M12,13 C13.1,13 14,12.1 14,11 C14,9.9 13.1,9 12,9 C10.9,9 10,9.9 10,11 C10,12.1 10.9,13 12,13 Z" />
    {/* Petal Top */}
    <path d="M12,9 C12.5,6 14.5,3 12,3 C9.5,3 11.5,6 12,9 Z" />
    {/* Petal Bottom */}
    <path d="M12,13 C11.5,16 9.5,19 12,19 C14.5,19 12.5,16 12,13 Z" />
    {/* Petal Right */}
    <path d="M14,11 C17,11.5 20,13.5 20,11 C20,8.5 17,10.5 14,11 Z" />
    {/* Petal Left */}
    <path d="M10,11 C7,10.5 4,8.5 4,11 C4,13.5 7,11.5 10,11 Z" />
    {/* Small leaf on stem */}
    <path d="M11,18 C12.5,18 14.5,17 15,16 C15.5,15 14,15.5 12.5,16 C11.5,16.5 11,17 11,18 Z" />
  </svg>
);

export const Seed: React.FC<IconProps> = ({ size = 24, className = "", ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    className={`botanical-icon ${className}`}
    {...props}
  >
    <path d="M6,16 C4.5,14 4.5,11 6.5,8 C8.5,5 12,3.5 15,3 C17.5,2.5 19.5,4 19.5,6.5 C19.5,9.5 18,13 15,15.5 C12,18 9,18 6,16 Z" />
    <path d="M9.5,11.5 C11.5,9.5 14,7.5 16.5,6" />
    <path d="M7,13 C8,12 9,11.5 9.5,11.5" />
  </svg>
);

export const OrganicSun: React.FC<IconProps> = ({ size = 24, className = "", ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    className={`botanical-icon ${className}`}
    {...props}
  >
    {/* Imperfect center sun circle */}
    <path d="M12,16 C14.2,16 16,14.2 16,12 C16,9.8 14.2,8 12,8 C9.8,8 8,9.8 8,12 C8,14.2 9.8,16 12,16 Z" />
    {/* Soft wavy/imperfect rays */}
    <path d="M12,3 C12,5 11.5,6 12,7" />
    <path d="M12,17 C12,19 12.5,20 12,21" />
    <path d="M3,12 C5,12 6,12.5 7,12" />
    <path d="M17,12 C19,12 20,11.5 21,12" />
    
    <path d="M5.5,5.5 C7,7 7.5,7 8,7.5" />
    <path d="M16,16.5 C17,17.5 17.5,17 18.5,18.5" />
    <path d="M18.5,5.5 C17,7 17,7.5 16.5,8" />
    <path d="M8,16.5 C7,17.5 7,17 5.5,18.5" />
  </svg>
);

interface BlobProps extends React.HTMLAttributes<HTMLDivElement> {
  color?: "sage" | "terracotta" | "earth" | "sand";
  animation?: "morph" | "morph-slow" | "none";
  opacity?: string;
  className?: string;
}

export const FluidBlob: React.FC<BlobProps> = ({
  color = "sage",
  animation = "morph",
  opacity = "opacity-20",
  className = "",
  children,
  ...props
}) => {
  const colorMap = {
    sage: "bg-sage-300 dark:bg-sage-600",
    terracotta: "bg-terracotta-300 dark:bg-terracotta-600",
    earth: "bg-earth-300 dark:bg-earth-500",
    sand: "bg-earth-100 dark:bg-earth-800",
  };

  const animMap = {
    morph: "animate-morph",
    "morph-slow": "animate-morph-slow",
    none: "",
  };

  return (
    <div
      className={`absolute filter blur-3xl pointer-events-none rounded-[50%] transition-all duration-1000 ${colorMap[color]} ${animMap[animation]} ${opacity} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
