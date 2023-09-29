import {atom} from 'recoil'
import { StaticImageData } from 'next/image';

export interface ProductDetails {
  ID: number
  id: string;
  name: string;
  price: string;
  cartIcon: StaticImageData;
  quantity: number;
  size?: string;
  [key: string]: any;
}   

export const cartState = atom<ProductDetails[]>({
    key:'cartState',
    default:[]
})
