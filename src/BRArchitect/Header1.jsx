import React from 'react'
import { HashLink } from 'react-router-hash-link'



export default function Header1() {
  return (
    <div className='px-6 py-3.5 shadow-lg/10 flex justify-between tracking-[3.5px] text-[16px] fixed w-full bg-white z-50'>
      <div className=''>
        <HashLink className={' hover:bg-[#CCCCCC] p-2.5'} smooth to='#home'><strong>BR</strong> Architects</HashLink>
      </div>
      <nav className='space-x-3.5 tracking-[3.5px] max-sm:hidden'>
        <HashLink className={' hover:bg-[#CCCCCC] p-2.5'} smooth to='#project'>Projects</HashLink>
        <HashLink className={' hover:bg-[#CCCCCC] p-2.5'} smooth to='#about'>About</HashLink>
        <HashLink className={' hover:bg-[#CCCCCC] p-2.5'} smooth to='#contact'>Contact</HashLink>
        
       
      </nav>
    </div>
  )
}
