import React from 'react'

export default function Posts({src, title, label}) {
  return (
    <div className='p-5 flex gap-5 border-[1px] border-gray-100 hover:bg-[#CCCCCC]'>
        <img className='h-13 w-13' src={src}></img>
      <div className='flex flex-col '>
        <h1 className='text-[18px]'>{title}</h1>
        <p className='text-[15px]'>{label}</p>
      </div>
    </div>
  )
}
