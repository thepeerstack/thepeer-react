import { useEffect } from 'react'
import useScript from './script'
import { CheckoutProps, ThepeerProps } from './types'

declare const window: Window &
  typeof globalThis & {
    ThePeer: ThepeerProps
  }

const useCheckout = (props: CheckoutProps) => {
  const [loaded, error] = useScript()

  useEffect(() => {
    if (error) throw new Error('Unable to load thepeer checkout modal')
  }, [error])

  return () => {
    if (error) throw new Error('Unable to load thepeer checkout modal')
    if (loaded) {
      const checkout = window.ThePeer && window.ThePeer.checkout(props)
      checkout.setup()
      return checkout.open()
    }
  }
}

export default useCheckout
