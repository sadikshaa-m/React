import React from 'react'

export default function Info({src, alt, name, profession}) {
  return (
    <div>
      <img className=' w-full filter grayscale-75' src={src} alt={alt}></img>
      <h1 className='my-2.5 text-2xl'>{name}</h1>
      <h1 className='my-3 text-gray-400 text-[15px]'>{profession}</h1>
      <p className='text-[15px] py-2'>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
      <button className='w-full bg-gray-100 hover:bg-gray-300 py-2 my-2'>Contact</button>
    </div>
  )
}
