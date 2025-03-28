import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  // Supported variants: primary (default), secondary, outline, danger
  variant?: "primary" | "secondary" | "outline" | "danger";
}

const variantClasses: Record<string, string> = {
  primary:
    "bg-soft-blue text-white hover:bg-soft-blue/50 active:bg-soft-blue/50 active:ring-2 focus:ring-2  active:ring-soft-blue/50 focus:ring-soft-blue/50",
  secondary:
    "bg-white text-grayish-blue active:bg-gray-100 hover:bg-gray-100 active:ring-2 focus:ring-2 active:ring-gray-100 focus:ring-gray-100",
  outline:
    "border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white focus:ring-2 focus:ring-blue-300",
  danger:
    "bg-soft-red text-white hover:bg-soft-red/50 active:bg-soft-red/50 active:ring-2 active:ring-soft-red/50 focus:ring-2 focus:ring-soft-red/50",
};

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  className = "",
  children,
  ...rest
}) => {
  const baseClasses =
    "px-4 py-2 rounded-md font-medium focus:outline-none transition-colors";
  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  return (
    <button type="button" className={classes} {...rest}>
      {children}
    </button>
  );
};

export default Button;
