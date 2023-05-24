import { useEffect } from 'react'
import useScript from './script'
import { GeneralProps, ThepeerProps } from './types'

declare const window: Window &
  typeof globalThis & {
    Thepeer: ThepeerProps
  }

const useDirectCharge = (props: GeneralProps) => {
  const errorMsg = "Unable to load Thepeer's Direct Charge modal"
  const [loaded, error] = useScript()

  useEffect(() => {
    if (error) throw new Error(errorMsg)
  }, [error])

  return () => {
    if (error) throw new Error(errorMsg)
    if (loaded) {
      const directCharge = window.Thepeer && window.Thepeer.DirectCharge(props)
      directCharge.setup()
      return directCharge.open()
    }
  }
}

export default useDirectCharge
