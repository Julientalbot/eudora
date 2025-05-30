import React from 'react'
import Link from 'next/link'
import Button from '@/components/Button'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sand via-cream to-sand relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-coral/10 rounded-full blur-3xl float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-turquoise/10 rounded-full blur-3xl float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-40 right-1/3 w-48 h-48 bg-tropical-green/10 rounded-full blur-2xl float" style={{ animationDelay: '4s' }}></div>
      
      <div className="max-w-4xl mx-auto px-4 py-20 text-center relative z-10">
        <div className="slide-up">
          {/* 404 Number */}
          <div className="mb-8">
            <span className="text-9xl md:text-[12rem] font-display font-bold gradient-text leading-none">
              404
            </span>
          </div>
          
          {/* Error Message */}
          <div className="space-y-6 mb-12">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-800">
              Oups ! Page introuvable
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Il semblerait que cette page ait disparu comme un tissu dans le vent tropical. 
              Pas de panique, nous allons vous ramener vers nos plus belles créations !
            </p>
          </div>
          
          {/* Decorative illustration */}
          <div className="mb-12 fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="w-64 h-64 mx-auto bg-white rounded-full shadow-2xl flex items-center justify-center relative">
              <div className="text-8xl">🌺</div>
              {/* Floating elements around */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-coral/20 rounded-full blur-lg float"></div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-turquoise/20 rounded-full blur-lg float" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-1/2 -left-8 w-12 h-12 bg-tropical-green/20 rounded-full blur-lg float" style={{ animationDelay: '2s' }}></div>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center fade-in" style={{ animationDelay: '0.4s' }}>
            <Button href="/" size="large" className="shadow-lg hover:shadow-xl">
              Retour à l'accueil
              <span className="ml-2">🏠</span>
            </Button>
            <Button href="/#creations" variant="outline" size="large" className="shadow-lg hover:shadow-xl">
              Voir nos créations
              <span className="ml-2">✨</span>
            </Button>
          </div>
          
          {/* Quick Links */}
          <div className="mt-16 pt-8 border-t border-gray-200 fade-in" style={{ animationDelay: '0.6s' }}>
            <p className="text-gray-500 mb-6">Ou explorez directement :</p>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { name: 'Sur Mesure', href: '/sur-mesure', icon: '✂️' },
                { name: 'À Propos', href: '/a-propos', icon: '👋' },
                { name: 'Contact', href: '/contact', icon: '📧' }
              ].map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 text-gray-700 hover:text-coral"
                >
                  <span>{link.icon}</span>
                  <span className="font-medium">{link.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}