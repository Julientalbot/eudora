'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, ShoppingBag, Heart } from 'lucide-react'

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigation = [
    { name: 'Accueil', href: '/' },
    { name: 'Créations', href: '/#creations' },
    { name: 'Sur Mesure', href: '/sur-mesure' },
    { name: 'À Propos', href: '/a-propos' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'glass-effect shadow-lg' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-coral to-turquoise rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <div className="relative bg-white rounded-full p-2">
                <span className="text-2xl">🌺</span>
              </div>
            </div>
            <span className="text-2xl font-display font-bold bg-gradient-to-r from-coral to-turquoise bg-clip-text text-transparent">
              Ti Bébé Péi
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative text-gray-700 hover:text-coral transition-colors duration-300 font-medium group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-coral to-turquoise group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="p-2 hover:bg-coral/10 rounded-full transition-colors duration-300 relative group">
              <Heart className="w-5 h-5 text-gray-700 group-hover:text-coral transition-colors" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-coral text-white text-xs rounded-full flex items-center justify-center">
                0
              </span>
            </button>
            <button className="p-2 hover:bg-coral/10 rounded-full transition-colors duration-300 relative group">
              <ShoppingBag className="w-5 h-5 text-gray-700 group-hover:text-coral transition-colors" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-turquoise text-white text-xs rounded-full flex items-center justify-center">
                0
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-coral/10 rounded-lg transition-colors duration-300"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 space-y-2 border-t border-gray-200">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block px-4 py-3 text-gray-700 hover:text-coral hover:bg-coral/5 rounded-lg transition-all duration-300"
              >
                {item.name}
              </Link>
            ))}
            <div className="flex items-center space-x-4 px-4 pt-4 border-t border-gray-200">
              <button className="flex items-center space-x-2 text-gray-700 hover:text-coral transition-colors">
                <Heart className="w-5 h-5" />
                <span>Favoris (0)</span>
              </button>
              <button className="flex items-center space-x-2 text-gray-700 hover:text-coral transition-colors">
                <ShoppingBag className="w-5 h-5" />
                <span>Panier (0)</span>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header