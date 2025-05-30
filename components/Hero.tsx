import React from 'react'
import Button from './Button'
import Image from 'next/image'

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
  imageUrl?: string
  imageAlt?: string
}

const Hero: React.FC<HeroProps> = ({
  title = "Créations Artisanales Tropicales",
  subtitle = "Bienvenue chez Eudora",
  description = "Découvrez nos créations uniques inspirées par la beauté et les couleurs vibrantes des tropiques. Chaque pièce est fabriquée à la main avec passion et savoir-faire.",
  primaryCTA = { label: "Découvrir nos créations", href: "/creations" },
  secondaryCTA = { label: "Sur mesure", href: "/sur-mesure" },
  imageUrl = "/images/hero-tropical.jpg",
  imageAlt = "Créations artisanales tropicales"
}) => {
  return (
    <section className="relative min-h-[600px] flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#4ECDC4]/10 via-[#95E1D3]/10 to-[#FF6B6B]/10"></div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div>
              <p className="text-[#FF6B6B] font-medium mb-2">{subtitle}</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                {title}
              </h1>
            </div>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              {description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href={primaryCTA.href}
                variant="primary"
                size="large"
              >
                {primaryCTA.label}
              </Button>
              
              <Button
                href={secondaryCTA.href}
                variant="secondary"
                size="large"
              >
                {secondaryCTA.label}
              </Button>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative">
            <div className="aspect-square relative overflow-hidden rounded-2xl shadow-2xl">
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#95E1D3] rounded-full opacity-50"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-[#FF6B6B] rounded-full opacity-30"></div>
              
              {/* Placeholder for image */}
              <div className="relative w-full h-full bg-gradient-to-br from-[#4ECDC4] to-[#95E1D3] flex items-center justify-center">
                <div className="text-white text-center p-8">
                  <div className="w-32 h-32 mx-auto mb-4 border-4 border-white rounded-full flex items-center justify-center">
                    <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-sm opacity-75">Image à venir</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero