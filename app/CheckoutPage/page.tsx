import CartDetails from '@/components/CheckoutPage/CartDetails'
import OrderProcessing from '@/components/CheckoutPage/OrderProcessing'
import ReturnsExchanges from '@/components/CheckoutPage/ReturnsExchanges'
import ShippingPolicy from '@/components/CheckoutPage/Shipping Policy'
import ShippingDetails from '@/components/CheckoutPage/ShippingDetails'
import React from 'react'

const page = () => {
  return (
    <div className='pt-40 pb-10 px-20 flex w-full'>
      <div className='w-full'>
        <CartDetails/>
        <ShippingDetails/>
        <OrderProcessing/>
        <ShippingPolicy/>
        <ReturnsExchanges/>
      </div>
      <div className=''>

      </div>
    </div>
  )
}

export default page