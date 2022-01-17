import { useEffect } from 'react'
import useScript from './script'
import { GeneralProps, SendProps } from './types'
import { ThePeerProps } from './useSend'
declare const window: Window &
  typeof globalThis & {
    ThePeer: ThePeerProps
  }

const useDirectCharge = (props: GeneralProps & SendProps) => {
  const [loaded, error] = useScript(props.publicKey)

  useEffect(() => {
    if (error) throw new Error('Unable to load thepeer direct charge modal')
  }, [error])

  const handleDirectChargePayment = () => {
    if (error) throw new Error('Unable to load thepeer direct charge modal')
    if (loaded) {
      const directCharge = window.ThePeer && window.ThePeer.directCharge(props)
      directCharge.setup()
      return directCharge.open()
    }
  }
  return handleDirectChargePayment
}

export default useDirectCharge
