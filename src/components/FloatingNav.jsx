import React, { useEffect, useState } from 'react'

export default function FloatingNav({ menu }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    // Hide original floating nav and scroll-top to avoid duplicates.
    // Only hide elements that are not inside our react root so we don't hide the React controls.
    const reactRoot = document.getElementById('react-root')
    const allFloatingNavs = Array.from(document.querySelectorAll('.floating-nav'))
    allFloatingNavs
      .filter((el) => !(reactRoot && reactRoot.contains(el)))
      .forEach((el) => (el.style.display = 'none'))

    const allScrollBtns = Array.from(document.querySelectorAll('.scroll-top'))
    allScrollBtns
      .filter((el) => !(reactRoot && reactRoot.contains(el)))
      .forEach((el) => (el.style.display = 'none'))

    const sections = menu.map((c) => document.getElementById(c.id)).filter(Boolean)

    function onScroll() {
      setShowScrollTop(window.pageYOffset > 500)

      // Determine active index similar to original script: last section whose top is <= window.pageYOffset + 150
      let current = 0
      sections.forEach((section, idx) => {
        const sectionTop = section.offsetTop - 150
        if (window.pageYOffset >= sectionTop) current = idx
      })
      setActiveIndex(current)
    }

    // run once to set initial state
    onScroll()
    window.addEventListener('scroll', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
      // restore original (non-react) floating nav/scroll visibility
      const reactRoot = document.getElementById('react-root')
      Array.from(document.querySelectorAll('.floating-nav'))
        .filter((el) => !(reactRoot && reactRoot.contains(el)))
        .forEach((el) => (el.style.display = ''))
      Array.from(document.querySelectorAll('.scroll-top'))
        .filter((el) => !(reactRoot && reactRoot.contains(el)))
        .forEach((el) => (el.style.display = ''))
    }
  }, [menu])

  function scrollToSection(id) {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  function scrollTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div>
      <div className="floating-nav" aria-label="Menu navigation">
        {menu.map((c, idx) => (
          <div
            key={c.id}
            role="button"
            tabIndex={0}
            className={`nav-dot ${idx === activeIndex ? 'active' : ''}`}
            onClick={() => scrollToSection(c.id)}
            onKeyDown={(e) => e.key === 'Enter' && scrollToSection(c.id)}
            aria-label={c.title}
          />
        ))}
      </div>

      <div
        id="react-scrollTopBtn"
        className={`floating-actions scroll-top ${showScrollTop ? 'visible' : ''}`}
        onClick={scrollTop}
        role="button"
        aria-label="Scroll to top"
      >
        <span style={{ fontSize: 24 }}>↑</span>
      </div>
    </div>
  )
}
