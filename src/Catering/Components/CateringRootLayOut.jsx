


import About from "../About";
import Contact from "../Contact";
import Content from "../Content";
import Footer from "../Footer";
import Menu from "../Menu";
import Header from "./Header";



// export default function RootLayOut() {
//   return (
//     <div>
//       <Header/>
//       <Outlet/>
//     </div>
//   )
// }





export default function CateringRootLayOut() {
  return (
    <div className="font-times">
      <Header />
      <div id="home">
      <Content/>
      </div>
      <div id='about'>

      <About/>
      </div>
      <hr className="text-gray-200 my-20 lg:mx-12"></hr>
      <div id="menu">
      <Menu/>
      </div>
      <hr className="text-gray-200 my-20 lg:mx-12"></hr>
      <div id="contact">
      <Contact/>
      </div>
      
      <Footer/>
    </div>
  )
}
