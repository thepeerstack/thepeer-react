import { useEffect } from 'react'
import useScript from './script'
import { GeneralProps } from './types'
import { ThePeerProps } from './useSend'

declare const window: Window &
  typeof globalThis & {
    ThePeer: ThePeerProps
  }

const useCheckout = (props: GeneralProps) => {
  const [loaded, error] = useScript(props.publicKey)

  useEffect(() => {
    if (error) throw new Error('Unable to load thepeer checkout modal')
  }, [error])

  const handleCheckoutPayment = () => {
    if (error) throw new Error('Unable to load thepeer checkout modal')
    if (loaded) {
      const checkout = window.ThePeer && window.ThePeer.checkout(props)
      checkout.setup()
      return checkout.open()
    }
  }
  return handleCheckoutPayment
}

export default useCheckout
