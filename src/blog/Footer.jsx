import React from 'react'

export default function Footer() {
  return (
    <div className='bg-[#616161] py-9 px-5'>
        <div className='flex gap-3 pb-8 tracking-wider'>
      <button className='text-[#909090] bg-[#444444] px-6 py-3 hover:bg-[#828282] hover:text-[#464646] hover:cursor-not-allowed'>Previous</button>
      <button className='px-6 py-3 bg-black text-white hover:bg-[#CCCCCC] hover:text-black hover:cursor-pointer'>Next</button>
      </div>
      <p className='text-white'>Powered by <a className='underline ' href=''>w3.css</a></p>
    </div>
  )
}
