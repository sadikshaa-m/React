import React from 'react'

export default function Title() {
  return (
    <div className='flex flex-col justify-center items-center my-10'>
      <h1 className='text-[36px] font-medium p-2.5'>MY BLOG</h1>
      <p className='p-2.5 text-[15px] tracking-wider'>Welcome to the blog of <span className='bg-black text-white px-2 py-0.5'>unknown</span></p>
    </div>
  )
}
