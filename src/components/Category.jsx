import React from 'react'
import MenuItem from './MenuItem'

export default function Category({ category }) {
  return (
    <section id={category.id} className="menu-section">
      <div className="menu-card">
        <div className="category-header">
          <div className="category-icon">{category.icon}</div>
          <h2 className="category-title">{category.title}</h2>
        </div>
        <div className="menu-grid">
          {category.items.map((it, idx) => (
            <MenuItem key={idx} item={it} />
          ))}
        </div>
      </div>
    </section>
  )
}
