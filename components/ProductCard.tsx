import React from 'react'
import Link from 'next/link'
import Button from './Button'

interface ProductCardProps {
  id: string
  title: string
  description: string
  price: number
  imageUrl?: string
  category?: string
  isNew?: boolean
  isSoldOut?: boolean
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  title,
  description,
  price,
  imageUrl,
  category,
  isNew = false,
  isSoldOut = false,
}) => {
  return (
    <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-1">
      {/* Gradient overlay for visual interest */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-coral/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Badges */}
      <div className="absolute top-4 left-4 z-10 flex gap-2">
        {isNew && (
          <span className="px-3 py-1.5 bg-gradient-to-r from-coral to-tropical-green text-white text-xs font-bold rounded-full shadow-md">
            Nouveau
          </span>
        )}
        {isSoldOut && (
          <span className="px-3 py-1.5 bg-gray-800 text-white text-xs font-bold rounded-full shadow-md">
            Épuisé
          </span>
        )}
      </div>

      {/* Image Container */}
      <Link href={`/produits/${id}`}>
        <div className="aspect-square relative overflow-hidden bg-gradient-to-br from-sand to-cream">
          {imageUrl && imageUrl !== "/images/placeholder.svg" ? (
            <img 
              src={imageUrl} 
              alt={title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <div className="relative">
                {/* Decorative background circles */}
                <div className="absolute -inset-20 bg-turquoise/10 rounded-full blur-2xl"></div>
                <div className="absolute -inset-16 bg-coral/10 rounded-full blur-xl"></div>
                
                {/* Product icon based on category */}
                <div className="relative bg-white rounded-3xl p-8 shadow-lg transform group-hover:rotate-3 transition-transform duration-500">
                  <span className="text-7xl block">
                    {category?.includes('Sac') && '👜'}
                    {category?.includes('Cape') && '🛁'}
                    {category?.includes('Trousse') && '👝'}
                    {category?.includes('Lingette') && '🌿'}
                    {!category && '🧵'}
                  </span>
                </div>
              </div>
            </div>
          )}
          
          {/* Hover Overlay with View Icon */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center pb-6">
            <div className="bg-white rounded-full p-3 transform translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
              <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
          </div>
        </div>
      </Link>

      {/* Content */}
      <div className="p-6 relative z-10">
        {category && (
          <p className="text-xs text-turquoise font-bold uppercase tracking-wider mb-2">
            {category}
          </p>
        )}
        
        <Link href={`/produits/${id}`}>
          <h3 className="text-xl font-display font-bold text-gray-900 mb-2 group-hover:text-coral transition-colors duration-300">
            {title}
          </h3>
        </Link>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {description}
        </p>
        
        {/* Price and Action */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div>
            <p className="text-sm text-gray-500">Prix</p>
            <p className="text-2xl font-bold bg-gradient-to-r from-coral to-turquoise bg-clip-text text-transparent">
              {price.toFixed(2)} €
            </p>
          </div>
          
          <Button
            href={`/produits/${id}`}
            variant="primary"
            size="small"
            disabled={isSoldOut}
            className="group/btn"
          >
            {isSoldOut ? 'Indisponible' : 'Voir'}
            {!isSoldOut && (
              <span className="inline-block ml-1 transition-transform group-hover/btn:translate-x-1">
                →
              </span>
            )}
          </Button>
        </div>
        
        {/* Decorative corner accent */}
        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-coral/10 to-transparent rounded-bl-full"></div>
      </div>
    </div>
  )
}

export default ProductCard