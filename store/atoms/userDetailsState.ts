import { atom } from "recoil";

  export interface UserDetails {
    firstName:string,
    lastName:string,
    email : string,
    phone : string
    apt : string,
    locality:string,
    city:string,
    state:string,
    pin:string
  }

  export const userDetailsState = atom<UserDetails>({
    key:'userDetails',
    default:{
        firstName:'',
        lastName:'',
        email : '',
        phone : '',
        apt : '',
        locality:'',
        city:'',
        state:'',
        pin:''
    }
  })