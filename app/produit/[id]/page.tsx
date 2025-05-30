import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Button from '@/components/Button'
import { featuredProducts, getProductById } from '@/lib/data'
import { ArrowLeft, Heart, ShoppingBag, Star } from 'lucide-react'

interface ProductPageProps {
  params: {
    id: string
  }
}


// Fonction pour récupérer les produits suivant et précédent
function getAdjacentProducts(currentId: string) {
  const currentIndex = featuredProducts.findIndex(p => p.id === currentId)
  const prevProduct = currentIndex > 0 ? featuredProducts[currentIndex - 1] : null
  const nextProduct = currentIndex < featuredProducts.length - 1 ? featuredProducts[currentIndex + 1] : null
  return { prevProduct, nextProduct }
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = getProductById(params.id)
  
  if (!product) {
    notFound()
  }

  const { prevProduct, nextProduct } = getAdjacentProducts(params.id)

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-b from-cream to-sand">
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-6">
        <Link 
          href="/galerie" 
          className="inline-flex items-center text-gray-600 hover:text-coral transition-colors duration-300"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Retour à la galerie
        </Link>
      </div>

      {/* Product Details */}
      <div className="container mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          
          {/* Images Section */}
          <div className="space-y-6">
            {/* Main Image */}
            <div className="aspect-square relative overflow-hidden rounded-3xl shadow-2xl bg-white">
              <Image
                src={product.images[0]}
                alt={product.name}
                width={800}
                height={800}
                className="w-full h-full object-cover"
                priority
              />
              {product.isNew && (
                <div className="absolute top-6 left-6">
                  <span className="px-4 py-2 bg-gradient-to-r from-coral to-tropical-green text-white text-sm font-bold rounded-full shadow-lg">
                    Nouveau
                  </span>
                </div>
              )}
            </div>
            
            {/* Additional Images */}
            {product.images.length > 1 && (
              <div className="grid grid-cols-2 gap-4">
                {product.images.slice(1).map((image, index) => (
                  <div key={index} className="aspect-square relative overflow-hidden rounded-2xl shadow-lg bg-white">
                    <Image
                      src={image}
                      alt={`${product.name} - Vue ${index + 2}`}
                      width={400}
                      height={400}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-8">
            {/* Header */}
            <div>
              <p className="text-coral font-medium mb-2 tracking-wide uppercase text-sm">
                {product.category}
              </p>
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 gradient-text">
                {product.name}
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Price */}
            <div className="flex items-center space-x-4">
              <span className="text-4xl font-bold gradient-text">
                {product.price}€
              </span>
              {product.inStock ? (
                <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                  En stock
                </span>
              ) : (
                <span className="px-3 py-1 bg-red-100 text-red-800 text-sm font-medium rounded-full">
                  Rupture
                </span>
              )}
            </div>

            {/* Product Details */}
            <div className="space-y-6">
              {/* Materials */}
              {product.materials && (
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-gray-800">Matériaux</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.materials.map((material, index) => (
                      <span key={index} className="px-4 py-2 bg-sand text-gray-700 rounded-full text-sm font-medium">
                        {material}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Dimensions */}
              {product.dimensions && (
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">Dimensions</h3>
                  <p className="text-gray-600">{product.dimensions}</p>
                </div>
              )}

              {/* Care Instructions */}
              {product.careInstructions && (
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">Entretien</h3>
                  <p className="text-gray-600">{product.careInstructions}</p>
                </div>
              )}

              {/* Customizable */}
              {product.customizable && (
                <div className="p-4 bg-gradient-to-r from-coral/5 to-turquoise/5 rounded-2xl border border-coral/20">
                  <div className="flex items-center space-x-2 mb-2">
                    <Star className="w-5 h-5 text-coral" />
                    <h3 className="text-lg font-semibold text-gray-800">Personnalisable</h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Cette création peut être personnalisée selon vos souhaits. Contactez-nous pour discuter de vos préférences.
                  </p>
                </div>
              )}
            </div>

            {/* Actions */}
            <div className="space-y-4">
              <div className="flex space-x-4">
                <Button className="flex-1 shadow-lg hover:shadow-xl">
                  <ShoppingBag className="w-5 h-5 mr-2" />
                  Ajouter au panier
                </Button>
                <button className="p-4 border-2 border-gray-200 hover:border-coral rounded-2xl transition-colors duration-300 group">
                  <Heart className="w-6 h-6 text-gray-600 group-hover:text-coral transition-colors" />
                </button>
              </div>
              
              <Button href="/contact" variant="outline" className="w-full shadow-lg hover:shadow-xl">
                Commander sur mesure
                <span className="ml-2">✨</span>
              </Button>
            </div>
          </div>
        </div>

        {/* Navigation between products */}
        <div className="mt-20 pt-12 border-t border-gray-200">
          <div className="flex justify-between items-center">
            {prevProduct ? (
              <Link 
                href={`/produit/${prevProduct.id}`}
                className="group flex items-center space-x-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <ArrowLeft className="w-5 h-5 text-gray-600 group-hover:text-coral transition-colors" />
                <div>
                  <p className="text-sm text-gray-500 mb-1">Précédent</p>
                  <p className="font-semibold text-gray-800 group-hover:text-coral transition-colors">
                    {prevProduct.name}
                  </p>
                </div>
              </Link>
            ) : (
              <div></div>
            )}

            {nextProduct && (
              <Link 
                href={`/produit/${nextProduct.id}`}
                className="group flex items-center space-x-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-right">
                  <p className="text-sm text-gray-500 mb-1">Suivant</p>
                  <p className="font-semibold text-gray-800 group-hover:text-coral transition-colors">
                    {nextProduct.name}
                  </p>
                </div>
                <ArrowLeft className="w-5 h-5 text-gray-600 group-hover:text-coral transition-colors rotate-180" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

// Generate metadata for SEO
export async function generateMetadata({ params }: ProductPageProps) {
  const product = getProductById(params.id)
  
  if (!product) {
    return {
      title: 'Produit non trouvé - Eudora Couture'
    }
  }

  return {
    title: `${product.name} - ${product.price}€ | Eudora Couture`,
    description: product.description,
    keywords: `${product.name}, ${product.category}, haute couture, bébé, La Réunion, ${product.materials?.join(', ')}`,
    openGraph: {
      title: `${product.name} - Eudora Couture`,
      description: product.description,
      images: [product.images[0]],
    },
  }
}

// Generate static params for all products
export async function generateStaticParams() {
  return featuredProducts.map((product) => ({
    id: product.id,
  }))
}