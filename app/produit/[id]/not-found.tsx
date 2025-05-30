import Link from 'next/link'
import Button from '@/components/Button'
import { ArrowLeft, ShoppingBag } from 'lucide-react'

export default function ProductNotFound() {
  return (
    <div className="pt-20 min-h-screen bg-gradient-to-b from-cream to-sand flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-4 text-center">
        {/* Floating decorative elements */}
        <div className="absolute top-1/4 left-10 w-32 h-32 bg-coral/10 rounded-full blur-2xl float"></div>
        <div className="absolute bottom-1/4 right-10 w-48 h-48 bg-turquoise/10 rounded-full blur-2xl float" style={{ animationDelay: '2s' }}></div>
        
        <div className="relative z-10">
          {/* 404 Icon */}
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-coral to-turquoise rounded-full mb-6">
              <ShoppingBag className="w-12 h-12 text-white" />
            </div>
          </div>

          {/* Message */}
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
            <span className="gradient-text">Produit</span> introuvable
          </h1>
          
          <p className="text-xl text-gray-600 mb-4 leading-relaxed">
            Désolé, ce produit n'existe pas ou n'est plus disponible.
          </p>
          
          <p className="text-gray-500 mb-10">
            Découvrez nos autres créations d'exception dans notre galerie.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/galerie" size="large" className="shadow-lg hover:shadow-xl">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Retour à la galerie
            </Button>
            
            <Button href="/" variant="outline" size="large" className="shadow-lg hover:shadow-xl">
              Accueil
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}