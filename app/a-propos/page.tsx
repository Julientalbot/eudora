import React from 'react'
import Button from '@/components/Button'
import { shopInfo } from '@/lib/data'

export default function AProposPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[500px] flex items-center overflow-hidden">
        <div className="absolute inset-0 hero-pattern"></div>
        
        {/* Floating decorative elements */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-coral/10 rounded-full blur-3xl float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-turquoise/10 rounded-full blur-3xl float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-40 left-1/3 w-48 h-48 bg-tropical-green/10 rounded-full blur-2xl float" style={{ animationDelay: '4s' }}></div>
        
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center slide-up">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6">
              Notre <span className="gradient-text">histoire</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              L'excellence artisanale au service de l'amour maternel, sublimée par l'élégance tropicale de La Réunion.
            </p>
          </div>
        </div>
        
        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-24 fill-white" viewBox="0 0 1440 100" preserveAspectRatio="none">
            <path d="M0,40 C150,80 350,0 600,50 C850,100 1050,20 1200,50 C1350,80 1390,60 1440,40 L1440,100 L0,100 Z"></path>
          </svg>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <div className="slide-up">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">
                Bonjour, je suis <span className="gradient-text">{shopInfo.owner}</span>
              </h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  Bonjour, je suis {shopInfo.owner}, fondatrice d'Eudora Couture. Maman de cinq magnifiques enfants 
                  - Louis, François, Antoine, Jeanne et Eléonore ma petite dernière - j'ai découvert ma passion 
                  pour la couture lors de ma première grossesse.
                </p>
                <p>
                  Ce qui a commencé par quelques points d'aiguille pendant ma grossesse de Louis s'est enrichi 
                  à chaque nouvelle grossesse. Avec François, Antoine, Jeanne et enfin Eléonore, ma technique 
                  s'est affinée jusqu'à devenir une véritable activité à part entière.
                </p>
                <p>
                  Aujourd'hui, forte de cette expérience de maman créatrice, chaque pièce Eudora Couture 
                  porte en elle l'amour maternel et l'excellence artisanale, méticuleusement façonnée 
                  dans notre atelier à Trois Bassins pour sublimer vos moments les plus précieux.
                </p>
              </div>
            </div>
            
            {/* Image placeholder */}
            <div className="relative fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="aspect-square bg-gradient-to-br from-coral/10 to-turquoise/10 rounded-3xl relative overflow-hidden shadow-2xl">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-40 h-40 mx-auto bg-white/80 rounded-full flex items-center justify-center shadow-xl">
                      <span className="text-8xl">👩‍🎨</span>
                    </div>
                    <p className="text-gray-700 font-medium text-lg">Mathilde, créateur et maman de 5 enfants</p>
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute top-10 right-10 w-24 h-24 bg-coral/20 rounded-full blur-xl float"></div>
                <div className="absolute bottom-10 left-10 w-32 h-32 bg-turquoise/20 rounded-full blur-xl float" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-sand to-cream relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-coral/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-turquoise/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 slide-up">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              Nos <span className="gradient-text">engagements</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Des valeurs qui nous guident au quotidien dans chaque création
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              {
                icon: '🌺',
                title: 'Excellence Artisanale',
                description: 'Chaque création est une pièce unique, réalisée à la main dans notre atelier d\'exception à La Réunion avec une précision inégalée.',
                color: 'coral'
              },
              {
                icon: '🌿',
                title: 'Étoffes Nobles',
                description: 'Nous sélectionnons exclusivement des tissus de prestige certifiés biologiques, d\'une douceur incomparable et d\'une qualité irréprochable.',
                color: 'tropical-green'
              },
              {
                icon: '✨',
                title: 'Personnalisation',
                description: 'Chaque création peut être adaptée selon vos goûts : couleurs, motifs, dimensions... Votre imagination est notre seule limite.',
                color: 'turquoise'
              },
              {
                icon: '💚',
                title: 'Luxe Responsable',
                description: 'Notre engagement pour l\'excellence s\'accompagne d\'une approche éthique : emballages luxueux recyclables et approvisionnement local.',
                color: 'tropical-green'
              },
              {
                icon: '🤝',
                title: 'Service d\'Exception',
                description: 'Notre atelier d\'artisanat de luxe offre une expérience personnalisée exclusive, créant des pièces d\'héritage pour les générations futures.',
                color: 'coral'
              },
              {
                icon: '🏝️',
                title: 'Esprit Tropical',
                description: 'Nos créations s\'inspirent de la douceur de vivre réunionnaise et des couleurs chatoyantes de notre île.',
                color: 'turquoise'
              }
            ].map((value, index) => (
              <div key={index} className="fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 h-full">
                  <div className="relative mb-6">
                    <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${
                      value.color === 'coral' ? 'from-coral/20 to-coral/30' :
                      value.color === 'turquoise' ? 'from-turquoise/20 to-turquoise/30' :
                      'from-tropical-green/20 to-tropical-green/30'
                    } flex items-center justify-center mx-auto transform hover:scale-110 transition-all duration-500`}>
                      <span className="text-4xl">{value.icon}</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-4 text-center">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-center">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workshop Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image placeholder */}
            <div className="relative fade-in">
              <div className="aspect-[4/3] bg-gradient-to-br from-turquoise/10 to-coral/10 rounded-3xl relative overflow-hidden shadow-2xl">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-6">
                    <div className="w-32 h-32 mx-auto bg-white/80 rounded-full flex items-center justify-center shadow-xl">
                      <span className="text-6xl">🏠</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-display font-bold mb-2">Notre Atelier</h3>
                      <p className="text-gray-600">Trois Bassins, La Réunion</p>
                    </div>
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute top-6 left-6 w-16 h-16 bg-coral/20 rounded-full blur-lg float"></div>
                <div className="absolute bottom-6 right-6 w-24 h-24 bg-turquoise/20 rounded-full blur-lg float" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 left-6 w-12 h-12 bg-tropical-green/20 rounded-full blur-lg float" style={{ animationDelay: '2s' }}></div>
              </div>
            </div>
            
            {/* Text */}
            <div className="slide-up" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">
                L'atelier <span className="gradient-text">familial</span>
              </h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  Notre atelier d'exception situé à Trois Bassins est le sanctuaire d'Eudora Couture. 
                  C'est ici que prennent vie nos créations artisanales de luxe, dans un environnement 
                  alliant tradition artisanale et excellence contemporaine.
                </p>
                <p>
                  Chaque matin, je choisis avec soin les étoffes nobles, importées des 
                  meilleures maisons européennes. L'atelier vibre au rythme précis de nos 
                  machines professionnelles et de l'expertise artisanale raffinée.
                </p>
                <p>
                  C'est également un espace d'exception où notre clientèle exclusive vient 
                  découvrir nos collections et concevoir leurs rêves. Car derrière chaque 
                  création artisanale, il y a une histoire unique que nous sublimeons.
                </p>
              </div>
              
              <div className="mt-8">
                <Button href="/contact" size="large" className="shadow-lg hover:shadow-xl">
                  Visiter l'atelier
                  <span className="ml-2">→</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-cream to-sand relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-turquoise/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-coral/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-16 slide-up">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Notre <span className="gradient-text">parcours</span>
            </h2>
            <p className="text-lg text-gray-600">
              Les étapes clés qui ont façonné Eudora Couture
            </p>
          </div>
          
          <div className="space-y-12 fade-in">
            {[
              {
                year: '2023',
                title: 'Les premiers points avec Louis',
                description: 'Découverte de la couture pendant ma première grossesse. Louis naît le 1er juin 2023, mes premières créations commencent.',
                icon: '🧵'
              },
              {
                year: '2023-2024',
                title: 'Évolution avec chaque enfant',
                description: 'Avec l\'arrivée des autres enfants, ma technique s\'affine et ma créativité s\'enrichit à chaque nouvelle grossesse.',
                icon: '👶'
              },
              {
                year: '2024',
                title: 'Naissance d\'Eudora Couture',
                description: 'Création officielle de l\'atelier d\'artisanat de luxe et inauguration de l\'atelier d\'exception à Trois Bassins.',
                icon: '🌺'
              },
              {
                year: '2024',
                title: 'Reconnaissance locale',
                description: 'Reconnaissance par une clientèle prestigieuse et développement d\'une réputation d\'excellence sur l\'île.',
                icon: '🏝️'
              },
              {
                year: '2025',
                title: 'Expansion digitale',
                description: 'Lancement de notre boutique en ligne exclusive pour offrir l\'excellence d\'Eudora Couture au-delà de La Réunion.',
                icon: '✨'
              }
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-8">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center">
                    <span className="text-2xl">{item.icon}</span>
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-2xl font-display font-bold text-coral">{item.year}</span>
                      <h3 className="text-xl font-display font-bold">{item.title}</h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center slide-up">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Rejoignez l'<span className="gradient-text">aventure</span>
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            Découvrez nos créations et faisons ensemble de vos projets une réalité unique et personnalisée.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button href="/#creations" size="large" className="shadow-lg hover:shadow-xl">
              Voir nos créations
              <span className="ml-2">→</span>
            </Button>
            <Button href="/sur-mesure" variant="outline" size="large" className="shadow-lg hover:shadow-xl">
              Commander sur mesure
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}