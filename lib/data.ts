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
    name: 'Capes de Bain Prestige',
    slug: 'capes-de-bain',
    description: 'Douces et luxueuses, pour des moments câlins d\'exception',
    image: '/images/categories/capes.jpg'
  },
  {
    id: '2',
    name: 'Lingettes & Bavoirs Couture',
    slug: 'lingettes-bavoirs',
    description: 'Ensembles coordonnés pour le quotidien de bébé',
    image: '/images/categories/lingettes.jpg'
  },
  {
    id: '3',
    name: 'Anneaux de Dentition',
    slug: 'anneaux-dentition',
    description: 'Créations sensorielles et apaisantes',
    image: '/images/categories/anneaux.jpg'
  }
];

export const featuredProducts: Product[] = [
  {
    id: '1',
    name: 'Cape de Bain Lions Gris',
    description: 'Cape de bain en coton bio avec adorables motifs de lions sur fond crème, doublée éponge de bambou blanche',
    price: 65,
    category: 'Capes de Bain Prestige',
    images: ['/images/products/cape-bain-motifs-lions-gris.jpg', '/images/products/cape-bain-motifs-lions-gris-accrochee.jpg'],
    customizable: true,
    inStock: true,
    isNew: true,
    materials: ['Coton bio OEKO-TEX', 'Éponge de bambou'],
    dimensions: '75 x 75 cm',
    careInstructions: 'Lavage 30°C, séchage naturel recommandé'
  },
  {
    id: '2',
    name: 'Anneau de Dentition Lapin Savane',
    description: 'Anneau de dentition en bois naturel avec oreilles de lapin en tissu motifs animaux tropicaux',
    price: 28,
    category: 'Anneaux de Dentition',
    images: ['/images/products/anneau-dentition-lapin.jpg', '/images/products/anneau-dentition-motifs-savane-plantes.jpg'],
    customizable: true,
    inStock: true,
    materials: ['Bois de hêtre naturel', 'Coton bio'],
    dimensions: 'Anneau Ø 7 cm',
    careInstructions: 'Lavage tissu 30°C, bois à nettoyer avec chiffon humide'
  },
  {
    id: '3',
    name: 'Ensemble Lingettes & Bavoir Canards',
    description: 'Set de 6 lingettes lavables avec bavoir assorti, motifs canards sur fond vert tendre',
    price: 42,
    category: 'Lingettes & Bavoirs Couture',
    images: ['/images/products/lingettes-bavoir-canards.jpg', '/images/products/bavoir-lingettes-rayures-vertes-confettis.jpg'],
    customizable: true,
    inStock: true,
    isNew: true,
    materials: ['Coton bio', 'Éponge de bambou'],
    dimensions: 'Lingettes 15 x 15 cm, Bavoir 25 x 30 cm',
    careInstructions: 'Lavage 40°C, séchage en machine autorisé'
  },
  {
    id: '4',
    name: 'Cape de Bain Rayures Vertes',
    description: 'Cape de bain élégante à rayures vertes avec petits confettis colorés, finitions soignées',
    price: 68,
    category: 'Capes de Bain Prestige',
    images: ['/images/products/cape-bain-rayures-vertes-confettis.jpg', '/images/products/detail-etiquette-rayures-vertes.jpg'],
    customizable: true,
    inStock: true,
    materials: ['Coton bio OEKO-TEX', 'Éponge de bambou'],
    dimensions: '80 x 80 cm',
    careInstructions: 'Lavage 30°C, préserver les couleurs'
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
  tagline: 'Créations haute couture pour bébés',
  description: 'Chaque œuvre est confectionnée avec excellence dans notre atelier à Saint-Denis. Des tissus nobles choisis avec soin, des finitions d\'exception, pour sublimer les moments précieux de votre famille.',
  location: 'La Réunion',
  shipping: 'Livraison gratuite à partir de 80€ à La Réunion',
  customOrder: 'Toutes nos créations sont personnalisables selon vos inspirations les plus raffinées',
  owner: 'Mathilde',
  email: 'contact@eudoracouture.re',
  phone: '+262 692 12 34 56',
  social: {
    instagram: 'https://instagram.com/eudoracouture',
    facebook: 'https://facebook.com/eudoracouture'
  }
};