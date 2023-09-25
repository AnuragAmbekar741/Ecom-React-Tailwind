import CartDetails from '@/components/CheckoutPage/CartDetails'
import ShippingDetails from '@/components/CheckoutPage/ShippingDetails'
import React from 'react'

const page = () => {
  return (
    <div className='pt-40 px-20 md:grid w-full overflow-y-auto'>
            <CartDetails/>
            <ShippingDetails/>
    </div>
  )
}

export default page