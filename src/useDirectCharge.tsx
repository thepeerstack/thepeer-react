import { useEffect } from 'react'
import useScript from './script'
import { GeneralProps, ThepeerProps } from './types'

declare const window: Window &
  typeof globalThis & {
    ThePeer: ThepeerProps
  }

const useDirectCharge = (props: GeneralProps) => {
  const [loaded, error] = useScript()

  useEffect(() => {
    if (error) throw new Error('Unable to load thepeer direct charge modal')
  }, [error])

  return () => {
    if (error) throw new Error('Unable to load thepeer direct charge modal')
    if (loaded) {
      const directCharge = window.ThePeer && window.ThePeer.directCharge(props)
      directCharge.setup()
      return directCharge.open()
    }
  }
}

export default useDirectCharge
