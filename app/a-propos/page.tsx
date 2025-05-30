import Button from '@/components/Button';
import { shopInfo } from '@/lib/data';

export default function APropos() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-coral/20 to-tropical-green/20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-display mb-4">
            À Propos de Ti Bébé Péi
          </h1>
          <p className="text-lg text-gray-700">
            L'histoire d'une passion devenue métier
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="aspect-square bg-gradient-to-br from-turquoise/20 to-tropical-green/20 rounded-lg flex items-center justify-center">
                <span className="text-8xl">🧵</span>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-display mb-6">
                Mon Histoire
              </h2>
              <p className="text-gray-700 mb-4">
                Bonjour, je suis {shopInfo.owner}, créatrice de Ti Bébé Péi. Maman de deux merveilleux enfants, 
                j'ai découvert ma passion pour la couture lors de ma première grossesse.
              </p>
              <p className="text-gray-700 mb-4">
                Ce qui a commencé comme un simple loisir pour préparer l'arrivée de mon premier enfant 
                s'est rapidement transformé en une véritable passion. Les amies et la famille ont adoré 
                mes créations, et les commandes ont commencé à affluer.
              </p>
              <p className="text-gray-700">
                Aujourd'hui, Ti Bébé Péi est mon activité à plein temps, et je suis ravie de pouvoir 
                accompagner les familles réunionnaises dans les moments les plus précieux de leur vie.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 bg-sand">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display text-center mb-12">
            Nos Valeurs
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-coral/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">❤️</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Amour du détail</h3>
              <p className="text-gray-600">
                Chaque point, chaque finition est réalisé avec soin et attention
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-turquoise/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🌱</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Durabilité</h3>
              <p className="text-gray-600">
                Des créations conçues pour durer et se transmettre
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-tropical-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🏝️</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Identité locale</h3>
              <p className="text-gray-600">
                Des motifs et couleurs inspirés de notre belle île
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-coral/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Proximité</h3>
              <p className="text-gray-600">
                Un service personnalisé et une écoute attentive
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Workshop Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display text-center mb-12">
            Notre Atelier
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Un espace de création</h3>
              <p className="text-gray-700 mb-4">
                Situé à {shopInfo.location}, notre atelier est un véritable cocon de créativité. 
                C'est ici que naissent toutes nos collections, dans une ambiance chaleureuse et inspirante.
              </p>
              <p className="text-gray-700 mb-4">
                Équipé d'un matériel professionnel et entouré de tissus soigneusement sélectionnés, 
                c'est un lieu où la passion rencontre le savoir-faire.
              </p>
              <p className="text-gray-700">
                Les visites sont possibles sur rendez-vous, n'hésitez pas à nous contacter !
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square bg-gradient-to-br from-coral/10 to-coral/20 rounded-lg flex items-center justify-center">
                <span className="text-5xl">✂️</span>
              </div>
              <div className="aspect-square bg-gradient-to-br from-turquoise/10 to-turquoise/20 rounded-lg flex items-center justify-center">
                <span className="text-5xl">🧷</span>
              </div>
              <div className="aspect-square bg-gradient-to-br from-tropical-green/10 to-tropical-green/20 rounded-lg flex items-center justify-center">
                <span className="text-5xl">🪡</span>
              </div>
              <div className="aspect-square bg-gradient-to-br from-sand to-cream rounded-lg flex items-center justify-center">
                <span className="text-5xl">📏</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 px-4 bg-cream">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-display mb-12">
            Nos Engagements
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="w-16 h-16 bg-coral/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏆</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Qualité Premium</h3>
              <p className="text-gray-600 text-sm">
                Tissus certifiés Oeko-Tex, sans substances nocives
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="w-16 h-16 bg-turquoise/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">♻️</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Éco-responsable</h3>
              <p className="text-gray-600 text-sm">
                Production locale et emballages recyclables
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="w-16 h-16 bg-tropical-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌟</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Fait Main</h3>
              <p className="text-gray-600 text-sm">
                100% artisanal, chaque pièce est unique
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display text-center mb-12">
            Notre Parcours
          </h2>
          
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-coral rounded-full flex items-center justify-center text-white font-bold">
                2019
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-semibold mb-2">Les débuts</h3>
                <p className="text-gray-700">
                  Premiers pas dans la couture, création des premières pièces pour mon bébé
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-turquoise rounded-full flex items-center justify-center text-white font-bold">
                2020
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-semibold mb-2">Naissance de Ti Bébé Péi</h3>
                <p className="text-gray-700">
                  Création officielle de la marque et premières commandes clients
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-tropical-green rounded-full flex items-center justify-center text-white font-bold">
                2022
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-semibold mb-2">Développement</h3>
                <p className="text-gray-700">
                  Élargissement de la gamme, participation aux marchés artisanaux locaux
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-coral rounded-full flex items-center justify-center text-white font-bold">
                2024
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-semibold mb-2">Aujourd'hui</h3>
                <p className="text-gray-700">
                  Un atelier établi, des centaines de familles satisfaites, et toujours la même passion !
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-coral/10 to-turquoise/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-display mb-4">
            Envie d'en savoir plus ?
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Suivez nos aventures créatives et découvrez nos dernières collections
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" size="large">
              Contactez-nous
            </Button>
            <Button href="/" variant="outline" size="large">
              Découvrir nos créations
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}