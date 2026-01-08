'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

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
  const getCategoryIcon = (cat?: string) => {
    if (!cat) return '🧵'
    if (cat.includes('Cape')) return '🛁'
    if (cat.includes('Lingette') || cat.includes('Bavoir')) return '🌿'
    if (cat.includes('Anneau')) return '👶'
    if (cat.includes('Sac') || cat.includes('Trousse')) return '👜'
    return '🧵'
  }

  return (
    <article className="group relative">
      {/* Main card container */}
      <div className="relative bg-cream rounded-3xl overflow-hidden transition-all duration-700 ease-out group-hover:shadow-elevated">
        {/* Organic shape background decoration */}
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-coral/5 rounded-full blur-2xl transition-transform duration-700 group-hover:scale-150 group-hover:bg-coral/10" />
        <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-turquoise/5 rounded-full blur-2xl transition-transform duration-700 group-hover:scale-150 group-hover:bg-turquoise/10" />

        {/* Badges */}
        <div className="absolute top-4 left-4 z-20 flex gap-2">
          {isNew && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-coral text-white text-xs font-body font-semibold rounded-full shadow-sm">
              <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
              Nouveau
            </span>
          )}
          {isSoldOut && (
            <span className="px-3 py-1.5 bg-charcoal/90 text-white text-xs font-body font-semibold rounded-full">
              Épuisé
            </span>
          )}
        </div>

        {/* Quick view button */}
        <div className="absolute top-4 right-4 z-20">
          <button className="w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white hover:scale-110 shadow-soft">
            <svg className="w-5 h-5 text-charcoal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
            </svg>
          </button>
        </div>

        {/* Image Container */}
        <Link href={`/produit/${id}`} className="block">
          <div className="relative aspect-[4/5] overflow-hidden bg-gradient-to-br from-sand to-cream">
            {imageUrl && imageUrl !== "/images/placeholder.svg" ? (
              <>
                <Image
                  src={imageUrl}
                  alt={title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                {/* Overlay gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </>
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Decorative background elements */}
                <div className="absolute inset-0">
                  <div className="absolute top-1/4 left-1/4 w-24 h-24 border border-coral/10 rounded-full" />
                  <div className="absolute bottom-1/3 right-1/4 w-16 h-16 border border-turquoise/10 rounded-full" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-coral/5 to-turquoise/5 rounded-full blur-xl" />
                </div>

                {/* Product icon */}
                <div className="relative z-10 text-center">
                  <div className="relative">
                    <div className="w-24 h-24 mx-auto bg-white rounded-2xl shadow-soft flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                      <span className="text-5xl">{getCategoryIcon(category)}</span>
                    </div>
                    {/* Decorative dots */}
                    <div className="absolute -top-2 -right-2 w-3 h-3 bg-coral/40 rounded-full" />
                    <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-turquoise/40 rounded-full" />
                  </div>
                </div>
              </div>
            )}

            {/* Stitch decoration */}
            <svg className="absolute bottom-4 left-4 w-12 h-12 opacity-20 group-hover:opacity-40 transition-opacity duration-500" viewBox="0 0 50 50">
              <path
                d="M5,25 Q15,15 25,25 T45,25"
                fill="none"
                stroke="#E07A5F"
                strokeWidth="1.5"
                strokeDasharray="4 3"
              />
            </svg>
          </div>
        </Link>

        {/* Content */}
        <div className="relative p-6 bg-gradient-to-b from-transparent to-cream/50">
          {/* Category tag */}
          {category && (
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-[1px] bg-turquoise/40" />
              <p className="text-xs font-body font-medium tracking-wider uppercase text-turquoise">
                {category}
              </p>
            </div>
          )}

          {/* Title */}
          <Link href={`/produit/${id}`}>
            <h3 className="font-display text-xl font-semibold text-charcoal mb-2 transition-colors duration-300 group-hover:text-coral line-clamp-2">
              {title}
            </h3>
          </Link>

          {/* Description */}
          <p className="text-sm text-warm-gray font-body leading-relaxed mb-4 line-clamp-2">
            {description}
          </p>

          {/* Price and CTA */}
          <div className="flex items-end justify-between pt-4 border-t border-charcoal/5">
            <div>
              <p className="text-xs text-warm-gray/60 font-body mb-1">À partir de</p>
              <p className="text-2xl font-display font-semibold text-charcoal">
                {price.toFixed(0)}
                <span className="text-lg text-warm-gray ml-0.5">€</span>
              </p>
            </div>

            <Link
              href={`/produit/${id}`}
              className={`
                group/btn inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-body font-medium text-sm
                transition-all duration-300
                ${isSoldOut
                  ? 'bg-charcoal/10 text-charcoal/40 cursor-not-allowed'
                  : 'bg-charcoal text-white hover:bg-coral hover:shadow-lg hover:shadow-coral/20'
                }
              `}
            >
              <span>{isSoldOut ? 'Épuisé' : 'Découvrir'}</span>
              {!isSoldOut && (
                <svg
                  className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              )}
            </Link>
          </div>
        </div>

        {/* Hover accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-coral via-turquoise to-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
      </div>

      {/* Subtle shadow element */}
      <div className="absolute -bottom-2 left-4 right-4 h-8 bg-charcoal/5 blur-xl rounded-full -z-10 transition-all duration-500 group-hover:blur-2xl group-hover:bg-coral/10" />
    </article>
  )
}

export default ProductCard
