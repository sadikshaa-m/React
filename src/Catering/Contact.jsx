// import React from 'react'
// import Header from '../../component/Header'
// import { NavLink, Outlet } from 'react-router'

// export default function Contact() {
//   return (
//     <div>
//         <Header/>
//       <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia qui laudantium eaque quia eos! Nam eum reiciendis quisquam sunt non deleniti!</p>

//       <nav className='space-x-7'>
//         <NavLink to={'/page2'}>Page2</NavLink>
//         <NavLink to={'/page1'}>Page1</NavLink>
//       </nav>

//       <Outlet/>
//     </div>
//   )
// }


// import React from 'react'

// export default function Contact() {
//   return (
//     <div>
//       <h1>This is Contact Page</h1>
//       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus modi ipsa quae quibusdam excepturi id commodi architecto? Non voluptas quibusdam rerum!</p>
//     </div>
//   )
// }





export default function Contact() {
  return (
    <div className="mx-25 max-sm:mx-8 max-md:mx-8">
      <h1 className="tracking-[5px] font-medium text-4xl ">Contact</h1>
      <p className="mt-15 mb-5">We offer full-service catering for any event, large or small. We understand your needs and we will cater the food to satisfy the biggerst criteria of them all, both look and taste. Do not hesitate to contact us.</p>
      <h1 className="text-xl font-semibold text-gray-500">Catering Service, 42nd Living St, 43043 New York, NY</h1>
      <p className="my-5">You can also contact us by phone 00553123-2323 or email catering@catering.com, or you can send us a message here:</p>
      <input className="border-gray-300 py-4 w-full"placeholder="Name"></input>
      <hr className="text-gray-300 mb-3"></hr>
      <input className="border-gray-300 py-4 w-full"placeholder="How many people" type="number"></input>
      <hr className="text-gray-300 mb-3"></hr>
      <input className="border-gray-300 py-4 w-full" type="datetime-local" defaultValue={new Date().toISOString().slice(0,16)} ></input>
      <hr className="text-gray-300 mb-3"></hr>
      <input className="border-gray-300 py-4 w-full"placeholder="Message / Special requirements"></input>
      <hr className="text-gray-300 mb-3"></hr>
      <button className="bg-gray-100 px-3 py-2 mt-4 mb-25 hover:bg-gray-300 hover:cursor-pointer">SEND MESSAGE</button>
    </div>
  )
}
