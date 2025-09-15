import React from 'react'
import Header1 from './Header1'
import DisplaySection from '../pages/Home/DisplaySection'
import About1 from '../pages/about/About1'
import Contact1 from '../pages/contact/Contact1'
import Projects from '../pages/Projects/Projects'
import Footer1 from '../pages/Home/Footer1'


export default function Root() {
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
