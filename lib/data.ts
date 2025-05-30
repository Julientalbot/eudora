import { Product, Category } from '@/types/product';

export interface ShopInfo {
  name: string;
  tagline: string;
  description: string;
  location: string;
  shipping: string;
  customOrder: string;
  owner: string;
  email: string;
  phone: string;
  social: {
    instagram?: string;
    facebook?: string;
  };
}

export const categories: Category[] = [
  {
    id: '1',
    name: 'Sacs à langer',
    slug: 'sacs-a-langer',
    description: 'Des sacs pratiques et élégants pour toutes vos sorties avec bébé',
    image: '/images/sac-langer.jpg'
  },
  {
    id: '2',
    name: 'Capes de bain',
    slug: 'capes-de-bain',
    description: 'Douces et absorbantes, parfaites pour les moments câlins après le bain',
    image: '/images/cape-bain.jpg'
  },
  {
    id: '3',
    name: 'Trousses',
    slug: 'trousses',
    description: 'Pour ranger les petites affaires de bébé avec style',
    image: '/images/trousse.jpg'
  },
  {
    id: '4',
    name: 'Lingettes lavables',
    slug: 'lingettes',
    description: 'Écologiques et douces pour la peau de bébé',
    image: '/images/lingettes.jpg'
  }
];

export const featuredProducts: Product[] = [
  {
    id: '1',
    name: 'Sac à langer Hibiscus',
    description: 'Grand sac à langer avec motifs d\'hibiscus, parfait pour les sorties tropicales',
    price: 89,
    category: 'Sacs à langer',
    images: ['/images/sac-hibiscus.jpg'],
    customizable: true,
    inStock: true,
    isNew: true,
    materials: ['Coton bio', 'Doublure imperméable'],
    dimensions: '40 x 30 x 15 cm'
  },
  {
    id: '2',
    name: 'Cape de bain Coco',
    description: 'Cape de bain douce avec capuche et broderie palmier',
    price: 45,
    category: 'Capes de bain',
    images: ['/images/cape-coco.jpg'],
    customizable: true,
    inStock: true,
    materials: ['Éponge de bambou'],
    dimensions: '80 x 80 cm'
  },
  {
    id: '3',
    name: 'Trousse Vanille',
    description: 'Trousse multi-usage aux couleurs de l\'île, idéale pour les petites affaires',
    price: 25,
    category: 'Trousses',
    images: ['/images/trousse-vanille.jpg'],
    customizable: true,
    inStock: true,
    materials: ['Coton enduit'],
    dimensions: '20 x 15 x 5 cm'
  },
  {
    id: '4',
    name: 'Lot de lingettes Tropical',
    description: 'Set de 10 lingettes lavables avec pochette de transport',
    price: 35,
    category: 'Lingettes lavables',
    images: ['/images/lingettes-tropical.jpg'],
    customizable: false,
    inStock: true,
    isNew: true,
    materials: ['Coton bio', 'Éponge de bambou'],
    dimensions: '15 x 15 cm'
  }
];

export const shopInfo: ShopInfo = {
  name: 'Ti Bébé Péi',
  tagline: 'Créations artisanales pour bébés et mamans, inspirées de La Réunion',
  description: 'Chaque création est confectionnée avec amour dans mon atelier à Saint-Denis. Des tissus choisis avec soin, des finitions soignées, pour accompagner les moments précieux de votre famille.',
  location: 'La Réunion',
  shipping: 'Livraison gratuite à partir de 80€ à La Réunion',
  customOrder: 'Toutes nos créations sont personnalisables selon vos envies',
  owner: 'Marie',
  email: 'contact@tibebepei.re',
  phone: '+262 692 12 34 56',
  social: {
    instagram: 'https://instagram.com/tibebepei',
    facebook: 'https://facebook.com/tibebepei'
  }
};