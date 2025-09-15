
// import {FaStar} from "react-icons/fa";
// import {FaPlay} from "react-icons/fa";
// import {FaBars} from "react-icons/fa";
// import {FaSmile} from "react-icons/fa";
// import {FaSadCry} from "react-icons/fa";
// import {FaCameraRetro} from "react-icons/fa";
// import {FaSave} from "react-icons/fa";
// import {FaBookmark} from "react-icons/fa";
// import {FaShareAlt} from "react-icons/fa";
// import {age, greet} from "./data.js";
// import Practice from "./practice";
// import Adduser from "./Adduser.jsx";
// import Circle from "./Circle.jsx";
// import Poster from "./Poster.jsx";
// import Object from "./Object.jsx";
// import Obect2 from "./Obect2.jsx";
// import Object3 from "./Object3.jsx";
// import Card1 from "../pages/Card1.jsx";
// import Props1 from "../pages/props1.jsx";
// import Home from "../pages/Home/Home.jsx";
// import Add from "../pages/Add.jsx";
// import Addflexbox from "../pages/Addflexbox.jsx";
// import Buttonpractise from "./Buttonpractise.jsx";
// // import First from "./First.jsx";


// export default function App() {
//   const personName = "ram";
//   const isLofin = false;
//   const age= 90;
//   const person = {
//     name: "hari",
//     age: 90
//   };
//   const habits = ["dance", "sing"];
//   console.log(age, greet);
  
//   return (
//     <div className=" p-3.5 absolute top-0 bottom-0 left-0 right-0 m-auto">
//        <Circle/>
//        <Buttonpractise/>
//         <Object/>
//         <Obect2/>
//         <Object3/>
//         <Card1/>
//         <Props1/>
//         <Home/>
//        <Practice/>
       
//        <Adduser/>
//        {/* <First/> */}
//        <Poster/>
//        <Add/>
//        <Addflexbox/>
//      {/* <h1></h1>
//       <h1>{person.name}</h1>
//       <h2>{person.age}</h2>
//       <h1>{`${personName} is ${age} years old ${isLofin}`}</h1>
//       <p>{age+100}</p> */}
//       </div> 
    
//   )
// }


// // cd filename? --cd react-project
// //npm run dev
// //
// // sabai short huncha classname ma
// // mx- left, right ma margin
// //my- top,bottom ma margin

// //customize garna use square bracket
// //component ko name capital ma--function small ma
// //jsx(JavaScript XML) looks like html --extension of JS that allows us to embed JS,CSS, and React components into HTML

import React from 'react'

import { createBrowserRouter } from "react-router-dom";

import { RouterProvider } from "react-router-dom";


// import Contact from '../pages/contact/Contact';


// import About from '../pages/about/About';


// import Notfound from './not-found/Notfound';
// import Menu from '../pages/menu/Menu';
// import Content from '../pages/Home/Content';
// import Root from '../component/Root';
// import DisplaySection from '../pages/Home/DisplaySection';
// import Projects from '../pages/Projects/Projects';
// import About1 from '../pages/about/About1';
// import Contact1 from '../pages/contact/Contact1';
import RootLayOut from './BRArchitect/RootLayOut';
import CateringRootLayOut from './Catering/Components/CateringRootLayOut';
import BlogRootLayOut from './blog/BlogRootLayOut';


import Hero from './Categories/Hero';
import CategoryItems from './category-items/CategoryItems';
import Tasks from './all/Tasks';
import Categorieslayout from './Categories/components/Categorieslayout';













export default function App() {
 
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayOut/>,
    },
    
    {
      path:'/catering',
      element: <CateringRootLayOut/>,
    },
    {
      path: '/blog',
      element: <BlogRootLayOut/>
    },
    
    
    {
      path: '/task',
      element: <Tasks/>
    },
    

    {
      path: '/category',
      element: <Categorieslayout/>,
      children: [

        {
          index: true,
          element: <Hero />
        },
        {
          path: 'category-items/:name',
          element: <CategoryItems/>
        },
        // {
        //   path: 'category-ingredients/:name',
        //   element: <CatIngredients/>
        // }
      ]
    }
    
      // children: [
      //   {
      //      path:'
      //     element: <Content/>,
      //   },
        
        // parent sangai default ma (katai click nagardai awos) bhanna use index path ko satta ani navlink ma to ma slash matra dini
        // path: 'page11',
        //     index: true,
        //     // yo garesi page 11 show huncha
        //     element: <Page11/>
        //   },
        //   {
          //     path: 'page12',
          //     element: <Page12/>
          //   }
          // ]
    //       {
    //         path: 'about',
    //         element: <About/>,
    //       },
          
    //       {
    //     path: 'contact',
    //     element: <Contact/>,
    //   },
        
      
    //   {
    //     path: 'menu',
    //     element: <Menu/>,
    //   },
    // ]
    // },
    
    // {
    //   path: 'main',
    //   element: <Root/>,
      // children: [
      //   {
      //     index:true,
      //     element: <DisplaySection/>
      //   },

      //   {
      //     path: 'project',
      //     element: <Projects/>,
      //   },

      //   {
      //       path: 'about',
      //       element: <About1/>,
      //     },

      //  {
      //   path: 'contact',
      //   element: <Contact1/>,
      // },

      // ]
      
      
      
    // },
  ]);

  return <RouterProvider router={router}/>
   
  
}
