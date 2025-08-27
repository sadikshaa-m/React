import React from 'react'
import House from './Components/House'


export default function Projects() {
  return (
    <div className='mx-6'>
      <h1 className='text-2xl mt-15 mb-6'>Projects</h1>
      <hr className='text-gray-100  mb-12'></hr>
      <div className='grid grid-cols-4 gap-4 mb-6 max-sm:grid-cols-1 max-md:grid-cols-2 max-lg:grid-cols-2 ' >
        <House src={'https://www.w3schools.com/w3images/house5.jpg'} label={'Summer House'}/>
        <House src={'https://www.w3schools.com/w3images/house2.jpg'} label={'Brick House'}/>
        <House src={'https://www.w3schools.com/w3images/house3.jpg'} label={'Renovated'}/>
        <House src={'https://www.w3schools.com/w3images/house4.jpg'} label={'Barn House'}/>
        <House src={'https://www.w3schools.com/w3images/house2.jpg'} label={'Summer House'}/>
        <House src={'https://www.w3schools.com/w3images/house5.jpg'} label={'Brick House'}/>
        <House src={'https://www.w3schools.com/w3images/house4.jpg'} label={'Renovated'}/>
        <House src={'https://www.w3schools.com/w3images/house3.jpg'} label={'Barn House'}/>
       
      </div>
    </div>
  )
}
