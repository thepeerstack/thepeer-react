import { useEffect } from 'react'
import useScript from './script'
import { CheckoutProps, ThepeerProps } from './types'

declare const window: Window &
  typeof globalThis & {
    Thepeer: ThepeerProps
  }

const useCheckout = (props: CheckoutProps) => {
  const errorMsg = "Unable to load Thepeer's Checkout modal"
  const [loaded, error] = useScript()

  useEffect(() => {
    if (error) throw new Error(errorMsg)
  }, [error])

  return () => {
    if (error) throw new Error(errorMsg)
    if (loaded) {
      const checkout = window.Thepeer && window.Thepeer.Checkout(props)
      checkout.setup()
      return checkout.open()
    }
  }
}

export default useCheckout
