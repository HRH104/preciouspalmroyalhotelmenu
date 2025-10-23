import React from 'react'

export default function CallButton() {
  return (
    <a href="tel:+2347042484011" className="floating-actions call-button" aria-label="Call Bar">
      <span style={{ fontSize: 20 }}>📞</span>
      <span style={{ marginLeft: 8 }}>Call To Order</span>
    </a>
  )
}
