import Button from '@/components/Button';
import { shopInfo } from '@/lib/data';

export default function SurMesure() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-tropical-green/20 to-turquoise/20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-display mb-4">
            Créations Sur Mesure
          </h1>
          <p className="text-lg text-gray-700">
            Donnez vie à vos idées avec nos créations personnalisées
          </p>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display text-center mb-12">
            Comment ça marche ?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-coral/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-coral">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Votre idée</h3>
              <p className="text-gray-600">
                Partagez-nous votre projet et vos inspirations
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-turquoise/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-turquoise">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Conception</h3>
              <p className="text-gray-600">
                Nous créons ensemble le design parfait pour vous
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-tropical-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-tropical-green">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Fabrication</h3>
              <p className="text-gray-600">
                Confection artisanale avec les meilleurs matériaux
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-coral/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-coral">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Livraison</h3>
              <p className="text-gray-600">
                Votre création unique livrée avec soin
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Examples Section */}
      <section className="py-16 px-4 bg-sand">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display text-center mb-12">
            Exemples de Créations Sur Mesure
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-cream rounded-lg p-6 shadow-md">
              <div className="aspect-square bg-gradient-to-br from-coral/10 to-coral/20 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-6xl">👶</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Trousseau de naissance</h3>
              <p className="text-gray-600">
                Un ensemble complet personnalisé avec le prénom de bébé brodé
              </p>
            </div>
            
            <div className="bg-cream rounded-lg p-6 shadow-md">
              <div className="aspect-square bg-gradient-to-br from-turquoise/10 to-turquoise/20 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-6xl">🎁</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Coffret cadeau</h3>
              <p className="text-gray-600">
                Une sélection sur mesure pour un cadeau de naissance unique
              </p>
            </div>
            
            <div className="bg-cream rounded-lg p-6 shadow-md">
              <div className="aspect-square bg-gradient-to-br from-tropical-green/10 to-tropical-green/20 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-6xl">👗</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Tenue spéciale</h3>
              <p className="text-gray-600">
                Une création unique pour un événement particulier
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display text-center mb-12">
            Tarifs Indicatifs
          </h2>
          
          <div className="bg-cream rounded-lg p-8 shadow-md">
            <p className="text-gray-700 mb-6">
              Les tarifs varient selon la complexité du projet, les matériaux choisis et le temps de confection nécessaire. 
              Voici quelques exemples pour vous donner une idée :
            </p>
            
            <ul className="space-y-4 mb-8">
              <li className="flex justify-between items-center py-3 border-b border-gray-200">
                <span className="font-medium">Bavoirs personnalisés (lot de 3)</span>
                <span className="text-coral font-semibold">À partir de 25€</span>
              </li>
              <li className="flex justify-between items-center py-3 border-b border-gray-200">
                <span className="font-medium">Sac à langer sur mesure</span>
                <span className="text-coral font-semibold">À partir de 65€</span>
              </li>
              <li className="flex justify-between items-center py-3 border-b border-gray-200">
                <span className="font-medium">Trousseau complet personnalisé</span>
                <span className="text-coral font-semibold">À partir de 120€</span>
              </li>
              <li className="flex justify-between items-center py-3 border-b border-gray-200">
                <span className="font-medium">Tenue de cérémonie</span>
                <span className="text-coral font-semibold">Sur devis</span>
              </li>
            </ul>
            
            <p className="text-sm text-gray-600 italic">
              Devis gratuit et sans engagement pour tout projet
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-coral/10 to-turquoise/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-display mb-4">
            Prêt·e à créer votre projet unique ?
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Contactez-nous pour discuter de votre projet et obtenir un devis personnalisé
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" size="large">
              Demander un devis
            </Button>
            <Button href="/" variant="outline" size="large">
              Voir nos créations
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display text-center mb-12">
            Questions Fréquentes
          </h2>
          
          <div className="space-y-6">
            <div className="bg-sand rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Quel est le délai de fabrication ?</h3>
              <p className="text-gray-700">
                Le délai varie selon la complexité du projet, généralement entre 2 et 4 semaines. 
                Nous vous informerons du délai exact lors de la validation de votre commande.
              </p>
            </div>
            
            <div className="bg-sand rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Puis-je choisir mes tissus ?</h3>
              <p className="text-gray-700">
                Absolument ! Nous vous proposerons une sélection de tissus de qualité adaptés à votre projet. 
                Vous pouvez aussi nous fournir vos propres tissus si vous le souhaitez.
              </p>
            </div>
            
            <div className="bg-sand rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Est-il possible de personnaliser avec une broderie ?</h3>
              <p className="text-gray-700">
                Oui, nous proposons des broderies personnalisées (prénom, date, motif) sur la plupart de nos créations. 
                Un supplément peut s'appliquer selon la complexité.
              </p>
            </div>
            
            <div className="bg-sand rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Livrez-vous en dehors de La Réunion ?</h3>
              <p className="text-gray-700">
                {shopInfo.shipping} Les frais de port seront calculés selon la destination et le poids du colis.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}