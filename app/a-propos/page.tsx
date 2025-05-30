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
              Une passion née de l'amour maternel, nourrie par les couleurs et la douceur de vivre de La Réunion.
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
                  Bonjour, je suis {shopInfo.owner}, créatrice de Ti Bébé Péi. Maman de deux merveilleux enfants, 
                  j'ai découvert ma passion pour la couture lors de ma première grossesse.
                </p>
                <p>
                  Ce qui a commencé comme un hobby pour créer des pièces uniques pour mon bébé s'est 
                  transformé en une véritable vocation. Inspirée par la beauté de La Réunion et 
                  touchée par l'entraide entre mamans de l'île, j'ai décidé de partager cette passion.
                </p>
                <p>
                  Aujourd'hui, chaque création porte en elle un peu de l'âme tropicale de notre île, 
                  confectionnée avec amour dans mon atelier à Saint-Denis pour accompagner vos 
                  moments les plus précieux.
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
                    <p className="text-gray-700 font-medium text-lg">Marie, créatrice passionnée</p>
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
                title: 'Artisanat Local',
                description: 'Chaque pièce est confectionnée à la main dans notre atelier à La Réunion, en petites séries pour garantir une qualité exceptionnelle.',
                color: 'coral'
              },
              {
                icon: '🌿',
                title: 'Matériaux Naturels',
                description: 'Nous privilégions les tissus biologiques et naturels, doux pour la peau de bébé et respectueux de l\'environnement.',
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
                title: 'Éco-responsabilité',
                description: 'Nous réduisons notre impact en utilisant des chutes de tissus, des emballages recyclables et en favorisant les circuits courts.',
                color: 'tropical-green'
              },
              {
                icon: '🤝',
                title: 'Entraide Familiale',
                description: 'Notre petit atelier familial privilégie l\'humain et l\'échange, pour créer ensemble des souvenirs qui durent.',
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
                      <p className="text-gray-600">Saint-Denis, La Réunion</p>
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
                  Notre petit atelier situé à Saint-Denis est le cœur battant de Ti Bébé Péi. 
                  C'est ici que naissent toutes nos créations, dans une ambiance chaleureuse 
                  et familiale.
                </p>
                <p>
                  Chaque matin, je prépare mes tissus avec soin, sélectionnés pour leur 
                  douceur et leur qualité. L'atelier résonne du ronronnement de ma machine 
                  à coudre et parfois des rires de mes enfants qui m'accompagnent.
                </p>
                <p>
                  C'est aussi un lieu d'échange où les futures mamans viennent découvrir 
                  nos créations et partager leurs envies. Car derrière chaque commande, 
                  il y a une histoire unique que nous prenons plaisir à connaître.
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
              Les étapes clés qui ont façonné Ti Bébé Péi
            </p>
          </div>
          
          <div className="space-y-12 fade-in">
            {[
              {
                year: '2020',
                title: 'Les premiers points',
                description: 'Découverte de la couture pendant ma première grossesse. Première cape de bain pour mon bébé.',
                icon: '🧵'
              },
              {
                year: '2021',
                title: 'Partage entre mamans',
                description: 'Mes amies mamans adorent mes créations. Premières commandes pour leur entourage.',
                icon: '👶'
              },
              {
                year: '2022',
                title: 'Naissance de Ti Bébé Péi',
                description: 'Création officielle de la marque et installation de l\'atelier à Saint-Denis.',
                icon: '🌺'
              },
              {
                year: '2023',
                title: 'Reconnaissance locale',
                description: 'Participation aux marchés artisanaux et développement du bouche-à-oreille sur l\'île.',
                icon: '🏝️'
              },
              {
                year: '2024',
                title: 'Expansion digitale',
                description: 'Lancement du site web pour partager nos créations au-delà de La Réunion.',
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