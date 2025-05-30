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
    name: 'Sacs Couture',
    slug: 'sacs-couture',
    description: 'Sacs de luxe alliant élégance et fonctionnalité pour accompagner vos sorties',
    image: '/images/sac-langer.jpg'
  },
  {
    id: '2',
    name: 'Capes de Bain Prestige',
    slug: 'capes-prestige',
    description: 'Enveloppements luxueux en tissus nobles pour des moments de tendresse d\'exception',
    image: '/images/cape-bain.jpg'
  },
  {
    id: '3',
    name: 'Pochettes Raffinées',
    slug: 'pochettes-raffinees',
    description: 'Accessoires élégants pour organiser les essentiels avec sophistication',
    image: '/images/trousse.jpg'
  },
  {
    id: '4',
    name: 'Collection Soins Deluxe',
    slug: 'soins-deluxe',
    description: 'Lingettes lavables en fibres nobles pour une douceur inégalée',
    image: '/images/lingettes.jpg'
  }
];

export const featuredProducts: Product[] = [
  {
    id: '1',
    name: 'Sac Couture Hibiscus',
    description: 'Sac à langer de luxe en lin français brodé à la main, motifs d\'hibiscus délicatement ourlés',
    price: 189,
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
    name: 'Cape de Bain Royale',
    description: 'Cape en éponge de bambou premium avec capuche et broderie palmier dorée',
    price: 95,
    category: 'Capes de bain',
    images: ['/images/cape-coco.jpg'],
    customizable: true,
    inStock: true,
    materials: ['Éponge de bambou'],
    dimensions: '80 x 80 cm'
  },
  {
    id: '3',
    name: 'Pochette Vanille Bourbon',
    description: 'Pochette de toilette en soie sauvage teintée naturellement, finitions main',
    price: 75,
    category: 'Trousses',
    images: ['/images/trousse-vanille.jpg'],
    customizable: true,
    inStock: true,
    materials: ['Coton enduit'],
    dimensions: '20 x 15 x 5 cm'
  },
  {
    id: '4',
    name: 'Collection Lingettes Prestige',
    description: 'Coffret de 10 lingettes en coton biologique certifié avec étui en cuir végétal',
    price: 85,
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
  name: 'Eudora Couture',
  tagline: 'Créations haute couture pour bébés et mamans',
  description: 'Chaque création est une œuvre unique, confectionnée avec une attention méticuleuse aux détails dans notre atelier d\'exception à Saint-Denis. Nous sélectionnons les tissus les plus nobles et les finitions les plus raffinées pour sublimer les moments précieux de votre famille.',
  location: 'La Réunion',
  shipping: 'Livraison offerte et personnalisée à La Réunion',
  customOrder: 'Créations sur-mesure pour répondre à vos désirs les plus exclusifs',
  owner: 'Marie',
  email: 'contact@eudoracouture.re',
  phone: '+262 692 12 34 56',
  social: {
    instagram: 'https://instagram.com/eudoracouture',
    facebook: 'https://facebook.com/eudoracouture'
  }
};