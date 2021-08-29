import React from "react";

type Radius = "rounded" | "full" | "none";
type Variant = "contained" | "outline";
type Position = "start" | "end";
type Size = "sm" | "md" | "lg";

export interface ButtonProps {
  variant?: Variant;
  radius?: Radius;
  children?: React.ReactNode;
  as?: any;
  icon?: React.ReactNode;
  iconPosition?: Position;
  size?: Size;
}
