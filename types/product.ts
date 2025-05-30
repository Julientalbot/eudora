export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  images: string[];
  customizable: boolean;
  inStock: boolean;
  isNew?: boolean;
  materials?: string[];
  dimensions?: string;
  careInstructions?: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
}

export interface CustomOrder {
  productType: string;
  fabric?: string;
  colors?: string[];
  dimensions?: string;
  personalization?: string;
  additionalNotes?: string;
}