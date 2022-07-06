import React, { useEffect, useState } from 'react'

import { ScriptStatuses } from './useScript.type'

const useScript = (src: string): ScriptStatuses => {
  const [status, setStatus] = useState<ScriptStatuses>(src ? 'loading' : 'waiting')

  useEffect(() => {
    if (!src) {
      setStatus('waiting')
      return () => {}
    }

    // Fetch existing script element by src
    let script: HTMLScriptElement | null = document.querySelector(`script[src="${src}"]`)

    if (!script) {
      // Create script
      script = document.createElement('script')
      script.src = src
      script.defer = true
      script.setAttribute('data-status', 'loading')

      document.body.appendChild(script)

      // Store status in attribute on script
      const setAttributeFromEvent = (event: Event) => {
        if (script) {
          script.setAttribute('data-status', event.type === 'load' ? 'ready' : 'error')
        }
      }

      script.addEventListener('load', setAttributeFromEvent)
      script.addEventListener('error', setAttributeFromEvent)
    } else {
      // Grab existing script status from attribute and set to state.
      setStatus(script.getAttribute('data-status') as ScriptStatuses)
    }

    // Script event handler to update status in state
    const setStateFromEvent = (event: Event) => {
      setStatus(event.type === 'load' ? 'ready' : 'error')
    }

    script.addEventListener('load', setStateFromEvent)
    script.addEventListener('error', setStateFromEvent)

    // Remove event listeners on cleanup
    return () => {
      if (script) {
        script.removeEventListener('load', setStateFromEvent)
        script.removeEventListener('error', setStateFromEvent)
      }
    }
  }, [src])

  return status
}

export default useScript
