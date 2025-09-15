import React from 'react'

export default function Tags({label, bg, padding, text}) {
  return (
    <div>
      <p className={`${bg} ${text} ${padding} font-extralight`}>{label}</p>
    </div>
  )
}
