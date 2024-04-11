export interface Product {
  id: string;
  imageUrl1: string;
  imageUrl2: string;
  imageUrl3: string;
  imageUrl4: string;
  category: string;
  brand: string;
  model: string;
  specifications: string[];
  rating: number;
  price: number;
  isFeatured: boolean;
  description: string;
  options: string[];
}
