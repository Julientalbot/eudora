import React from 'react'
import Button from './Button'

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
  title = "Créations Artisanales Tropicales",
  subtitle = "Bienvenue chez Eudora",
  description = "L'histoire commencée en 2023 avec Louis : de la découverte de la couture pendant ma grossesse à l'atelier artisanal d'aujourd'hui. Un parcours qui grandit avec chaque enfant à venir.",
  primaryCTA = { label: "Découvrir nos créations", href: "/creations" },
  secondaryCTA = { label: "Sur mesure", href: "/sur-mesure" },
}) => {
  return (
    <section className="relative min-h-[700px] flex items-center overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 hero-pattern"></div>
      
      {/* Floating decorative elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-coral/10 rounded-full blur-3xl float"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-turquoise/10 rounded-full blur-3xl float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-40 left-1/3 w-48 h-48 bg-tropical-green/10 rounded-full blur-2xl float" style={{ animationDelay: '4s' }}></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 fade-in">
            <div className="space-y-4">
              <p className="text-coral font-medium text-lg tracking-wide uppercase slide-up">
                {subtitle}
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-gray-900 leading-tight slide-up" style={{ animationDelay: '0.2s' }}>
                {title.split(' ').map((word, i) => (
                  <span key={i} className="inline-block">
                    {i === 1 ? <span className="gradient-text">{word}</span> : word}{' '}
                  </span>
                ))}
              </h1>
            </div>
            
            <p className="text-xl text-gray-600 leading-relaxed max-w-xl slide-up" style={{ animationDelay: '0.4s' }}>
              {description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 slide-up" style={{ animationDelay: '0.6s' }}>
              <Button
                href={primaryCTA.href}
                size="large"
                className="group"
              >
                {primaryCTA.label}
                <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">→</span>
              </Button>
              <Button
                href={secondaryCTA.href}
                variant="outline"
                size="large"
              >
                {secondaryCTA.label}
              </Button>
            </div>
            
            {/* Trust indicators */}
            <div className="flex items-center gap-8 pt-8 slide-up" style={{ animationDelay: '0.8s' }}>
              <div className="flex items-center gap-2">
                <span className="text-2xl">🌺</span>
                <span className="text-sm text-gray-600">Mathilde, maman créatrice</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">✨</span>
                <span className="text-sm text-gray-600">Pièces d'exception</span>
              </div>
            </div>
          </div>
          
          {/* Visual Element */}
          <div className="relative fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="relative w-full max-w-lg mx-auto">
              {/* Main decorative circle */}
              <div className="aspect-square rounded-full bg-gradient-to-br from-coral/20 via-turquoise/20 to-tropical-green/20 relative overflow-hidden">
                {/* Inner decorative elements */}
                <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-white/30 rounded-full blur-xl"></div>
                <div className="absolute bottom-1/4 right-1/4 w-1/3 h-1/3 bg-coral/20 rounded-full blur-lg"></div>
                
                {/* Product showcase placeholder */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-4 p-8">
                    <div className="w-32 h-32 mx-auto bg-white/50 rounded-2xl flex items-center justify-center shadow-lg">
                      <span className="text-6xl">🧵</span>
                    </div>
                    <p className="text-gray-700 font-medium">Créations uniques</p>
                  </div>
                </div>
              </div>
              
              {/* Floating elements around the circle */}
              <div className="absolute -top-8 -right-8 w-24 h-24 bg-coral/30 rounded-full blur-lg float"></div>
              <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-turquoise/30 rounded-full blur-lg float" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-1/2 -right-16 w-20 h-20 bg-tropical-green/30 rounded-full blur-lg float" style={{ animationDelay: '2s' }}></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-24 fill-sand" viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path d="M0,40 C150,80 350,0 600,50 C850,100 1050,20 1200,50 C1350,80 1390,60 1440,40 L1440,100 L0,100 Z"></path>
        </svg>
      </div>
    </section>
  )
}

export default Hero