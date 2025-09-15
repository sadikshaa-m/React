import React from 'react'
import Props from '../component/props'


export default function props1() {
  return (
    <div className='border-1 border-[#00000044] p-2 font-serif shadow-2xl'>
      <Props name="Ravi" age={24} isStudent={true}/>
      <Props name="Patrick" age={33} isStudent={true}/>
      <Props name="Sita" age={50} isStudent={false}/>
      <Props />
    </div>
  )
}




