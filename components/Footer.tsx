import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Instagram, Facebook, Mail, Phone, MapPin, Heart } from 'lucide-react'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-black text-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-coral/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-turquoise/5 rounded-full blur-3xl"></div>
      </div>
      
      {/* Top wave decoration */}
      <div className="absolute top-0 left-0 right-0">
        <svg className="w-full h-24 fill-sand" viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path d="M0,60 C150,20 350,80 600,40 C850,0 1050,60 1200,30 C1350,0 1390,20 1440,40 L1440,0 L0,0 Z"></path>
        </svg>
      </div>
      
      <div className="container mx-auto px-4 pt-32 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-coral to-turquoise rounded-lg blur-lg opacity-30"></div>
                <div className="relative bg-white/10 rounded-lg p-2">
                  <Image 
                    src="/logo.png" 
                    alt="Eudora Couture" 
                    width={40} 
                    height={40} 
                    className="w-10 h-10 object-contain brightness-0 invert"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-display font-bold gradient-text">Eudora Couture</h3>
                <p className="text-xs text-gray-400 tracking-wider uppercase">Haute Couture</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Créations haute couture pour bébés d\'exception. 
              Chaque pièce est une œuvre unique, façonnée avec passion à La Réunion.
            </p>
            <div className="flex gap-4 pt-4">
              <a 
                href="https://instagram.com/eudoracouture" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-coral transition-colors duration-300 group"
              >
                <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a 
                href="https://facebook.com/eudoracouture" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-turquoise transition-colors duration-300 group"
              >
                <Facebook className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-display font-bold mb-6">Navigation</h4>
            <ul className="space-y-3">
              {[
                { name: 'Accueil', href: '/' },
                { name: 'Nos Créations', href: '/#creations' },
                { name: 'Sur Mesure', href: '/sur-mesure' },
                { name: 'À Propos', href: '/a-propos' },
                { name: 'Contact', href: '/contact' },
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-coral transition-colors duration-300 inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-coral group-hover:w-4 transition-all duration-300"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-display font-bold mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-coral mt-0.5" />
                <span className="text-gray-300">contact@eudoracouture.re</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-turquoise mt-0.5" />
                <span className="text-gray-300">+262 692 12 34 56</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-tropical-green mt-0.5" />
                <span className="text-gray-300">Saint-Denis, La Réunion</span>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h4 className="text-xl font-display font-bold mb-6">Newsletter</h4>
            <p className="text-gray-300 mb-4">
              Restez informé·e de nos nouveautés
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Votre email"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-coral focus:bg-white/20 transition-all duration-300 placeholder-gray-400"
              />
              <button
                type="submit"
                className="w-full px-4 py-3 bg-gradient-to-r from-coral to-turquoise text-white rounded-lg hover:shadow-lg transition-all duration-300 font-medium"
              >
                S'inscrire
              </button>
            </form>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm flex items-center gap-2">
              © {currentYear} Eudora Couture. Conçu avec 
              <Heart className="w-4 h-4 text-coral fill-coral" />
              à La Réunion
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="/mentions-legales" className="text-gray-400 hover:text-coral transition-colors">
                Mentions légales
              </Link>
              <Link href="/cgv" className="text-gray-400 hover:text-coral transition-colors">
                CGV
              </Link>
              <Link href="/confidentialite" className="text-gray-400 hover:text-coral transition-colors">
                Confidentialité
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer