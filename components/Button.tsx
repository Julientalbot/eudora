import React from 'react'
import Link from 'next/link'

interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'small' | 'medium' | 'large'
  href?: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  className?: string
  fullWidth?: boolean
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'medium',
  href,
  onClick,
  type = 'button',
  disabled = false,
  className = '',
  fullWidth = false,
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2'
  
  const variantStyles = {
    primary: 'bg-[#FF6B6B] text-white hover:bg-[#ff5252] focus:ring-[#FF6B6B] disabled:bg-gray-400',
    secondary: 'bg-[#4ECDC4] text-white hover:bg-[#3db8b0] focus:ring-[#4ECDC4] disabled:bg-gray-400',
    outline: 'border-2 border-[#4ECDC4] text-[#4ECDC4] hover:bg-[#4ECDC4] hover:text-white focus:ring-[#4ECDC4] disabled:border-gray-400 disabled:text-gray-400',
  }
  
  const sizeStyles = {
    small: 'px-4 py-2 text-sm',
    medium: 'px-6 py-3 text-base',
    large: 'px-8 py-4 text-lg',
  }
  
  const widthStyle = fullWidth ? 'w-full' : ''
  
  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyle} ${className} ${
    disabled ? 'cursor-not-allowed opacity-60' : 'cursor-pointer'
  }`
  
  // If href is provided, render as Link
  if (href && !disabled) {
    return (
      <Link href={href} className={combinedClassName}>
        {children}
      </Link>
    )
  }
  
  // Otherwise render as button
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClassName}
    >
      {children}
    </button>
  )
}

export default Button