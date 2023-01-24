import { useEffect } from 'react'
import useScript from './script'
import { GeneralProps } from './types'

declare const window: Window &
  typeof globalThis & {
    ThePeer: any
  }

const useSend = (props: GeneralProps) => {
  const [loaded, error] = useScript()

  useEffect(() => {
    if (error) throw new Error('Unable to load thepeer send modal')
  }, [error])

  return () => {
    if (error) throw new Error('Unable to load thepeer send modal')

    if (loaded) {
      const send = window.ThePeer && window.ThePeer.send(props)
      send.setup()
      return send.open()
    }
  }
}

export default useSend
