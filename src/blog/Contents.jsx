import React from 'react'
import Description from './components/Description'
import Posts from './components/Posts'
import Tags from './components/Tags'


export default function Contents() {
  return (

    <div className='grid grid-cols-[65%_35%] my-10'>

    <div className='m-5 flex flex-col gap-10 max-sm:flex-col'>
      <Description src='https://www.w3schools.com/w3images/woods.jpg' alt='' date={7} heading={"TITLE HEADING"} num={0} hover='hover:underline'/>
      <Description src='https://www.w3schools.com/w3images/bridge.jpg' alt='' heading={'BLOG ENTRY'} date={2} num={2} rounded='rounded-full'/>
    </div>

    <div className='m-5 flex flex-col gap-10'>
        <div className='shadow-xl/40 '>
            <img className='w-full' src='https://www.w3schools.com/w3images/avatar_g.jpg'></img>
            <div className='px-3 py-5'>
            <h1 className='text-[20px]'>My Name</h1>
            <p className='text-[15px] py-2.5'>Just me, myself and I, exploring the universe of uknownment. I have a heart of love and a interest of lorem ipsum and mauris neque quam blog. I want to share my world with you.</p>
            </div>
        </div>

        <div className='shadow-xl/40'>
            <h1 className='py-5 px-5 text-[20px] bg-[#F1F1F1] '>Popular Posts</h1>
            <Posts title={'Lorem'} label={'Sed mattis nunc'} src='https://www.w3schools.com/w3images/workshop.jpg'/>
            <Posts title={'Ipsum'} label={'Praes tinci sed'} src='https://www.w3schools.com/w3images/gondol.jpg'/>
            <Posts title={'Dorum'} label={'Ultricies congue'} src='https://www.w3schools.com/w3images/skies.jpg'/>
        </div>

        <div className='shadow-xl/40'>
            <h1 className='py-5 px-5 text-[20px] bg-[#F1F1F1]'>Tags</h1>
            <div className='flex flex-wrap px-2 pt-5 pb-8 gap-2 items-center'>
                <Tags label={'Travel'} padding='px-2' bg='bg-black' text='text-white' font='text-[17px]'></Tags>
                <Tags label={'New York'} bg='bg-gray-200' padding='px-2'
                font='font-extralight' text='text-[13px]'/>
                <Tags label={'London'} bg='bg-gray-200' padding='px-2' text='text-[13px]'/>
                <Tags label={'IKEA'} bg='bg-gray-200' padding='px-2' text='text-[13px]'/>
                <Tags label={'NORWAY'} bg='bg-gray-200' padding='px-2' text='text-[13px]'/>
                <Tags label={'DIY'} bg='bg-gray-200' padding='px-2' text='text-[13px]'/>
                <Tags label={'Ideas'} bg='bg-gray-200' padding='px-2' text='text-[13px]'/>
                <Tags label={'Baby'} bg='bg-gray-200' padding='px-2' text='text-[13px]'/>
                <Tags label={'Family'} bg='bg-gray-200' padding='px-2' text='text-[13px]'/>
                <Tags label={'News'} bg='bg-gray-200' padding='px-2' text='text-[13px]'/>
                <Tags label={'Clothing'} bg='bg-gray-200' padding='px-2' text='text-[13px]'/>
                <Tags label={'Shopping'} bg='bg-gray-200' padding='px-2' text='text-[13px]'/>
                <Tags label={'Sports'} bg='bg-gray-200' padding='px-2' text='text-[13px]'/>
                <Tags label={'Games'} bg='bg-gray-200' padding='px-2' text='text-[13px]'/>
                
            </div>
        </div>

    </div>
    </div>

  )
}
