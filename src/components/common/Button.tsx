import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'dark' | 'light' | 'outline' | 'text';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  children: ReactNode;
}

export function Button({
  variant = 'dark',
  size = 'md',
  fullWidth = false,
  className = '',
  ...props
}: ButtonProps) {
  const variantClass = `button ${variant}`;
  const sizeClass = size === 'sm' ? 'sm' : size === 'lg' ? 'lg' : '';
  const widthClass = fullWidth ? 'full' : '';

  return (
    <button
      className={`${variantClass} ${sizeClass} ${widthClass} ${className}`.trim()}
      {...props}
    />
  );
}
