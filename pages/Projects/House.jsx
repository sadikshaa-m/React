import React from 'react'

export default function House({label, src}) {
  return (
    <div className='relative'>
      <h1 className='absolute bg-black text-white px-3 py-2'>{label}</h1>
      <img src={src}></img>
    </div>
  )
}
