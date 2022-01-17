import { useEffect } from 'react'
import useScript from './script'
import { GeneralProps, SendProps } from './types'

export type ThePeerProps = {
  directCharge: Function
  send: Function
  checkout: Function
}

declare const window: Window &
  typeof globalThis & {
    ThePeer: ThePeerProps
  }

const useSend = (props: GeneralProps & SendProps) => {
  const [loaded, error] = useScript(props.publicKey)

  useEffect(() => {
    if (error) throw new Error('Unable to load thepeer send modal')
  }, [error])
  const handleSendPayment = () => {
    if (error) throw new Error('Unable to load thepeer send modal')

    if (loaded) {
      const send = window.ThePeer && window.ThePeer.send(props)
      send.setup()
      return send.open()
    }
  }
  return handleSendPayment
}

export default useSend
