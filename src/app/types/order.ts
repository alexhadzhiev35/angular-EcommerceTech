import { Product } from './product';
import { User } from './user';

export interface Order {
  customer: User;
  products: Product[];
  totalPrice: number;
}
