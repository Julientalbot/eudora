import React from 'react'
import Link from 'next/link'

interface ButtonProps {
  children: React.ReactNode
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
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
  const baseClasses = `
    relative inline-flex items-center justify-center font-body font-semibold
    transition-all duration-400 ease-out
    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-cream
    disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
    overflow-hidden group
  `

  const variantClasses = {
    primary: `
      bg-coral text-white
      shadow-lg shadow-coral/20
      hover:shadow-xl hover:shadow-coral/30 hover:-translate-y-0.5
      focus:ring-coral
    `,
    secondary: `
      bg-turquoise text-white
      shadow-lg shadow-turquoise/20
      hover:shadow-xl hover:shadow-turquoise/30 hover:-translate-y-0.5
      focus:ring-turquoise
    `,
    outline: `
      bg-transparent border-2 border-coral text-coral
      hover:bg-coral hover:text-white hover:-translate-y-0.5
      focus:ring-coral
    `,
    ghost: `
      bg-transparent text-charcoal
      hover:bg-charcoal/5 hover:text-coral
      focus:ring-charcoal/20
    `,
  }

  const sizeClasses = {
    small: 'px-5 py-2 text-sm rounded-full gap-1.5',
    medium: 'px-7 py-3 text-base rounded-full gap-2',
    large: 'px-9 py-4 text-lg rounded-full gap-2.5',
  }

  const widthClass = fullWidth ? 'w-full' : ''

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${widthClass} ${className}`

  const innerContent = (
    <>
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
      {/* Shimmer effect on hover */}
      {variant !== 'ghost' && (
        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-out" />
      )}
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
