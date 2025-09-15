import React from 'react'

export default function HouseData(label, image) {
  return (
    <div>
      <h1>{label}</h1>
      <img src={image}></img>
    </div>
  )
}
