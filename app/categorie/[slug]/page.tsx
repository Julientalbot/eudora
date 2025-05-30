import React from 'react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Button from '@/components/Button'
import { categories, getProductsByCategory } from '@/lib/data'
import { ArrowLeft, Grid } from 'lucide-react'
import Image from 'next/image'

interface CategoryPageProps {
  params: {
    slug: string
  }
}

// Fonction pour récupérer une catégorie par slug
function getCategoryBySlug(slug: string) {
  return categories.find(category => category.slug === slug)
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const category = getCategoryBySlug(params.slug)
  const products = getProductsByCategory(params.slug)
  
  if (!category) {
    notFound()
  }

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-b from-cream to-sand">
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-6">
        <Link 
          href="/" 
          className="inline-flex items-center text-gray-600 hover:text-coral transition-colors duration-300"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Retour à l'accueil
        </Link>
      </div>

      {/* Category Header */}
      <section className="container mx-auto px-4 pb-16">
        <div className="max-w-4xl mx-auto text-center slide-up">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-coral to-turquoise rounded-full mb-6">
              <Grid className="w-10 h-10 text-white" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
            <span className="gradient-text">{category.name}</span>
          </h1>
          
          <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto mb-8">
            {category.description}
          </p>

          {products.length === 0 && (
            <p className="text-gray-500 italic">
              Aucun produit disponible dans cette catégorie pour le moment.
            </p>
          )}
        </div>
      </section>

      {/* Products Grid */}
      {products.length > 0 && (
        <section className="container mx-auto px-4 pb-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <div key={product.id} className="group fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                    {/* Image */}
                    <div className="aspect-square relative overflow-hidden">
                      <Link href={`/produit/${product.id}`}>
                        <Image
                          src={product.images[0]}
                          alt={product.name}
                          width={400}
                          height={400}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                      </Link>
                      
                      {/* Badges */}
                      <div className="absolute top-4 left-4 flex gap-2">
                        {product.isNew && (
                          <span className="px-3 py-1.5 bg-gradient-to-r from-coral to-tropical-green text-white text-xs font-bold rounded-full shadow-md">
                            Nouveau
                          </span>
                        )}
                        {!product.inStock && (
                          <span className="px-3 py-1.5 bg-gray-800 text-white text-xs font-bold rounded-full shadow-md">
                            Épuisé
                          </span>
                        )}
                      </div>
                      
                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="absolute bottom-4 left-4 right-4">
                          <p className="text-white text-sm font-medium mb-2">{product.category}</p>
                          <p className="text-white/80 text-xs line-clamp-2">{product.description}</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-6">
                      <Link href={`/produit/${product.id}`}>
                        <h3 className="text-xl font-display font-bold mb-2 group-hover:text-coral transition-colors">
                          {product.name}
                        </h3>
                      </Link>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {product.description}
                      </p>
                      
                      {/* Materials */}
                      {product.materials && (
                        <div className="mb-4">
                          <div className="flex flex-wrap gap-1">
                            {product.materials.slice(0, 2).map((material, idx) => (
                              <span key={idx} className="text-xs bg-sand px-2 py-1 rounded-full text-gray-600">
                                {material}
                              </span>
                            ))}
                            {product.materials.length > 2 && (
                              <span className="text-xs text-gray-400">
                                +{product.materials.length - 2}
                              </span>
                            )}
                          </div>
                        </div>
                      )}
                      
                      {/* Price and action */}
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <span className="text-2xl font-bold gradient-text">
                          {product.price}€
                        </span>
                        <Button href={`/produit/${product.id}`} size="small" className="group/btn">
                          Voir détails
                          <span className="inline-block ml-1 transition-transform group-hover/btn:translate-x-1">
                            →
                          </span>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Back to Gallery CTA */}
      <section className="container mx-auto px-4 pb-20">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-white rounded-3xl shadow-lg p-8">
            <h3 className="text-2xl font-display font-bold mb-4">
              Découvrir toutes nos <span className="gradient-text">créations</span>
            </h3>
            <p className="text-gray-600 mb-6">
              Explorez notre galerie complète pour découvrir toutes nos créations d'exception.
            </p>
            <Button href="/galerie" size="large" className="shadow-lg hover:shadow-xl">
              Voir toute la galerie
              <span className="ml-2">🎨</span>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

// Generate metadata for SEO
export async function generateMetadata({ params }: CategoryPageProps) {
  const category = getCategoryBySlug(params.slug)
  
  if (!category) {
    return {
      title: 'Catégorie non trouvée - Eudora Couture'
    }
  }

  return {
    title: `${category.name} | Eudora Couture`,
    description: category.description,
    keywords: `${category.name}, haute couture, bébé, La Réunion, artisanal`,
    openGraph: {
      title: `${category.name} - Eudora Couture`,
      description: category.description,
    },
  }
}

// Generate static params for all categories
export async function generateStaticParams() {
  return categories.map((category) => ({
    slug: category.slug,
  }))
}