import React from 'react'
import Header1 from './Header1'
import DisplaySection from './DisplaySection'
import Projects from './Projects'
import About1 from './About1'
import Contact1 from './Contact1'
import Footer1 from './Footer1'

export default function RootLayOut() {
  return (
    <div className='font-verdana'>
      <Header1/>
      <section id='home'>
      <DisplaySection/>
      </section>
      <section id = 'project'>
        <Projects/>
      </section>
      <section id = 'about'>
        <About1/>
      </section>
      <section id = 'contact'>
        <Contact1/>
      </section>
      <Footer1/>


      {/* <Header1/>
        <Outlet/>
      <Footer/> */}
    </div>
  )
}
