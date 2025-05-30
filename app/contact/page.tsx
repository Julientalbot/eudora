'use client';

import { useState } from 'react';
import Button from '@/components/Button';
import { shopInfo } from '@/lib/data';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission
    console.log('Form submitted:', formData);
    alert('Merci pour votre message ! Nous vous répondrons dans les plus brefs délais.');
  };

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-turquoise/20 to-tropical-green/20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-display mb-4">
            Contactez-nous
          </h1>
          <p className="text-lg text-gray-700">
            Une question, un projet sur mesure ? Nous sommes là pour vous !
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="w-20 h-20 bg-coral/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📧</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-gray-600">
                {shopInfo.email}
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-turquoise/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📱</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Téléphone</h3>
              <p className="text-gray-600">
                {shopInfo.phone}
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Du lundi au vendredi, 9h-17h
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-tropical-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📍</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Localisation</h3>
              <p className="text-gray-600">
                {shopInfo.location}
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Atelier sur rendez-vous
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display text-center mb-12">
              Envoyez-nous un message
            </h2>
            
            <form onSubmit={handleSubmit} className="bg-sand rounded-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-coral"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-coral"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-coral"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Sujet *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-coral"
                  >
                    <option value="">Sélectionnez un sujet</option>
                    <option value="info">Demande d'information</option>
                    <option value="custom">Projet sur mesure</option>
                    <option value="order">Question sur une commande</option>
                    <option value="other">Autre</option>
                  </select>
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-coral resize-none"
                  placeholder="Décrivez votre projet ou posez votre question..."
                />
              </div>
              
              <div className="text-center">
                <Button type="submit" size="large">
                  Envoyer le message
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-16 px-4 bg-cream">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-display mb-8">
            Suivez-nous sur les réseaux
          </h2>
          <p className="text-gray-600 mb-8">
            Découvrez nos dernières créations et coulisses de l'atelier
          </p>
          
          <div className="flex justify-center space-x-6">
            {shopInfo.social.instagram && (
              <a
                href={shopInfo.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-coral/20 rounded-full flex items-center justify-center hover:bg-coral/30 transition-colors"
              >
                <span className="text-2xl">📷</span>
              </a>
            )}
            {shopInfo.social.facebook && (
              <a
                href={shopInfo.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-turquoise/20 rounded-full flex items-center justify-center hover:bg-turquoise/30 transition-colors"
              >
                <span className="text-2xl">👍</span>
              </a>
            )}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-display text-center mb-12">
            Questions Fréquentes
          </h2>
          
          <div className="space-y-6">
            <div className="bg-sand rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Quels sont vos délais de réponse ?</h3>
              <p className="text-gray-700">
                Nous nous efforçons de répondre à tous les messages dans un délai de 24 à 48 heures ouvrées.
              </p>
            </div>
            
            <div className="bg-sand rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Puis-je visiter votre atelier ?</h3>
              <p className="text-gray-700">
                Oui ! Notre atelier est ouvert sur rendez-vous. Contactez-nous pour organiser une visite.
              </p>
            </div>
            
            <div className="bg-sand rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Proposez-vous des partenariats ?</h3>
              <p className="text-gray-700">
                Nous sommes ouverts aux collaborations avec des boutiques, crèches et autres professionnels. 
                N'hésitez pas à nous contacter pour en discuter.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}