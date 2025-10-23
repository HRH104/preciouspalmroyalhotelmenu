import React from 'react'

export default function MenuItem({ item }) {
  return (
    <div className="menu-item">
      <div className="item-content">
        <div className="item-info">
          <h3>{item.name}</h3>
          <p>{item.desc}</p>
        </div>
        <div className="price-badge">{item.price}</div>
      </div>
    </div>
  )
}
