import React from 'react'

export default function Contact1() {
  return (
    <div className='px-6'>
      <h1 className='my-6 text-2xl'>Contact</h1>
      <hr className='text-gray-100 my-5'></hr>
      <p className='my-3 '>Lets get in touch and talk about your next project.</p>
      <input type='name' placeholder='Name' className='w-full mb-4 px-2 py-2 border-[1px] border-gray-400'></input>
      <input type='email' placeholder='Email' className='w-full mb-4 px-2 py-2 border-[1px] border-gray-400'></input>
      <input type='name' placeholder='Subject' className='w-full mb-4 px-2 py-2 border-[1px] border-gray-400'></input>
      <input type='name' placeholder='Comment' className='w-full mb-4 px-2 py-2 border-[1px] border-gray-400'></input>
      <button className='bg-black text-white px-4 py-2 my-3'>SEND MESSAGE</button>
      <img className=' pt-8 pb-3 w-full' src='https://www.w3schools.com/w3images/map.jpg'></img>
    </div>
  )
}
