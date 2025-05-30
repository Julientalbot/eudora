'use client'

import React, { useState } from 'react'
import Button from '@/components/Button'
import { shopInfo } from '@/lib/data'

export default function SurMesurePage() {
  const [formData, setFormData] = useState({
    productType: '',
    fabric: '',
    colors: '',
    dimensions: '',
    personalization: '',
    additionalNotes: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Demande sur mesure:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[500px] flex items-center overflow-hidden">
        <div className="absolute inset-0 hero-pattern"></div>
        
        {/* Floating decorative elements */}
        <div className="absolute top-20 right-10 w-64 h-64 bg-coral/10 rounded-full blur-3xl float"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-turquoise/10 rounded-full blur-3xl float" style={{ animationDelay: '2s' }}></div>
        
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center slide-up">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6">
              Créations <span className="gradient-text">Sur Mesure</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Imaginez la création de vos rêves, nous la réalisons avec passion. 
              Chaque détail compte pour créer une pièce unique qui vous ressemble.
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

      {/* Process Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 slide-up">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Comment ça <span className="gradient-text">marche</span> ?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Un processus simple et personnalisé pour créer votre pièce unique
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '1',
                title: 'Votre idée',
                description: 'Décrivez-nous votre projet et vos envies',
                icon: '💭',
                color: 'coral'
              },
              {
                step: '2',
                title: 'Devis gratuit',
                description: 'Recevez une proposition détaillée sous 48h',
                icon: '📋',
                color: 'turquoise'
              },
              {
                step: '3',
                title: 'Création',
                description: 'Confection artisanale dans notre atelier',
                icon: '✂️',
                color: 'tropical-green'
              },
              {
                step: '4',
                title: 'Livraison',
                description: 'Recevez votre création unique chez vous',
                icon: '📦',
                color: 'coral'
              }
            ].map((item, index) => (
              <div key={index} className="text-center fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="relative mb-6">
                  <div className={`w-24 h-24 mx-auto rounded-full bg-gradient-to-br ${
                    item.color === 'coral' ? 'from-coral/20 to-coral/30' :
                    item.color === 'turquoise' ? 'from-turquoise/20 to-turquoise/30' :
                    'from-tropical-green/20 to-tropical-green/30'
                  } flex items-center justify-center transform hover:scale-110 transition-all duration-500`}>
                    <span className="text-4xl">{item.icon}</span>
                  </div>
                  <div className="absolute -top-2 -right-2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center">
                    <span className="font-bold text-gray-800">{item.step}</span>
                  </div>
                </div>
                <h3 className="text-xl font-display font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-sand to-cream relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-turquoise/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-coral/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-12 slide-up">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Demandez votre <span className="gradient-text">devis</span>
            </h2>
            <p className="text-lg text-gray-600">
              Gratuit et sans engagement
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 space-y-8 fade-in">
            {/* Product Type */}
            <div>
              <label className="block text-lg font-display font-semibold mb-3">
                Type de création souhaité
              </label>
              <select
                name="productType"
                value={formData.productType}
                onChange={handleChange}
                className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-coral transition-colors duration-300"
                required
              >
                <option value="">Sélectionnez un type de produit</option>
                <option value="sac-langer">Sac à langer</option>
                <option value="cape-bain">Cape de bain</option>
                <option value="trousse">Trousse</option>
                <option value="lingettes">Lingettes lavables</option>
                <option value="autre">Autre (précisez dans les notes)</option>
              </select>
            </div>

            {/* Grid for other fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Fabric */}
              <div>
                <label className="block text-lg font-display font-semibold mb-3">
                  Tissu préféré
                </label>
                <input
                  type="text"
                  name="fabric"
                  value={formData.fabric}
                  onChange={handleChange}
                  placeholder="Ex: Coton bio, lin, éponge bambou..."
                  className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-coral transition-colors duration-300"
                />
              </div>

              {/* Colors */}
              <div>
                <label className="block text-lg font-display font-semibold mb-3">
                  Couleurs souhaitées
                </label>
                <input
                  type="text"
                  name="colors"
                  value={formData.colors}
                  onChange={handleChange}
                  placeholder="Ex: Corail et turquoise, pastel..."
                  className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-coral transition-colors duration-300"
                />
              </div>

              {/* Dimensions */}
              <div>
                <label className="block text-lg font-display font-semibold mb-3">
                  Dimensions
                </label>
                <input
                  type="text"
                  name="dimensions"
                  value={formData.dimensions}
                  onChange={handleChange}
                  placeholder="Ex: 40x30cm, taille standard..."
                  className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-coral transition-colors duration-300"
                />
              </div>

              {/* Personalization */}
              <div>
                <label className="block text-lg font-display font-semibold mb-3">
                  Personnalisation
                </label>
                <input
                  type="text"
                  name="personalization"
                  value={formData.personalization}
                  onChange={handleChange}
                  placeholder="Ex: Prénom brodé, motif..."
                  className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-coral transition-colors duration-300"
                />
              </div>
            </div>

            {/* Additional Notes */}
            <div>
              <label className="block text-lg font-display font-semibold mb-3">
                Informations complémentaires
              </label>
              <textarea
                name="additionalNotes"
                value={formData.additionalNotes}
                onChange={handleChange}
                rows={4}
                placeholder="Décrivez votre projet en détail..."
                className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-coral transition-colors duration-300 resize-none"
              />
            </div>

            {/* Submit Button */}
            <div className="text-center pt-4">
              <Button type="submit" size="large" className="min-w-[200px] shadow-lg hover:shadow-xl">
                Envoyer ma demande
                <span className="ml-2">→</span>
              </Button>
            </div>
          </form>
        </div>
      </section>

      {/* Examples Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 slide-up">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Exemples de <span className="gradient-text">réalisations</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Découvrez quelques créations sur mesure réalisées pour nos clients
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Sac à langer XXL',
                description: 'Avec compartiments personnalisés et prénom brodé',
                color: 'coral'
              },
              {
                title: 'Cape de bain koala',
                description: 'Broderie personnalisée et oreilles 3D',
                color: 'turquoise'
              },
              {
                title: 'Set naissance complet',
                description: 'Sac, cape, lingettes et pochette assortis',
                color: 'tropical-green'
              }
            ].map((example, index) => (
              <div key={index} className="group fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-500">
                  <div className={`aspect-square bg-gradient-to-br ${
                    example.color === 'coral' ? 'from-coral/20 to-coral/30' :
                    example.color === 'turquoise' ? 'from-turquoise/20 to-turquoise/30' :
                    'from-tropical-green/20 to-tropical-green/30'
                  } flex items-center justify-center`}>
                    <div className="text-6xl transform group-hover:scale-110 transition-transform duration-500">
                      {example.color === 'coral' && '👜'}
                      {example.color === 'turquoise' && '🐨'}
                      {example.color === 'tropical-green' && '🎁'}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-display font-bold mb-2">{example.title}</h3>
                    <p className="text-gray-600">{example.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-cream to-sand">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 slide-up">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Questions <span className="gradient-text">fréquentes</span>
            </h2>
          </div>
          
          <div className="space-y-6 fade-in">
            {[
              {
                question: 'Quel est le délai de réalisation ?',
                answer: 'Le délai moyen est de 2 à 3 semaines après validation du devis, selon la complexité de la création.'
              },
              {
                question: 'Puis-je voir un aperçu avant la réalisation ?',
                answer: 'Oui, nous vous envoyons des photos des tissus sélectionnés et un croquis si nécessaire.'
              },
              {
                question: 'Les prix sont-ils plus élevés pour du sur mesure ?',
                answer: `Les tarifs dépendent de la complexité du projet. Un sac à langer sur mesure démarre à partir de 95€.`
              },
              {
                question: 'Livrez-vous en métropole ?',
                answer: `Oui, nous livrons partout en France et dans les DOM-TOM. ${shopInfo.shipping}`
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-display font-bold mb-3 text-gray-800">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}