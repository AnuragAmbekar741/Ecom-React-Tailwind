import { atom } from "recoil";

export interface CartProductDetails {
  name: string;
  size: string;
  quantity: number;
  price: string;
}

export interface Order {
  products: CartProductDetails[];
  count: number;
  totalAmt: number;
}

export const orderState = atom<Order>({
  key: 'orderState',
  default: {
    products: [],
    count: 0,
    totalAmt: 0,
  },
});
