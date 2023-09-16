import Image from 'next/image';
import React, { useEffect } from 'react'
import { AiOutlinePlus,AiOutlineMinus } from 'react-icons/ai'
import { useRecoilState } from 'recoil';
import { cartState } from '../store/atoms/cartState';
import { useRouter } from 'next/navigation'


interface ProductDetails {
    product :{
      id:string
      name: string,
      img1:string,
      cartIcon:string,
      quantity:number,
      [key: string]: string|number; // Allow any additional properties
    }
}

const CartProd:React.FC <ProductDetails> = ({product}) => {
  
  const {id,name,price,cartIcon,quantity,size} = product

  const router = useRouter()

  const [cart,setCart] = useRecoilState(cartState)

  useEffect(()=>{
    console.log('effect called')
    if(cart.length==0 || cart.length<1 ) router.push('/')
  },[cart])

  const alterQuant = (quant:number,alter:string) =>{
    const index = cart.findIndex(item=>item.id === id)
    const updatedCart = [...cart]
    
    if(alter==='add') {
      if(quant < 3) updatedCart[index] = {...cart[index],quantity:cart[index].quantity+1}
      else {
        alert("Not accepting same product more than trice")
        return
      }
    }

    if(alter==='sub') {
      if(quant == 1) {
        setCart(cart.filter(item=>item.id != id))
        return
      }
      if(quant>1) updatedCart[index] = {...cart[index],quantity:cart[index].quantity-1}
    }
    
    setCart(updatedCart)
    console.log(cart)
}
  
  return (
    <div className='flex p-3 rounded-lg w-full my-1 justify-between text-black'>
        <Image src={cartIcon} width={75} height={75} alt=''/>
        <h3 className='text-md font-light'>{name}</h3>
        <h3 className='text-md font-light'>{price}</h3>
        <h3 className='text-md font-light'>{size}</h3>
        <div className='text-xl font-light flex'>
          <AiOutlineMinus 
            className="text-[16px] mt-[0.35rem] mr-2 cursor-pointer"
            onClick={()=>alterQuant(quantity,'sub')}
          /> 
            <p>{quantity}</p>   
          <AiOutlinePlus 
            className="text-[16px] mt-[0.35rem] ml-2 cursor-pointer"
            onClick={()=>alterQuant(quantity,'add')}
          /> 
        </div>
    </div>
  )
}

export default CartProd