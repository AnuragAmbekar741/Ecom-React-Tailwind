import {atom} from 'recoil'

export interface ProductDetails {
    id:string
    name: string,
    price:string,
    img1:string,
    img2:string,
    [key:string]:string|number
}

export const cartState = atom<ProductDetails[]>({
    key:'cartState',
    default:[]
})
