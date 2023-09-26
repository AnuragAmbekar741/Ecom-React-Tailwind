import Image from 'next/image';
import React, { useEffect } from 'react'
import { AiOutlinePlus,AiOutlineMinus } from 'react-icons/ai'
import { useRecoilState } from 'recoil';
import { cartState } from '../../store/atoms/cartState';
import { useRouter } from 'next/navigation'
import { StaticImageData } from 'next/image';

interface ProductDetails {
  id: string;
  name: string;
  price: string;
  cartIcon: StaticImageData;
  quantity: number;
  size?: string|undefined;
  [key: string]: any; // Allow for additional dynamic properties if needed
}

interface CartProdProps {
  product: ProductDetails;
}

const CartProd:React.FC <CartProdProps> = ({product}) => {
  
  const {id,name,price,cartIcon,quantity,size} = product

  const router = useRouter()

  const [cart,setCart] = useRecoilState(cartState)

  // const prodName = name.split(' ')
  // console.log(prodName)

  const alterQuant = (quant:number,alter:string) =>{
    
    const index = cart.findIndex(item=>item.id === id && item.size === size)
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
}
  
  return (
    <div className='flex p-3 rounded-lg w-full my-1 justify-between text-black'>
        <Image src={cartIcon} width={70} height={70} alt='' onClick={()=>router.push(`/ProductDetails/?id=${id}`)}/>
        
        <div>
          {name.split(' ').map(word=><h3 className='text-md font-light'>{word}</h3>)}
        </div>
        <h3 className='text-md font-light'>{price}</h3>
        <div>
          {size?.split(' ').map(word=><h3 className='text-md font-light'>{word}</h3>)}
        </div>
        <div className='text-xl font-light flex pr-2'>
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