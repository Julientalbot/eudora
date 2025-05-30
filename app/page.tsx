import Hero from '@/components/Hero';
import ProductCard from '@/components/ProductCard';
import Button from '@/components/Button';
import { featuredProducts, categories, shopInfo } from '@/lib/data';

export default function Home() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <Hero
        title="Ti Bébé Péi"
        subtitle={shopInfo.tagline}
        description={shopInfo.description}
        primaryCTA={{ label: "Découvrir les créations", href: "#creations" }}
        secondaryCTA={{ label: "Commander sur mesure", href: "/sur-mesure" }}
      />

      {/* Categories Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-sand to-cream relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-coral/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-turquoise/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 slide-up">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              Nos <span className="gradient-text">Créations</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Chaque pièce est confectionnée avec soin dans notre atelier à La Réunion, 
              avec des tissus sélectionnés pour leur qualité et leur douceur.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <div
                key={category.id}
                className="group cursor-pointer fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative">
                  <div className="aspect-square bg-white rounded-2xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-2">
                    <div className="w-full h-full bg-gradient-to-br from-tropical-green/10 to-turquoise/10 flex items-center justify-center relative">
                      {/* Decorative circle */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-32 h-32 bg-white/50 rounded-full blur-xl"></div>
                      </div>
                      <span className="text-6xl relative z-10 transform group-hover:scale-110 transition-transform duration-500">
                        {category.id === '1' && '👜'}
                        {category.id === '2' && '🛁'}
                        {category.id === '3' && '👝'}
                        {category.id === '4' && '🌿'}
                      </span>
                    </div>
                  </div>
                  {/* Hover accent */}
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-coral to-turquoise rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="text-center mt-6">
                  <h3 className="font-display font-bold text-xl mb-2 group-hover:text-coral transition-colors duration-300">
                    {category.name}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{category.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="creations" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 slide-up">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              Produits <span className="gradient-text">Phares</span>
            </h2>
            <p className="text-lg text-gray-600">
              Nos créations les plus appréciées par les mamans de l'île
            </p>
          </div>
          
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
      <section className="py-24 px-4 relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-br from-coral/10 via-turquoise/10 to-tropical-green/10">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-20 left-10 w-64 h-64 bg-coral/20 rounded-full blur-3xl float"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-turquoise/20 rounded-full blur-3xl float" style={{ animationDelay: '2s' }}></div>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10 slide-up">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
            Une envie <span className="gradient-text">particulière</span> ?
          </h2>
          <p className="text-xl text-gray-700 mb-10 max-w-2xl mx-auto leading-relaxed">
            {shopInfo.customOrder}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button href="/sur-mesure" size="large" className="group shadow-lg hover:shadow-xl">
              Commander sur mesure
              <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">→</span>
            </Button>
            <Button href="/contact" variant="outline" size="large" className="shadow-lg hover:shadow-xl">
              Nous contacter
            </Button>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-white to-sand">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 slide-up">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              Nos <span className="gradient-text">Valeurs</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: '🌺',
                color: 'coral',
                title: 'Fait Main avec Amour',
                description: 'Chaque création est unique, réalisée avec passion dans notre atelier familial'
              },
              {
                icon: '🌿',
                color: 'turquoise',
                title: 'Éco-responsable',
                description: 'Tissus naturels, production locale et emballages recyclables'
              },
              {
                icon: '🏝️',
                color: 'tropical-green',
                title: 'Inspiré de La Réunion',
                description: 'Des créations qui célèbrent la beauté et la douceur de vivre tropicale'
              }
            ].map((value, index) => (
              <div key={index} className="text-center group fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="relative mb-8">
                  <div className={`w-32 h-32 bg-gradient-to-br ${
                    value.color === 'coral' ? 'from-coral/10 to-coral/20' :
                    value.color === 'turquoise' ? 'from-turquoise/10 to-turquoise/20' :
                    'from-tropical-green/10 to-tropical-green/20'
                  } rounded-full flex items-center justify-center mx-auto transform group-hover:scale-110 transition-all duration-500`}>
                    <span className="text-5xl relative z-10">{value.icon}</span>
                    <div className={`absolute inset-0 bg-gradient-to-br ${
                      value.color === 'coral' ? 'from-coral/20 to-coral/30' :
                      value.color === 'turquoise' ? 'from-turquoise/20 to-turquoise/30' :
                      'from-tropical-green/20 to-tropical-green/30'
                    } rounded-full blur-xl group-hover:blur-2xl transition-all duration-500`}></div>
                  </div>
                </div>
                <h3 className="text-2xl font-display font-bold mb-4 group-hover:text-coral transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed max-w-xs mx-auto">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 px-4 bg-gradient-to-br from-sand via-cream to-sand relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-coral/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-turquoise/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-2xl mx-auto text-center relative z-10 slide-up">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Restez <span className="gradient-text">informé·e</span>
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-xl mx-auto">
            Inscrivez-vous pour recevoir nos nouveautés et offres exclusives
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Votre email"
              className="flex-1 px-6 py-4 rounded-full border-2 border-gray-200 focus:outline-none focus:border-coral transition-colors duration-300 text-center sm:text-left shadow-sm"
              required
            />
            <Button type="submit" size="large" className="rounded-full shadow-lg hover:shadow-xl">
              S'inscrire
            </Button>
          </form>
          <p className="text-sm text-gray-500 mt-6 flex items-center justify-center gap-2">
            <span className="text-lg">✈️</span>
            {shopInfo.shipping}
          </p>
        </div>
      </section>
    </div>
  );
}