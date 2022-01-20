import React from 'react'
import { useSend, useDirectCharge, useCheckout } from 'thepeer-react'

type EventResponse = {
  type: string
  data: undefined | Object
}
export default function App() {
  const config = {
    currency: 'NGN',
    amount: 10000,
    meta: {
      discount: 'black friday'
    },
    onSuccess: (response: EventResponse) => {
      console.log('🚀 onSuccess', response)
    },
    onError: (response: EventResponse) => {
      console.log('🚀 onError', response)
    },
    onClose: (response: EventResponse) => {
      console.log('🚀 onClose', response)
    }
  }

  const handleSendPayment = useSend({
    ...config,
    publicKey: 'pspk_test_2aj8xasztf4domzd2nphinvzkvecpbuyxldkvr3pkuvko',
    userReference: '73f03de5-1043-4ad1-bc2e-aa4d94ebee4f'
  })
  const handleDirectChargePayment = useDirectCharge({
    ...config,
    publicKey: 'pspk_test_2aj8xasztf4domzd2nphinvzkvecpbuyxldkvr3pkuvko',
    userReference: '73f03de5-1043-4ad1-bc2e-aa4d94ebee4f'
  })
  const handleCheckoutPayment = useCheckout({
    ...config,
    publicKey: 'pspk_test_2aj8xasztf4domzd2nphinvzkvecpbuyxldkvr3pkuvko'
  })
  return (
    <div className='App'>
      <h1>Thepeer SDKs </h1>
      <button onClick={handleSendPayment}>Send</button>
      <button onClick={handleDirectChargePayment}>Direct Charge</button>
      <button onClick={handleCheckoutPayment}>Checkout</button>
    </div>
  )
}
