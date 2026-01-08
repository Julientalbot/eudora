'use client'

import React from 'react'
import Link from 'next/link'

interface HeroProps {
  title?: string
  subtitle?: string
  description?: string
  primaryCTA?: {
    label: string
    href: string
  }
  secondaryCTA?: {
    label: string
    href: string
  }
}

const Hero: React.FC<HeroProps> = ({
  title = "Eudora Couture",
  subtitle = "Artisanat de luxe pour bébés",
  description = "Chaque œuvre est confectionnée avec excellence dans notre atelier à Trois Bassins. Des tissus nobles choisis avec soin, des finitions d'exception.",
  primaryCTA = { label: "Découvrir les créations", href: "#creations" },
  secondaryCTA = { label: "Sur mesure", href: "/sur-mesure" },
}) => {
  return (
    <section className="relative min-h-[100vh] flex items-center overflow-hidden texture-linen">
      {/* Layered background with depth */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-cream via-sand to-cream" />

        {/* Organic shapes */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] opacity-40">
          <svg viewBox="0 0 800 800" className="w-full h-full">
            <defs>
              <linearGradient id="organicGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#E07A5F" stopOpacity="0.15" />
                <stop offset="100%" stopColor="#3D9A8B" stopOpacity="0.08" />
              </linearGradient>
            </defs>
            <path
              d="M400,50 C600,50 750,200 750,400 C750,600 600,750 400,750 C200,750 50,600 50,400 C50,200 200,50 400,50"
              fill="url(#organicGrad1)"
              className="float-slow"
            />
          </svg>
        </div>

        {/* Floating organic blobs */}
        <div className="absolute top-20 left-[10%] w-72 h-72 bg-coral/8 rounded-[60%_40%_70%_30%/40%_50%_60%_50%] blur-3xl float" />
        <div className="absolute bottom-32 right-[15%] w-96 h-96 bg-turquoise/10 rounded-[40%_60%_30%_70%/60%_30%_70%_40%] blur-3xl float" style={{ animationDelay: '3s' }} />
        <div className="absolute top-1/2 left-[5%] w-48 h-48 bg-gold/6 rounded-[50%_50%_40%_60%/40%_60%_50%_50%] blur-2xl float" style={{ animationDelay: '5s' }} />

        {/* Decorative stitch lines */}
        <svg className="absolute top-40 left-20 w-40 h-40 opacity-20" viewBox="0 0 100 100">
          <path
            d="M10,50 Q30,30 50,50 T90,50"
            fill="none"
            stroke="#E07A5F"
            strokeWidth="1.5"
            strokeDasharray="8 6"
            className="animate-stitch"
            style={{ strokeDashoffset: 100 }}
          />
        </svg>
        <svg className="absolute bottom-40 right-40 w-32 h-32 opacity-15 rotate-45" viewBox="0 0 100 100">
          <path
            d="M10,50 Q30,70 50,50 T90,50"
            fill="none"
            stroke="#3D9A8B"
            strokeWidth="1.5"
            strokeDasharray="8 6"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 lg:px-12 py-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Text Content */}
          <div className="lg:col-span-7 space-y-8">
            {/* Subtitle badge */}
            <div
              className="inline-flex items-center gap-3 slide-up"
              style={{ animationDelay: '0.1s' }}
            >
              <span className="w-12 h-[1px] bg-gradient-to-r from-coral to-transparent" />
              <span className="text-sm font-body font-medium tracking-[0.2em] uppercase text-coral">
                {subtitle}
              </span>
            </div>

            {/* Main title */}
            <h1
              className="slide-up"
              style={{ animationDelay: '0.2s' }}
            >
              <span className="block text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-display font-semibold text-charcoal leading-[0.9] tracking-tight">
                {title.split(' ')[0]}
              </span>
              <span className="block text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-medium mt-2">
                <span className="gradient-text">{title.split(' ').slice(1).join(' ') || 'Couture'}</span>
              </span>
            </h1>

            {/* Description */}
            <p
              className="text-lg md:text-xl text-warm-gray leading-relaxed max-w-xl font-body slide-up"
              style={{ animationDelay: '0.4s' }}
            >
              {description}
            </p>

            {/* CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row gap-4 pt-4 slide-up"
              style={{ animationDelay: '0.5s' }}
            >
              <Link
                href={primaryCTA.href}
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-coral text-white font-body font-semibold rounded-full shadow-lg shadow-coral/25 hover:shadow-xl hover:shadow-coral/30 transition-all duration-500 hover:-translate-y-1"
              >
                <span>{primaryCTA.label}</span>
                <svg
                  className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href={secondaryCTA.href}
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent text-charcoal font-body font-semibold rounded-full border-2 border-charcoal/20 hover:border-coral hover:text-coral transition-all duration-500"
              >
                <span>{secondaryCTA.label}</span>
                <span className="text-lg transition-transform duration-300 group-hover:rotate-45">+</span>
              </Link>
            </div>

            {/* Trust indicators */}
            <div
              className="flex flex-wrap items-center gap-8 pt-8 slide-up"
              style={{ animationDelay: '0.6s' }}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-coral/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-coral" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <span className="text-sm text-warm-gray font-body">Fait main avec amour</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-turquoise/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-turquoise" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <span className="text-sm text-warm-gray font-body">Pièces uniques</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className="text-sm text-warm-gray font-body">La Réunion</span>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="lg:col-span-5 relative fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative aspect-[4/5] max-w-md mx-auto lg:max-w-none">
              {/* Decorative frame */}
              <div className="absolute inset-0 border-2 border-coral/20 rounded-[3rem] transform rotate-3 transition-transform duration-700 hover:rotate-6" />
              <div className="absolute inset-0 border-2 border-turquoise/15 rounded-[3rem] transform -rotate-2 transition-transform duration-700 hover:-rotate-4" />

              {/* Main visual container */}
              <div className="relative h-full bg-gradient-to-br from-sand via-cream to-sand rounded-[2.5rem] overflow-hidden shadow-elevated">
                {/* Texture overlay */}
                <div className="absolute inset-0 opacity-30 texture-grain" />

                {/* Central visual */}
                <div className="absolute inset-0 flex items-center justify-center p-12">
                  <div className="relative w-full h-full">
                    {/* Decorative circles */}
                    <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-coral/20 rounded-full breathe" />
                    <div className="absolute bottom-1/4 right-1/4 w-24 h-24 border border-turquoise/20 rounded-full breathe" style={{ animationDelay: '1s' }} />

                    {/* Central icon/symbol */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center space-y-6">
                        {/* Thread & needle icon */}
                        <div className="relative">
                          <svg className="w-24 h-24 mx-auto text-coral/60" viewBox="0 0 100 100" fill="none">
                            <circle cx="50" cy="50" r="35" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" className="breathe" />
                            <path d="M30 50 Q50 30 70 50 T70 70" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
                            <circle cx="30" cy="50" r="4" fill="currentColor" />
                          </svg>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-5xl">🧵</span>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <p className="font-display text-2xl text-charcoal/80">Créations uniques</p>
                          <p className="font-body text-sm text-warm-gray tracking-wide">depuis notre atelier</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Corner decorations */}
                <div className="absolute top-6 left-6 w-12 h-12 border-l-2 border-t-2 border-coral/30 rounded-tl-2xl" />
                <div className="absolute bottom-6 right-6 w-12 h-12 border-r-2 border-b-2 border-turquoise/30 rounded-br-2xl" />

                {/* Gold accent */}
                <div className="absolute top-8 right-8">
                  <div className="w-3 h-3 bg-gold rounded-full animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 slide-up" style={{ animationDelay: '1s' }}>
        <span className="text-xs font-body tracking-widest uppercase text-warm-gray/60">Défiler</span>
        <div className="scroll-indicator" />
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-32" viewBox="0 0 1440 128" preserveAspectRatio="none">
          <defs>
            <linearGradient id="waveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#F4F1DE" />
              <stop offset="50%" stopColor="#FFFCF7" />
              <stop offset="100%" stopColor="#F4F1DE" />
            </linearGradient>
          </defs>
          <path
            d="M0,64 C240,96 480,32 720,64 C960,96 1200,32 1440,64 L1440,128 L0,128 Z"
            fill="url(#waveGrad)"
          />
        </svg>
      </div>
    </section>
  )
}

export default Hero
