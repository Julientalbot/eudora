import React from 'react'
import Link from 'next/link'
import Button from './Button'

interface ProductCardProps {
  id: string
  title: string
  description: string
  price: number
  imageUrl?: string
  imageAlt?: string
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
  imageAlt,
  category,
  isNew = false,
  isSoldOut = false,
}) => {
  return (
    <div className="group relative bg-[#FEFEFE] rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      {/* Badges */}
      <div className="absolute top-4 left-4 z-10 flex gap-2">
        {isNew && (
          <span className="px-3 py-1 bg-[#95E1D3] text-white text-xs font-semibold rounded-full">
            Nouveau
          </span>
        )}
        {isSoldOut && (
          <span className="px-3 py-1 bg-gray-500 text-white text-xs font-semibold rounded-full">
            Épuisé
          </span>
        )}
      </div>

      {/* Image */}
      <Link href={`/produits/${id}`}>
        <div className="aspect-square relative overflow-hidden bg-[#F5F3F0]">
          {imageUrl ? (
            <div className="w-full h-full bg-gradient-to-br from-[#4ECDC4]/20 to-[#95E1D3]/20">
              {/* Image placeholder */}
              <div className="flex items-center justify-center h-full">
                <svg className="w-20 h-20 text-[#4ECDC4]/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-[#FF6B6B]/10 via-[#4ECDC4]/10 to-[#95E1D3]/10 flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-2 rounded-full bg-white/50 flex items-center justify-center">
                  <svg className="w-12 h-12 text-[#4ECDC4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
              </div>
            </div>
          )}
          
          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
        </div>
      </Link>

      {/* Content */}
      <div className="p-6">
        {category && (
          <p className="text-xs text-[#4ECDC4] font-medium uppercase tracking-wider mb-1">
            {category}
          </p>
        )}
        
        <Link href={`/produits/${id}`}>
          <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-[#FF6B6B] transition-colors">
            {title}
          </h3>
        </Link>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {description}
        </p>
        
        <div className="flex items-center justify-between">
          <p className="text-2xl font-bold text-[#FF6B6B]">
            {price.toFixed(2)} €
          </p>
          
          <Button
            href={`/produits/${id}`}
            variant="primary"
            size="small"
            disabled={isSoldOut}
          >
            {isSoldOut ? 'Indisponible' : 'Voir détails'}
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard