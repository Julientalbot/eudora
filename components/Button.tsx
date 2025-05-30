import React from 'react'
import Link from 'next/link'

interface ButtonProps {
  children: React.ReactNode
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'small' | 'medium' | 'large'
  disabled?: boolean
  fullWidth?: boolean
  type?: 'button' | 'submit' | 'reset'
  className?: string
}

const Button: React.FC<ButtonProps> = ({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  fullWidth = false,
  type = 'button',
  className = '',
}) => {
  const baseClasses = 'relative inline-flex items-center justify-center font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden group'
  
  const variantClasses = {
    primary: 'bg-gradient-to-r from-coral to-coral hover:from-coral hover:to-turquoise text-white shadow-md hover:shadow-lg focus:ring-coral',
    secondary: 'bg-gradient-to-r from-turquoise to-turquoise hover:from-turquoise hover:to-tropical-green text-white shadow-md hover:shadow-lg focus:ring-turquoise',
    outline: 'bg-transparent border-2 border-coral text-coral hover:bg-coral hover:text-white focus:ring-coral',
  }
  
  const sizeClasses = {
    small: 'px-4 py-2 text-sm rounded-lg',
    medium: 'px-6 py-3 text-base rounded-xl',
    large: 'px-8 py-4 text-lg rounded-2xl',
  }
  
  const widthClass = fullWidth ? 'w-full' : ''
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${widthClass} ${className}`
  
  // Inner content with hover effect
  const innerContent = (
    <>
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
      {/* Hover effect overlay */}
      <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
      {/* Ripple effect */}
      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700"></div>
    </>
  )
  
  if (href && !disabled) {
    return (
      <Link href={href} className={classes}>
        {innerContent}
      </Link>
    )
  }
  
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {innerContent}
    </button>
  )
}

export default Button