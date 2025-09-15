// import React from 'react'

// export default function Buttonpractise() {

//     const handleClick = () => {
//         const age = prompt("What's your age?");
//         if(Number(age)<20) {
//             alert("you are junior")
//         }
//         else{
//             alert("you are an adult")
//         }
//         console.log(age);
//     }

//   return (
//     <div className='justify-center flex m-4'>
//       <button
//       onClick={handleClick}
//       className='bg-red-300 p-5 text-white'>Click me!</button>
//     </div>
//   )
// }


// 

export default function Buttonpractise() {


  return (
    <div className="p-5">

      <input

        onChange={(e) => {
          console.log(e.target.value);
        }}
        type="text" placeholder="enter name" className="border-2" />


      <button
        onClick={(e) => {
          console.log(e);
        }}

        className="bg-black text-white p-5">Click Me</button>
    </div>
  )
}