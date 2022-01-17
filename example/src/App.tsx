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
    publicKey: 'pspk_test_zqlrmuadqxuqrhdoyhzq1b8wdgsozbwmqkmxccmymrmcy',
    userReference: 'b557c7a0-f343-43a4-acf1-4885eb049c3d'
  })
  const handleDirectChargePayment = useDirectCharge({
    ...config,
    publicKey: 'pspk_test_m7pbk9fbjaofi92shcgxq8is4pfgxl0t0bq3g3bmrp7iq',
    userReference: 'fd92e93b-8907-4429-86e5-9cf2fea2a9d8'
  })
  const handleCheckoutPayment = useCheckout({
    ...config,
    publicKey: 'pspk_live_nuh7uwxhmzcm3bregrcik3nhsknaldd7q8ew3cvlpcwo7'
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
