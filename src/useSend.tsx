import { useEffect } from 'react'
import useScript from './script'
import { GeneralProps, ThepeerProps } from './types'

declare const window: Window &
  typeof globalThis & {
    Thepeer: ThepeerProps
  }

const useSend = (props: GeneralProps) => {
  const errorMsg = "Unable to load Thepeer's Send modal"
  const [loaded, error] = useScript()

  useEffect(() => {
    if (error) throw new Error(errorMsg)
  }, [error])

  return () => {
    if (error) throw new Error(errorMsg)

    if (loaded) {
      const send = window.Thepeer && window.Thepeer.Send(props)
      send.setup()
      return send.open()
    }
  }
}

export default useSend
