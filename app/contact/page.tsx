'use client'

import React, { useState } from 'react'
import Button from '@/components/Button'
import { shopInfo } from '@/lib/data'
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Formulaire de contact soumis:', formData)
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
        <div className="absolute top-20 left-10 w-64 h-64 bg-turquoise/10 rounded-full blur-3xl float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-coral/10 rounded-full blur-3xl float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-40 right-1/3 w-48 h-48 bg-tropical-green/10 rounded-full blur-2xl float" style={{ animationDelay: '4s' }}></div>
        
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center slide-up">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6">
              Restons en <span className="gradient-text">contact</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Une demande exclusive, un projet sur-mesure ou un rendez-vous privé ? 
              Nous serions ravis de vous accompagner dans vos projets d'exception.
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

      {/* Contact Info Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Mail className="w-6 h-6" />,
                title: 'Email',
                info: shopInfo.email,
                link: `mailto:${shopInfo.email}`,
                color: 'coral'
              },
              {
                icon: <Phone className="w-6 h-6" />,
                title: 'Téléphone',
                info: shopInfo.phone,
                link: `tel:${shopInfo.phone.replace(/\s/g, '')}`,
                color: 'turquoise'
              },
              {
                icon: <MapPin className="w-6 h-6" />,
                title: 'Localisation',
                info: 'Trois Bassins, La Réunion',
                link: '#',
                color: 'tropical-green'
              },
              {
                icon: <Clock className="w-6 h-6" />,
                title: 'Horaires',
                info: 'Lun-Ven : 9h-17h',
                link: '#',
                color: 'coral'
              }
            ].map((item, index) => (
              <div key={index} className="text-center fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <a href={item.link} className="group block">
                  <div className="relative mb-4">
                    <div className={`w-20 h-20 mx-auto rounded-full bg-gradient-to-br ${
                      item.color === 'coral' ? 'from-coral/20 to-coral/30' :
                      item.color === 'turquoise' ? 'from-turquoise/20 to-turquoise/30' :
                      'from-tropical-green/20 to-tropical-green/30'
                    } flex items-center justify-center transform group-hover:scale-110 transition-all duration-500`}>
                      <span className={`${
                        item.color === 'coral' ? 'text-coral' :
                        item.color === 'turquoise' ? 'text-turquoise' :
                        'text-tropical-green'
                      }`}>
                        {item.icon}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-lg font-display font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600 group-hover:text-coral transition-colors duration-300">
                    {item.info}
                  </p>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-sand to-cream relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-coral/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-turquoise/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="slide-up">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Envoyez-nous un <span className="gradient-text">message</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Remplissez le formulaire et nous vous répondrons dans les plus brefs délais.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6 fade-in">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Nom complet
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-5 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-coral transition-colors duration-300"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-5 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-coral transition-colors duration-300"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Téléphone (optionnel)
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-5 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-coral transition-colors duration-300"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Sujet
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-5 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-coral transition-colors duration-300"
                    required
                  >
                    <option value="">Sélectionnez un sujet</option>
                    <option value="commande">Question sur une commande</option>
                    <option value="sur-mesure">Demande sur mesure</option>
                    <option value="info">Demande d'information</option>
                    <option value="partenariat">Proposition de partenariat</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-5 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-coral transition-colors duration-300 resize-none"
                    required
                  />
                </div>
                
                <Button type="submit" size="large" fullWidth className="group shadow-lg hover:shadow-xl">
                  Envoyer le message
                  <Send className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </div>
            
            {/* Map/Image placeholder */}
            <div className="relative fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="sticky top-32">
                <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                  {/* Decorative map placeholder */}
                  <div className="aspect-square bg-gradient-to-br from-turquoise/10 to-coral/10 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center space-y-4">
                        <div className="w-32 h-32 mx-auto bg-white/80 rounded-full flex items-center justify-center shadow-lg">
                          <MapPin className="w-16 h-16 text-coral" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-display font-bold mb-2">La Réunion</h3>
                          <p className="text-gray-600">Île intense, créations passionnées</p>
                        </div>
                      </div>
                    </div>
                    {/* Decorative elements */}
                    <div className="absolute top-10 left-10 w-20 h-20 bg-coral/20 rounded-full blur-xl"></div>
                    <div className="absolute bottom-10 right-10 w-32 h-32 bg-turquoise/20 rounded-full blur-xl"></div>
                  </div>
                  
                  {/* Info section */}
                  <div className="p-8">
                    <h3 className="text-2xl font-display font-bold mb-4">
                      Visitez notre atelier
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Sur rendez-vous uniquement. Venez découvrir nos créations et 
                      discuter de votre projet autour d'un café.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 text-gray-600">
                        <Clock className="w-5 h-5 text-turquoise" />
                        <span>Lundi - Vendredi : 9h00 - 17h00</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-600">
                        <Mail className="w-5 h-5 text-coral" />
                        <span>{shopInfo.email}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 slide-up">
            Suivez notre <span className="gradient-text">aventure</span>
          </h2>
          <p className="text-lg text-gray-600 mb-12 slide-up" style={{ animationDelay: '0.1s' }}>
            Rejoignez notre communauté et découvrez nos dernières créations
          </p>
          
          <div className="flex justify-center gap-8 fade-in" style={{ animationDelay: '0.2s' }}>
            {[
              { name: 'Instagram', icon: '📸', link: shopInfo.social.instagram, color: 'coral' },
              { name: 'Facebook', icon: '👍', link: shopInfo.social.facebook, color: 'turquoise' }
            ].map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className={`w-32 h-32 bg-gradient-to-br ${
                  social.color === 'coral' ? 'from-coral/20 to-coral/30' : 'from-turquoise/20 to-turquoise/30'
                } rounded-3xl flex flex-col items-center justify-center gap-2 transform hover:scale-110 transition-all duration-500 shadow-lg hover:shadow-xl`}>
                  <span className="text-4xl">{social.icon}</span>
                  <span className="font-medium">{social.name}</span>
                </div>
              </a>
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
                question: 'Quel est le délai de réponse ?',
                answer: 'Nous nous efforçons de répondre à tous les messages sous 24 à 48 heures ouvrées.'
              },
              {
                question: 'Puis-je visiter votre atelier ?',
                answer: 'Oui, sur rendez-vous uniquement. Contactez-nous pour organiser une visite.'
              },
              {
                question: 'Proposez-vous des ateliers de couture ?',
                answer: 'Nous organisons occasionnellement des ateliers. Inscrivez-vous à notre newsletter pour être informé·e.'
              },
              {
                question: 'Comment puis-je suivre ma commande ?',
                answer: 'Vous recevrez un email de confirmation avec un numéro de suivi dès l\'expédition de votre commande.'
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