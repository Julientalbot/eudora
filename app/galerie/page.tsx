import React from 'react'
import Image from 'next/image'
import Button from '@/components/Button'
import { featuredProducts } from '@/lib/data'

export default function GaleriePage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[400px] flex items-center overflow-hidden">
        <div className="absolute inset-0 hero-pattern"></div>
        
        {/* Floating decorative elements */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-coral/10 rounded-full blur-3xl float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-turquoise/10 rounded-full blur-3xl float" style={{ animationDelay: '2s' }}></div>
        
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center slide-up">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6">
              <span className="gradient-text">Galerie</span> Eudora
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Découvrez nos créations d'exception, chaque pièce raconte une histoire d'amour et d'artisanat.
            </p>
          </div>
        </div>
      </section>

      {/* Products Gallery */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <div key={product.id} className="group fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                  {/* Image */}
                  <div className="aspect-square relative overflow-hidden">
                    <Image
                      src={product.images[0]}
                      alt={product.name}
                      width={400}
                      height={400}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    
                    {/* Badges */}
                    <div className="absolute top-4 left-4 flex gap-2">
                      {product.isNew && (
                        <span className="px-3 py-1.5 bg-gradient-to-r from-coral to-tropical-green text-white text-xs font-bold rounded-full shadow-md">
                          Nouveau
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
                    <h3 className="text-xl font-display font-bold mb-2 group-hover:text-coral transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {product.description}
                    </p>
                    
                    {/* Materials */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-1">
                        {product.materials?.map((material, idx) => (
                          <span key={idx} className="text-xs bg-sand px-2 py-1 rounded-full text-gray-600">
                            {material}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Price and action */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <span className="text-2xl font-bold gradient-text">
                        {product.price}€
                      </span>
                      <Button size="small" className="group/btn">
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

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-sand to-cream">
        <div className="max-w-4xl mx-auto text-center slide-up">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Une création vous <span className="gradient-text">inspire</span> ?
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            Commandez votre pièce personnalisée ou contactez-nous pour découvrir nos autres créations.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button href="/sur-mesure" size="large" className="shadow-lg hover:shadow-xl">
              Commander sur mesure
              <span className="ml-2">✨</span>
            </Button>
            <Button href="/contact" variant="outline" size="large" className="shadow-lg hover:shadow-xl">
              Nous contacter
              <span className="ml-2">💬</span>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}