// import Button from "../../component/Button";

import { NavLink, Outlet } from "react-router";
import Header from "../../component/Header";




// export default function Home() {
//   return (
//     <div>
//       <div className="border-1 my-5 p-2 text-center">
//       <p className="my-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis iusto quibusdam quo aspernatur possimus itaque!</p>
   
//     <div className="flex gap-7 my-5 justify-center">
//       <Button label={"Click!"} color={"bg-purple-300"}/>
//       <Button label={"Click here!"} color={"bg-pink-400"}/>
//     </div>
//     </div>

//     <div className="flex gap-5 justify-start flex-wrap my-5 animate-spin">
//     <div className="h-20 basis-20 bg-black rounded-full"></div>
//     <div className="h-20 basis-20 bg-red-300 rounded-full "></div>
//     <div className="h-20 basis-20 bg-purple-400 rounded-full"></div>
//     <div className="h-20 basis-20 bg-green-400 grow rounded-full animate-spin"></div>
//     <div className="h-20 basis-20 bg-orange-300 rounded-full "></div>
//     </div>

//     <div className="grid grid-cols-2 gap-5 mt-2 grid-rows-[200px_100px_70px] my-5 ">
//     <div className=" bg-black text-amber-50 text-center">hello</div>
//     <div className=" bg-red-300 "></div>
//     <div className=" bg-purple-400"></div>
//     <div className=" bg-green-400"></div>
//     <div className=" bg-orange-300 "></div>
//     <div className=" bg-yellow-300 "></div>
//     </div>
//      </div>
//   )
// }




// import React from 'react'
// import Box1 from '../../component/Box1'


// export default function Home() {
//   return (
//     <div className='grid grid-cols-1 sm:grid-cols-2 max-w-[640px]      '>
//       {/* custom grid garna square bracket ma ..px halni [200px_300px] esto */}
//       {/* <div className='bg-red-300 max-sm:bg-blue-400'>   */}
//         {/* sm le responsive banaucha sm:bg-blue garyo bhane sm size bhanda mathi blue color huncha sm size bhayesi chai red color aucha -- if max-sm: garyo bhane chai maximum chai */}
// {/*       
//         <Box1 color={"bg-red-400"} label={"hello,box1"}/>
        
        
//         <Box1 color={"bg-purple-400"} label={"hello,box2"}/> */}
//        <div className='bg-red-400 p-5'>
//         <h1 className='font-bold tracking-wider text-white max-md:font-medium max-sm:text-black'>Box1</h1>
//         <p className='max-sm:text-[10px] text-[13px]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores dolor, provident dolores impedit deserunt magnam recusandae labore voluptates quisquam fugit perspiciatis delectus? Temporibus, quos rerum.</p>
//        </div>
//        <div className='bg-pink-300 p-5'>
//         <h2 className='font-bold tracking-wider text-white max-md:font-medium max-sm:text-black'>Box2</h2>
//         <p className='max-sm:text-[10px] text-[13px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non, officia. Debitis quia, vero aliquid sit voluptatibus dolorem cupiditate quam doloremque voluptate provident atque necessitatibus esse?</p>
//        </div>

      
//     </div>
//   )
// }





// import Button from "../../component/Button";
// export default function Home() {
//   const handleCLick = ()=> {
//     const age = prompt("What's your age ?");
//     if(Number(age) > 20 ){
//       alert("You're an adult")
//     }
//     else{
//       alert("You're not an adult")
//     }
//     console.log(age);
//   }

//   const greet = () => {
//     const name = prompt("What's your name?");
//     alert(`Hello ${name}`);
//   };

//   const multiple = () => {
//     const num = prompt("Enter a number to get its square");
//     const square = Number(num) * Number(num);
//     alert(`${num} * ${num} = ${square}`);
//   }
//   const Tripple = () => {
//     const nums = prompt("Enter a number to thrice it");
//     const thrice = Number(nums) * Number(nums) * Number(nums);
//     alert (`${thrice}`);
//   }

//   const EvenorOdd = () => {
//     const n = Number(prompt("Enter a number"));
//     if(n % 2 == 0) {
//       alert(`${n} is even`);
//     }
//     else{
//       alert(`${n} is odd`);
//     }

//   }


//   return (
//     <div>
//     <div className="flex justify-center m-5 gap-5">
//       {/* <Button 
//       onClick={handleCLick}
//       label={"Click me!"} color={"text-white bg-pink-400"}/> */}
//       <button className="bg-pink-400 text-white p-3"
//       /* // onClick={handleCLick} className="bg-pink-400 text-white p-3" */
//       // onClick={() => greet("sadi")}
//       onClick={greet}
//       >Click me!</button>

//       <button className="p-3 bg-amber-400"
//       onClick={handleCLick}
//       >CLICK ME!</button>
//       </div>
//       <div className="flex justify-center">
//       <button className="p-3 bg-blue-400"
//       onClick={multiple}
//       >Square ME!</button>
//       </div>

//       <div className="flex justify-center mt-5">
//         <button className="p-3 bg-green-400"
//         onClick={Tripple}
//         >Triple Me!</button>
//       </div>
//       <div className="flex justify-center mt-5">
//         <button className="p-3 bg-green-400"
//         onDoubleClick={EvenorOdd}
//         >Click!</button>
//       </div>

// </div>
  
//   )
// }





// export default function Home() {
//   return (
//     <div className="">
      
//       <h1>Hello home</h1>
//       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim optio cupiditate ullam nulla unde nihil eaque, quo a, inventore, quasi repellendus. Mollitia doloremque tenetur, voluptatum sit dolor sint natus. Excepturi, quam nihil ipsum neque tempora eveniet sed modi nemo saepe ab corporis, amet corrupti adipisci maxime repudiandae nulla facere sit!</p>
      {/* <nav className="gap-5 flex">
      <NavLink to={'/'}>PAGE11</NavLink>
      <NavLink to={'/page12'}>PAGE12</NavLink>
      </nav>
      <Outlet/>  */}
      {/* outlet le child route lai render garcha(dekhauni kam garcha)--parent ma use garni */}
//     </div>
//   )
// }





export default function Home() {
  return (
    <div>
      
    </div>
  )
}

