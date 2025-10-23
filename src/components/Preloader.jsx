import React, { useEffect, useState } from 'react'

export default function Preloader() {
  const [hidden, setHidden] = useState(false)
  const [removed, setRemoved] = useState(false)

  useEffect(() => {
    // If an original static preloader exists, keep it hidden to avoid visual conflict
    const orig = document.getElementById('preloader')
    if (orig) orig.style.display = 'none'

    function onLoad() {
      // Mirror original timings: after 1.5s start hiding, after another 800ms remove
      const hideTimer = setTimeout(() => setHidden(true), 1500)
      const removeTimer = setTimeout(() => {
        setRemoved(true)
        // Remove any original preloader element from the DOM if present
        if (orig && orig.parentNode) {
          try {
            orig.parentNode.removeChild(orig)
          } catch (e) {
            /* ignore */
          }
        }
      }, 1500 + 800)

      return () => {
        clearTimeout(hideTimer)
        clearTimeout(removeTimer)
      }
    }

    if (document.readyState === 'complete') {
      // If already loaded, run timers immediately
      onLoad()
    } else {
      window.addEventListener('load', onLoad)
      return () => window.removeEventListener('load', onLoad)
    }
  }, [])

  // Once removed, render nothing so React menu becomes visible
  if (removed) return null

  return (
    <div className={`preloader ${hidden ? 'hidden' : ''}`} id="react-preloader" aria-hidden={hidden}>
      <div className="luxury-logo">
        <img src="/pprh_logo.png" alt="PPRH logo" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} onError={(e) => (e.currentTarget.style.display = 'none')} />
      </div>
      <div className="luxury-text">Precious Palm</div>
      <div className="luxury-subtitle">Royal Experience</div>
      <div className="diamond-spinner">
        <div className="diamond" />
        <div className="diamond" />
        <div className="diamond" />
        <div className="diamond" />
      </div>
      <div className="luxury-progress">
        <div className="luxury-progress-fill" />
      </div>
    </div>
  )
}
