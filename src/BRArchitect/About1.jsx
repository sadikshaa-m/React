import React from 'react'
import Info from './Components/Info'


export default function About1() {
  return (
    <div className='p-6'>
      <h1 className='text-2xl'>About</h1>
      <hr className='text-gray-100 my-5'></hr>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      <div className='grid grid-cols-4 max-md:grid-cols-2 max-sm:grid-cols-1 gap-5 my-10'>
        <Info src={'https://www.w3schools.com/w3images/team2.jpg'} name={'John Doe'} profession={'CEO & Founder'}/>
        <Info src={'https://www.w3schools.com/w3images/team1.jpg'} name={'Jane Doe'} profession={'Architect'}/>
        <Info src={'https://www.w3schools.com/w3images/team3.jpg'} name={'Mike Ross'} profession={'Architect'}/>
        <Info src={'https://www.w3schools.com/w3images/team4.jpg'} name={'Dan Star'} profession={'Architect'}/>
      </div>
    </div>
  )
}
