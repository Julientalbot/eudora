import Link from 'next/link';
import Hero from '@/components/Hero';
import ProductCard from '@/components/ProductCard';
import Button from '@/components/Button';
import { featuredProducts, categories, shopInfo } from '@/lib/data';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <Hero
        title="Eudora Couture"
        subtitle={shopInfo.tagline}
        description={shopInfo.description}
        primaryCTA={{ label: "Découvrir les créations", href: "#creations" }}
        secondaryCTA={{ label: "Commander sur mesure", href: "/sur-mesure" }}
      />

      {/* Categories Section */}
      <section className="py-24 px-6 lg:px-12 bg-sand relative overflow-hidden texture-linen">
        {/* Background decorations */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-coral/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-turquoise/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 slide-up">
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="w-12 h-[1px] bg-coral/40" />
              <span className="text-sm font-body font-medium tracking-[0.2em] uppercase text-coral">Collections</span>
              <span className="w-12 h-[1px] bg-coral/40" />
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold text-charcoal mb-6">
              Nos <span className="gradient-text">Créations</span>
            </h2>
            <p className="text-lg text-warm-gray max-w-2xl mx-auto font-body leading-relaxed">
              Chaque création est une oeuvre d'art unique, façonnée dans notre atelier à La Réunion,
              avec des étoffes nobles sélectionnées pour leur qualité supérieure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <Link
                key={category.id}
                href={`/categorie/${category.slug}`}
                className="group relative fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="relative bg-cream rounded-3xl p-8 transition-all duration-500 group-hover:shadow-elevated group-hover:-translate-y-2">
                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-coral/10 to-transparent rounded-tr-3xl" />

                  {/* Icon */}
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-coral/10 to-turquoise/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <span className="text-4xl">
                        {category.id === '1' && '🛁'}
                        {category.id === '2' && '🌿'}
                        {category.id === '3' && '👶'}
                      </span>
                    </div>
                    {/* Decorative dot */}
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-gold rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  {/* Content */}
                  <h3 className="font-display text-2xl font-semibold text-charcoal mb-3 group-hover:text-coral transition-colors duration-300">
                    {category.name}
                  </h3>
                  <p className="text-warm-gray font-body text-sm leading-relaxed mb-6">
                    {category.description}
                  </p>

                  {/* CTA */}
                  <div className="flex items-center gap-2 text-coral font-body font-medium text-sm">
                    <span>Découvrir</span>
                    <svg
                      className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>

                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-8 right-8 h-0.5 bg-gradient-to-r from-coral via-turquoise to-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-full" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="creations" className="py-24 px-6 lg:px-12 bg-cream relative">
        {/* Stitch decoration */}
        <div className="divider-stitch max-w-xs mx-auto mb-16" />

        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 slide-up">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold text-charcoal mb-6">
              Pièces <span className="gradient-text">d'Exception</span>
            </h2>
            <p className="text-lg text-warm-gray font-body">
              Nos créations phares, prisées par une clientèle exigeante
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, index) => (
              <div key={product.id} className="fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <ProductCard
                  id={product.id}
                  title={product.name}
                  description={product.description}
                  price={product.price}
                  imageUrl={product.images[0] || "/images/placeholder.svg"}
                  category={product.category}
                  isNew={product.isNew}
                  isSoldOut={!product.inStock}
                />
              </div>
            ))}
          </div>

          {/* View all link */}
          <div className="text-center mt-12">
            <Button href="/galerie" variant="outline" size="large">
              Voir toutes les créations
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Button>
          </div>
        </div>
      </section>

      {/* Custom Order CTA */}
      <section className="py-24 px-6 lg:px-12 relative overflow-hidden">
        {/* Layered background */}
        <div className="absolute inset-0 bg-gradient-to-br from-coral/5 via-sand to-turquoise/5" />
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-coral/10 rounded-full blur-3xl float-slow" />
        <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-turquoise/10 rounded-full blur-3xl float-slow" style={{ animationDelay: '4s' }} />

        {/* Stitch lines decoration */}
        <svg className="absolute top-20 left-20 w-32 h-32 opacity-10" viewBox="0 0 100 100">
          <path d="M10,50 Q30,30 50,50 T90,50" fill="none" stroke="#E07A5F" strokeWidth="2" strokeDasharray="8 6" />
        </svg>
        <svg className="absolute bottom-20 right-20 w-40 h-40 opacity-10 rotate-180" viewBox="0 0 100 100">
          <path d="M10,50 Q30,70 50,50 T90,50" fill="none" stroke="#3D9A8B" strokeWidth="2" strokeDasharray="8 6" />
        </svg>

        <div className="max-w-4xl mx-auto text-center relative z-10 slide-up">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="w-8 h-8 bg-gold/20 rounded-full flex items-center justify-center">
              <span className="text-lg">✨</span>
            </span>
            <span className="text-sm font-body font-medium tracking-[0.2em] uppercase text-gold">Sur mesure</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold text-charcoal mb-6">
            Une envie <span className="gradient-text">particulière</span> ?
          </h2>
          <p className="text-xl text-warm-gray mb-10 max-w-2xl mx-auto font-body leading-relaxed">
            {shopInfo.customOrder}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/sur-mesure" size="large">
              Commander sur mesure
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </Button>
            <Button href="/contact" variant="outline" size="large">
              Nous contacter
            </Button>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 px-6 lg:px-12 bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 slide-up">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold text-charcoal mb-6">
              Nos <span className="gradient-text">Valeurs</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                ),
                color: 'coral',
                title: 'Artisanat d\'Excellence',
                description: 'Chaque pièce est une oeuvre unique, conçue avec une expertise artisanale d\'exception'
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                ),
                color: 'turquoise',
                title: 'Luxe Durable',
                description: 'Étoffes nobles et naturelles, production éthique et emballages d\'exception recyclables'
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
                color: 'gold',
                title: 'Essence de La Réunion',
                description: 'Des créations exclusives qui subliment l\'art de vivre tropical avec élégance'
              }
            ].map((value, index) => (
              <div key={index} className="text-center group fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="relative mb-8">
                  <div className={`
                    w-24 h-24 mx-auto rounded-2xl flex items-center justify-center
                    transition-all duration-500 group-hover:scale-110 group-hover:rotate-3
                    ${value.color === 'coral' ? 'bg-coral/10 text-coral' : ''}
                    ${value.color === 'turquoise' ? 'bg-turquoise/10 text-turquoise' : ''}
                    ${value.color === 'gold' ? 'bg-gold/10 text-gold' : ''}
                  `}>
                    {value.icon}
                  </div>
                  {/* Decorative ring */}
                  <div className={`
                    absolute inset-0 w-24 h-24 mx-auto rounded-2xl border-2 opacity-0 group-hover:opacity-100
                    transition-all duration-500 group-hover:scale-125 group-hover:-rotate-3
                    ${value.color === 'coral' ? 'border-coral/20' : ''}
                    ${value.color === 'turquoise' ? 'border-turquoise/20' : ''}
                    ${value.color === 'gold' ? 'border-gold/20' : ''}
                  `} />
                </div>
                <h3 className="text-2xl font-display font-semibold text-charcoal mb-4 group-hover:text-coral transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-warm-gray font-body leading-relaxed max-w-xs mx-auto">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 px-6 lg:px-12 bg-sand relative overflow-hidden texture-linen">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-coral/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-turquoise/5 rounded-full blur-3xl" />

        <div className="max-w-2xl mx-auto text-center relative z-10 slide-up">
          <h2 className="text-4xl md:text-5xl font-display font-semibold text-charcoal mb-6">
            Restez <span className="gradient-text">informé</span>
          </h2>
          <p className="text-lg text-warm-gray mb-10 max-w-xl mx-auto font-body">
            Inscrivez-vous pour recevoir nos nouveautés et offres exclusives
          </p>

          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Votre email"
              className="
                flex-1 px-6 py-4 bg-cream rounded-full
                border-2 border-transparent
                focus:outline-none focus:border-coral
                font-body text-charcoal placeholder:text-warm-gray/50
                shadow-soft transition-all duration-300
              "
              required
            />
            <Button type="submit" size="large">
              S'inscrire
            </Button>
          </form>

          <p className="text-sm text-warm-gray mt-8 flex items-center justify-center gap-2 font-body">
            <svg className="w-5 h-5 text-turquoise" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3l14 9-14 9V3z" />
            </svg>
            {shopInfo.shipping}
          </p>
        </div>
      </section>
    </div>
  );
}
