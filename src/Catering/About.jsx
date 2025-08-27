// import React from 'react'

// export default function About() {
//   return (
//     <div>
//       <h1> This is About page. </h1>
//       <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, omnis! Animi, cupiditate, magnam suscipit aspernatur, iure cum eius odio quae ea accusantium reprehenderit maxime nostrum!</p>
//     </div>
//   )
// }




export default function About() {
  return (
    <div className="grid grid-cols-2 mt-19 max-md:grid-cols-1">
      <div>
        <img src="https://www.w3schools.com/w3images/tablesetting2.jpg" alt="" className=" pl-27 opacity-76 rounded-[7px] max-md:hidden"></img>
      </div>
      <div className="p-8 pr-27 max-md:px-8 max-md:px-8 max-md:text-center">
        <h1 className="tracking-[5px] text-4xl font-medium text-center pb-12">About Catering</h1>
        <h1 className="tracking-[5px] text-center text-[17px] font-medium pb-5">Tradition since 1889</h1>
        <p className="text-[18px]">The Catering was founded in blabla by Mr. Smith in lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute iruredolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.We only use <span className="bg-gray-100 px-2 py-1">seasonal </span>ingredients.</p>
        <p className="text-gray-500 text-[18px] mt-4 hidden md:block">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
    </div>
  )
}

