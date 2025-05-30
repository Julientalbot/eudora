import Hero from '@/components/Hero';
import ProductCard from '@/components/ProductCard';
import Button from '@/components/Button';
import { featuredProducts, categories, shopInfo } from '@/lib/data';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Ti Bébé Péi"
        subtitle={shopInfo.tagline}
        description={shopInfo.description}
        primaryCTA={{ label: "Découvrir les créations", href: "#creations" }}
        secondaryCTA={{ label: "Commander sur mesure", href: "/sur-mesure" }}
      />

      {/* Categories Section */}
      <section className="py-16 px-4 bg-sand">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display text-center mb-4">
            Nos Créations
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Chaque pièce est confectionnée avec soin dans notre atelier à La Réunion, 
            avec des tissus sélectionnés pour leur qualité et leur douceur.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category) => (
              <div
                key={category.id}
                className="group cursor-pointer text-center"
              >
                <div className="aspect-square bg-cream rounded-lg overflow-hidden mb-4 shadow-md group-hover:shadow-lg transition-shadow">
                  <div className="w-full h-full bg-gradient-to-br from-tropical-green/20 to-turquoise/20 flex items-center justify-center">
                    <span className="text-4xl">
                      {category.id === '1' && '👜'}
                      {category.id === '2' && '🛁'}
                      {category.id === '3' && '👝'}
                      {category.id === '4' && '🌿'}
                    </span>
                  </div>
                </div>
                <h3 className="font-semibold text-lg group-hover:text-coral transition-colors">
                  {category.name}
                </h3>
                <p className="text-sm text-gray-600 mt-1">{category.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="creations" className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display text-center mb-4">
            Produits Phares
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Nos créations les plus appréciées par les mamans de l'île
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard 
                key={product.id}
                id={product.id}
                title={product.name}
                description={product.description}
                price={product.price}
                imageUrl={product.images[0] || "/images/placeholder.svg"}
                category={product.category}
                isNew={product.isNew}
                isSoldOut={!product.inStock}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Custom Order CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-coral/10 to-turquoise/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-display mb-4">
            Une envie particulière ?
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            {shopInfo.customOrder}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/sur-mesure" size="large">
              Commander sur mesure
            </Button>
            <Button href="/contact" variant="outline" size="large">
              Nous contacter
            </Button>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display text-center mb-12">
            Nos Valeurs
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-coral/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🌺</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Fait Main avec Amour</h3>
              <p className="text-gray-600">
                Chaque création est unique, réalisée avec passion dans notre atelier familial
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-turquoise/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🌿</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Éco-responsable</h3>
              <p className="text-gray-600">
                Tissus naturels, production locale et emballages recyclables
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-tropical-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🏝️</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Inspiré de La Réunion</h3>
              <p className="text-gray-600">
                Des créations qui célèbrent la beauté et la douceur de vivre tropicale
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 px-4 bg-sand">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-display mb-4">
            Restez informé·e
          </h2>
          <p className="text-gray-600 mb-8">
            Inscrivez-vous pour recevoir nos nouveautés et offres exclusives
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Votre email"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-coral"
              required
            />
            <Button type="submit">S'inscrire</Button>
          </form>
          <p className="text-sm text-gray-500 mt-4">
            {shopInfo.shipping}
          </p>
        </div>
      </section>
    </>
  );
}