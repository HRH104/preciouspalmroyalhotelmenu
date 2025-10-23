import React, { useEffect } from 'react'
import menu from './data/menu'
import Category from './components/Category'
import Preloader from './components/Preloader'
import FloatingNav from './components/FloatingNav'
import CallButton from './components/CallButton'

export default function App() {
  useEffect(() => {
    // Place the React root inside the original <main> so the footer stays after the menu.
    const staticMain = document.querySelector('main')
    const reactRoot = document.getElementById('react-root')

    if (staticMain) {
      // Clear original static menu content to avoid duplicates
      staticMain.innerHTML = ''
      // If react root exists, move it into the original main element so DOM order is preserved
      if (reactRoot && staticMain !== reactRoot.parentElement) {
        staticMain.appendChild(reactRoot)
      }
    }

    // Hide original floating actions (call button/scroll-top) as React will render replacements.
    // Only hide actions that are not rendered inside our react root to avoid hiding the React controls.
    const origActions = Array.from(document.querySelectorAll('.floating-actions'))
      .filter((el) => !(reactRoot && reactRoot.contains(el)))
    origActions.forEach((el) => (el.style.display = 'none'))

    return () => {
      // restore original floating actions visibility on unmount
      const origActions = Array.from(document.querySelectorAll('.floating-actions'))
        .filter((el) => !(reactRoot && reactRoot.contains(el)))
      origActions.forEach((el) => (el.style.display = ''))
      if (staticMain) {
        staticMain.removeAttribute('aria-hidden')
      }
    }
  }, [])

  return (
    <div>
      <Preloader />

      {/* (Removed small debug indicator) */}
      {/* Render the data-driven menu using the existing design system classes */}
      <div className="max-w-7xl mx-auto px-6 py-20" aria-label="React Menu">
        {menu.map((category) => (
          <Category key={category.id} category={category} />
        ))}
      </div>

      {/* Floating navigation and scroll/top handled by React */}
      <FloatingNav menu={menu} />
      <CallButton />
    </div>
  )
}
