import { useEffect, useState } from 'react'

const loadedScripts: {
  src?: string
} = {}

type ScriptStatusType = {
  loaded: boolean
  error: boolean
}

export default function useScript(publicKey: string) {
  const isTest = publicKey && publicKey.includes('test')
  const [state, setState] = useState<ScriptStatusType>({
    loaded: false,
    error: false
  })

  const subdomain = isTest ? 'vision' : 'cdn'
  const thepeerJS = `https://${subdomain}.thepeer.co/v1/chain.js`

  useEffect(() => {
    const scriptTag = document.getElementById(`thepeer_script_${subdomain}`)
    const scriptSrc = scriptTag && scriptTag.getAttribute('src')

    const isValidSrc =
      scriptSrc && scriptSrc.includes(isTest ? 'vision' : 'cdn')

    if (isValidSrc)
      return setState({
        loaded: true,
        error: false
      })

    loadedScripts.src = thepeerJS
    const script = document.createElement('script')
    script.id = `thepeer_script_${subdomain}`
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
