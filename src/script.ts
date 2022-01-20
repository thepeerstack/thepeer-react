import { useEffect, useState } from 'react'

const loadedScripts: {
  src?: string
} = {}

type ScriptStatusType = {
  loaded: boolean
  error: boolean
}

const thepeerJS = 'https://cdn.thepeer.co/v1/chain.js'
export default function useScript() {
  const [state, setState] = useState<ScriptStatusType>({
    loaded: false,
    error: false
  })

  useEffect(() => {
    const scriptTag = document.getElementById('thepeer_script')
    const scriptSrc = scriptTag && scriptTag.getAttribute('src')

    if (scriptSrc)
      return setState({
        loaded: true,
        error: false
      })

    loadedScripts.src = thepeerJS
    const script = document.createElement('script')
    script.id = 'thepeer_script'
    script.src = thepeerJS
    script.async = true

    const onScriptLoad = () => {
      setState({
        loaded: true,
        error: false
      })
    }

    const onScriptError = () => {
      delete loadedScripts.src

      setState({
        loaded: true,
        error: true
      })
    }

    script.addEventListener('load', onScriptLoad)
    script.addEventListener('complete', onScriptLoad)
    script.addEventListener('error', onScriptError)

    document.body.appendChild(script)

    return () => {
      script.removeEventListener('load', onScriptLoad)
      script.removeEventListener('complete', onScriptLoad)
      script.removeEventListener('error', onScriptError)
    }
  }, [])

  return [state.loaded, state.error]
}
