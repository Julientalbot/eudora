import React from 'react'
import Link from 'next/link'
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
  ]

  const quickLinks = [
    { label: 'Mentions légales', href: '/mentions-legales' },
    { label: 'CGV', href: '/cgv' },
    { label: 'Politique de confidentialité', href: '/confidentialite' },
  ]

  return (
    <footer className="bg-gray-900 text-[#F5F3F0]">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* À propos */}
          <div>
            <h3 className="text-xl font-bold text-[#4ECDC4] mb-4">Eudora</h3>
            <p className="text-sm">
              Créations artisanales uniques inspirées par la beauté tropicale.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-[#95E1D3] mb-4">Contact</h4>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <Mail size={16} className="text-[#FF6B6B]" />
                <a href="mailto:contact@eudora.com" className="hover:text-[#4ECDC4] transition-colors">
                  contact@eudora.com
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Phone size={16} className="text-[#FF6B6B]" />
                <a href="tel:+596696000000" className="hover:text-[#4ECDC4] transition-colors">
                  +596 696 00 00 00
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <MapPin size={16} className="text-[#FF6B6B]" />
                <span>Fort-de-France, Martinique</span>
              </div>
            </div>
          </div>

          {/* Liens rapides */}
          <div>
            <h4 className="text-lg font-semibold text-[#95E1D3] mb-4">Liens rapides</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-[#4ECDC4] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Réseaux sociaux */}
          <div>
            <h4 className="text-lg font-semibold text-[#95E1D3] mb-4">Suivez-nous</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="p-2 bg-gray-800 rounded-full hover:bg-[#4ECDC4] transition-colors duration-200"
                  >
                    <Icon size={20} />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm">
          <p>&copy; {currentYear} Eudora. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer