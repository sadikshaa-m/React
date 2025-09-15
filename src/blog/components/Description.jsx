import React from 'react'

export default function Description({src, alt, heading, date, num, hover, rounded}) {
  return (
    <div className=''>
    <div className='flex flex-col shadow-lg/40'>
      <div>
      <img className='w-full' src={src} alt={alt}></img>
      </div>
      <div className='px-4 py-3'>
      <h1 className='text-[24px] font-medium pb-2.5'>{heading}</h1>
      <h1 className='text-[18px] pb-2'>Title description, <span className='text-[#707070]'>April {date}, 2014</span></h1>
      <p className={`text-[15px] py-4 ${hover}`}>Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</p>
      <div className='flex justify-between'>
      <button className='text-[15px] px-5 py-3 border-gray-400 border-1 font-medium hover:bg-[#CCCCCC]'>READ MORE</button>
      <div className='flex gap-1.5'>
      <p>Comments</p>
      <p className={`px-2 py-0 h-6 bg-black text-white ${rounded}`}>{num}</p>
      </div>
      </div>
      </div>
    </div>
    </div>
  )
}
