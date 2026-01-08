'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  const navigation = [
    { name: 'Accueil', href: '/' },
    { name: 'Galerie', href: '/galerie' },
    { name: 'Sur Mesure', href: '/sur-mesure' },
    { name: 'Notre Histoire', href: '/a-propos' },
    { name: 'Contact', href: '/contact' },
  ]

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  return (
    <>
      <header
        className={`
          fixed top-0 left-0 right-0 z-50 transition-all duration-500
          ${isScrolled
            ? 'py-3 glass-effect'
            : 'py-6 bg-transparent'
          }
        `}
      >
        <nav className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="group flex items-center gap-4 relative z-10">
              {/* Logo mark */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-coral/30 to-turquoise/30 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative w-12 h-12 bg-white rounded-xl shadow-soft overflow-hidden flex items-center justify-center group-hover:shadow-elevated transition-shadow duration-500">
                  <Image
                    src="/logo.png"
                    alt="Eudora Couture"
                    width={40}
                    height={40}
                    className="w-10 h-10 object-contain"
                    priority
                  />
                </div>
              </div>

              {/* Logo text */}
              <div className="flex flex-col">
                <span className="text-xl lg:text-2xl font-display font-semibold text-charcoal tracking-tight">
                  Eudora
                </span>
                <span className="text-[10px] font-body font-medium tracking-[0.25em] uppercase text-warm-gray">
                  Couture
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`
                    relative px-5 py-2.5 font-body text-sm font-medium transition-colors duration-300
                    ${isActive(item.href)
                      ? 'text-coral'
                      : 'text-charcoal hover:text-coral'
                    }
                  `}
                >
                  <span className="relative z-10">{item.name}</span>

                  {/* Active indicator */}
                  {isActive(item.href) && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-coral rounded-full" />
                  )}

                  {/* Hover underline */}
                  <span className="absolute bottom-1 left-5 right-5 h-px bg-coral scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-4">
              {/* Instagram link */}
              <a
                href="https://instagram.com/eudoracouture"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-charcoal/5 flex items-center justify-center hover:bg-coral/10 hover:text-coral transition-all duration-300 group"
              >
                <svg className="w-5 h-5 text-charcoal group-hover:text-coral transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              {/* Main CTA */}
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 px-6 py-2.5 bg-coral text-white font-body font-medium text-sm rounded-full shadow-sm hover:shadow-lg hover:shadow-coral/20 transition-all duration-300 hover:-translate-y-0.5"
              >
                <span>Nous contacter</span>
                <svg
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden relative z-50 w-12 h-12 rounded-xl bg-white/80 backdrop-blur-sm shadow-soft flex items-center justify-center"
              aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            >
              <div className="w-5 h-4 flex flex-col justify-between">
                <span
                  className={`
                    block h-0.5 bg-charcoal rounded-full transition-all duration-300 origin-center
                    ${isMenuOpen ? 'rotate-45 translate-y-[7px]' : ''}
                  `}
                />
                <span
                  className={`
                    block h-0.5 bg-charcoal rounded-full transition-all duration-300
                    ${isMenuOpen ? 'opacity-0 scale-x-0' : ''}
                  `}
                />
                <span
                  className={`
                    block h-0.5 bg-charcoal rounded-full transition-all duration-300 origin-center
                    ${isMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''}
                  `}
                />
              </div>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`
          fixed inset-0 z-40 lg:hidden transition-all duration-500
          ${isMenuOpen ? 'visible' : 'invisible'}
        `}
      >
        {/* Backdrop */}
        <div
          className={`
            absolute inset-0 bg-charcoal/20 backdrop-blur-sm transition-opacity duration-500
            ${isMenuOpen ? 'opacity-100' : 'opacity-0'}
          `}
          onClick={() => setIsMenuOpen(false)}
        />

        {/* Menu Panel */}
        <div
          className={`
            absolute top-0 right-0 w-full max-w-sm h-full bg-cream shadow-2xl
            transition-transform duration-500 ease-out
            ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
          `}
        >
          <div className="flex flex-col h-full pt-24 pb-8 px-8">
            {/* Navigation Links */}
            <nav className="flex-1">
              <ul className="space-y-2">
                {navigation.map((item, index) => (
                  <li
                    key={item.name}
                    className={`
                      transform transition-all duration-500
                      ${isMenuOpen
                        ? 'translate-x-0 opacity-100'
                        : 'translate-x-8 opacity-0'
                      }
                    `}
                    style={{ transitionDelay: `${150 + index * 50}ms` }}
                  >
                    <Link
                      href={item.href}
                      className={`
                        block py-4 px-4 -mx-4 font-display text-2xl font-medium rounded-xl
                        transition-colors duration-300
                        ${isActive(item.href)
                          ? 'text-coral bg-coral/5'
                          : 'text-charcoal hover:text-coral hover:bg-coral/5'
                        }
                      `}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Bottom section */}
            <div
              className={`
                space-y-6 pt-8 border-t border-charcoal/10
                transform transition-all duration-500
                ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}
              `}
              style={{ transitionDelay: '400ms' }}
            >
              {/* Contact CTA */}
              <Link
                href="/contact"
                className="flex items-center justify-center gap-3 w-full py-4 bg-coral text-white font-body font-semibold rounded-full shadow-lg shadow-coral/20"
              >
                <span>Nous contacter</span>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>

              {/* Social Links */}
              <div className="flex items-center justify-center gap-4">
                <a
                  href="https://instagram.com/eudoracouture"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-charcoal/5 flex items-center justify-center hover:bg-coral/10 transition-colors duration-300"
                >
                  <svg className="w-5 h-5 text-charcoal" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a
                  href="https://facebook.com/eudoracouture"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-charcoal/5 flex items-center justify-center hover:bg-coral/10 transition-colors duration-300"
                >
                  <svg className="w-5 h-5 text-charcoal" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
              </div>

              {/* Location */}
              <p className="text-center text-sm text-warm-gray font-body">
                Trois Bassins, La Réunion
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
