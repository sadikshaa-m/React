// import React from 'react'
// import { NavLink } from 'react-router'

import { NavLink } from "react-router";
import { HashLink } from "react-router-hash-link";

// import { NavLink } from "react-router";

// export default function Header() {
//   return (
//     <div className='bg-black text-white px-5 py-2 flex justify-between items-baseline'>
//       <h1 className='font-bold text-2xl'>Logo</h1>
//     <nav className='space-x-5'>
//        <NavLink to={'/about'}>About</NavLink>
//        <NavLink to={'/contact'}>Contact</NavLink>
//     </nav>
//     </div>
//   )
// }





// export default function Header() {
//   return (
//     <div className="bg-black text-white px-5 py-2 flex justify-between">
//       <div>
//       <h1 className="text-2xl font-bold">Logo</h1>
//       </div>
// <nav className="space-x-5 mt-2">
//   {/* euta page bata arko page ma jana use navlink */}
// <NavLink to={'/about'}>About</NavLink>
// <NavLink to={'/contact'}>Contact</NavLink>
// </nav>

// </div>
//   )
// }




export default function Header() {
  return (
    <div className="flex fixed top-0 w-full justify-between bg-white text-black tracking-[4px] shadow-md/20 px-4 py-1 items-baseline text-[15px] z-50">
    
      <HashLink className={'hover:bg-gray-300 px-4 py-3'} smooth to='#home'>Gourmet au Catering</HashLink>
    
    <nav className="max-sm:hidden">
      <HashLink className={'hover:bg-gray-300 px-4 py-3'}  smooth to='#about'>About</HashLink>
      <HashLink className={'hover:bg-gray-300 px-4 py-3'} smooth to='#menu'>Menu</HashLink>
      <HashLink className={'hover:bg-gray-300 px-4 py-3'} smooth to="#contact">Contact</HashLink>
    </nav>

    </div>
  )
}
