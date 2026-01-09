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
    name: 'Capes de Bain',
    slug: 'capes-de-bain',
    description: 'Douces et enveloppantes, confectionnées en éponge de bambou premium et coton bio',
    image: '/images/categories/capes.jpg'
  },
  {
    id: '2',
    name: 'Bavoirs & Lingettes',
    slug: 'lingettes-bavoirs',
    description: 'Ensembles coordonnés pour le quotidien de bébé, pratiques et élégants',
    image: '/images/categories/lingettes.jpg'
  },
  {
    id: '3',
    name: 'Anneaux de Dentition',
    slug: 'anneaux-dentition',
    description: 'Anneaux en bois naturel avec oreilles en tissu, doux et apaisants',
    image: '/images/categories/anneaux.jpg'
  }
];

export const featuredProducts: Product[] = [
  // === CAPES DE BAIN ===
  {
    id: '1',
    name: 'Cape de Bain Safari',
    description: 'Adorable cape de bain aux motifs jungle avec lions, paresseux, toucans et éléphants sur fond crème. Intérieur en éponge de bambou ultra-douce blanche. Parfaite pour envelopper bébé après le bain dans un cocon de douceur.',
    price: 65,
    category: 'Capes de Bain',
    images: ['/images/products/cape-jungle-1.jpg', '/images/products/cape-jungle-2.jpg', '/images/products/cape-jungle-detail.jpg'],
    customizable: true,
    inStock: true,
    isNew: true,
    materials: ['Coton bio OEKO-TEX', 'Éponge de bambou'],
    dimensions: '75 x 75 cm',
    careInstructions: 'Lavage 30°C, séchage naturel recommandé'
  },
  {
    id: '2',
    name: 'Cape de Bain Petites Oies',
    description: 'Élégante cape de bain vert menthe avec rayures kaki et adorables petites oies blanches. Un motif frais et délicat qui apportera une touche de douceur au moment du bain. Doublure éponge bambou blanche.',
    price: 65,
    category: 'Capes de Bain',
    images: ['/images/products/cape-oies-1.jpg', '/images/products/cape-oies-2.jpg', '/images/products/cape-oies-detail.jpg'],
    customizable: true,
    inStock: true,
    materials: ['Coton bio OEKO-TEX', 'Éponge de bambou'],
    dimensions: '75 x 75 cm',
    careInstructions: 'Lavage 30°C, séchage naturel recommandé'
  },
  {
    id: '3',
    name: 'Cape de Bain Jardin Botanique',
    description: 'Raffinée cape de bain au motif floral eucalyptus sur fond blanc cassé. Feuilles d\'eucalyptus bleu-vert et délicates fleurs roses pour un style nature et poétique. L\'élégance au service du confort de bébé.',
    price: 68,
    category: 'Capes de Bain',
    images: ['/images/products/cape-eucalyptus-1.jpg', '/images/products/cape-eucalyptus-detail.jpg'],
    customizable: true,
    inStock: true,
    isNew: true,
    materials: ['Coton bio OEKO-TEX', 'Éponge de bambou'],
    dimensions: '80 x 80 cm',
    careInstructions: 'Lavage 30°C, préserver les couleurs'
  },

  // === ENSEMBLES BAVOIRS & LINGETTES ===
  {
    id: '4',
    name: 'Set Bavoir & Lingettes Petites Oies',
    description: 'Ensemble coordonné comprenant un bavoir bandana et des lingettes lavables rondes, motif petites oies sur fond vert menthe. Le bavoir bandana se ferme par pression et protège les vêtements avec style.',
    price: 38,
    category: 'Bavoirs & Lingettes',
    images: ['/images/products/set-oies-1.jpg', '/images/products/set-oies-2.jpg', '/images/products/set-oies-3.jpg'],
    customizable: true,
    inStock: true,
    materials: ['Coton bio', 'Éponge de bambou'],
    dimensions: 'Bavoir: taille unique, Lingettes: Ø 8 cm',
    careInstructions: 'Lavage 40°C, séchage en machine autorisé'
  },
  {
    id: '5',
    name: 'Set Bavoir & Lingettes Safari',
    description: 'Ensemble assorti à la cape Safari : bavoir bandana et lingettes carrées aux motifs animaux de la jungle. Pratique et adorable, parfait pour les repas et le change de bébé.',
    price: 38,
    category: 'Bavoirs & Lingettes',
    images: ['/images/products/set-jungle-1.jpg', '/images/products/set-jungle-2.jpg', '/images/products/lingettes-jungle-detail.jpg'],
    customizable: true,
    inStock: true,
    isNew: true,
    materials: ['Coton bio', 'Éponge de bambou'],
    dimensions: 'Bavoir: taille unique, Lingettes: 12 x 12 cm',
    careInstructions: 'Lavage 40°C, séchage en machine autorisé'
  },

  // === ANNEAUX DE DENTITION ===
  {
    id: '6',
    name: 'Anneau de Dentition Lapin Safari',
    description: 'Anneau de dentition en bois de hêtre naturel non traité, avec oreilles de lapin en tissu motif jungle. Les oreilles en tissu sont douces à mâchouiller et l\'anneau en bois soulage les gencives de bébé.',
    price: 22,
    category: 'Anneaux de Dentition',
    images: ['/images/products/anneau-jungle-1.jpg', '/images/products/anneau-jungle-2.jpg', '/images/products/anneau-jungle-nature.jpg'],
    customizable: true,
    inStock: true,
    materials: ['Bois de hêtre naturel FSC', 'Coton bio', 'Éponge de bambou'],
    dimensions: 'Anneau Ø 7 cm',
    careInstructions: 'Tissu lavable 30°C, bois à nettoyer avec un chiffon humide'
  },

  // === COFFRETS ===
  {
    id: '7',
    name: 'Coffret Naissance Jardin Botanique',
    description: 'Le cadeau de naissance idéal : cape de bain, bavoir et lingettes coordonnés au motif eucalyptus. Présenté dans un joli emballage, ce coffret fera sensation pour accueillir bébé avec élégance.',
    price: 95,
    category: 'Bavoirs & Lingettes',
    images: ['/images/products/coffret-eucalyptus.jpg', '/images/products/cape-eucalyptus-1.jpg'],
    customizable: true,
    inStock: true,
    isNew: true,
    materials: ['Coton bio OEKO-TEX', 'Éponge de bambou'],
    dimensions: 'Cape 80x80cm, Bavoir taille unique, Lingettes 12x12cm',
    careInstructions: 'Lavage 30°C, séchage naturel recommandé'
  },

  // === PRODUITS SUPPLÉMENTAIRES ===
  {
    id: '8',
    name: 'Lot de 6 Lingettes Safari',
    description: 'Lot de 6 lingettes lavables carrées aux motifs animaux de la jungle. Réutilisables et écologiques, elles remplacent les lingettes jetables pour le change, le débarbouillage ou la toilette.',
    price: 18,
    category: 'Bavoirs & Lingettes',
    images: ['/images/products/lingettes-jungle-detail.jpg', '/images/products/set-jungle-2.jpg'],
    customizable: false,
    inStock: true,
    materials: ['Coton bio', 'Éponge de bambou'],
    dimensions: '12 x 12 cm',
    careInstructions: 'Lavage 40°C, séchage en machine autorisé'
  },
  {
    id: '9',
    name: 'Lot de 6 Lingettes Rondes Petites Oies',
    description: 'Lot de 6 lingettes lavables rondes au motif petites oies. Format pratique et original, parfait pour nettoyer le visage et les mains de bébé en douceur.',
    price: 18,
    category: 'Bavoirs & Lingettes',
    images: ['/images/products/set-oies-2.jpg', '/images/products/set-oies-1.jpg'],
    customizable: false,
    inStock: true,
    materials: ['Coton bio', 'Éponge de bambou'],
    dimensions: 'Ø 8 cm',
    careInstructions: 'Lavage 40°C, séchage en machine autorisé'
  },
  {
    id: '10',
    name: 'Bavoir Bandana Safari',
    description: 'Bavoir bandana au motif jungle, fermeture par pressions. Absorbe efficacement la bave et les petits accidents tout en gardant bébé stylé. S\'assortit parfaitement avec notre cape Safari.',
    price: 14,
    category: 'Bavoirs & Lingettes',
    images: ['/images/products/set-jungle-1.jpg', '/images/products/ambiance-jungle.jpg'],
    customizable: true,
    inStock: true,
    materials: ['Coton bio', 'Éponge de bambou'],
    dimensions: 'Taille unique (0-24 mois)',
    careInstructions: 'Lavage 40°C, séchage en machine autorisé'
  }
];

// Utility functions
export function getProductById(id: string): Product | undefined {
  return featuredProducts.find(product => product.id === id);
}

export function getProductsByCategory(categorySlug: string): Product[] {
  const category = categories.find(cat => cat.slug === categorySlug);
  if (!category) return [];
  return featuredProducts.filter(product => product.category === category.name);
}

export const shopInfo: ShopInfo = {
  name: 'Eudora Couture',
  tagline: 'Artisanat de luxe pour bébés',
  description: 'Chaque création est confectionnée avec amour dans notre atelier à Trois Bassins, La Réunion. Des tissus nobles certifiés OEKO-TEX, des finitions soignées à la main, pour accompagner les moments précieux avec votre bébé.',
  location: 'Trois Bassins, La Réunion',
  shipping: 'Livraison offerte dès 60€ à La Réunion • Expédition Métropole disponible',
  customOrder: 'Toutes nos créations peuvent être personnalisées : choix du tissu, broderie du prénom, couleurs... Contactez-nous pour créer une pièce unique.',
  owner: 'Mathilde',
  email: 'contact@eudoracouture.re',
  phone: '+262 692 XX XX XX',
  social: {
    instagram: 'https://instagram.com/eudoracouture',
    facebook: 'https://facebook.com/eudoracouture'
  }
};
