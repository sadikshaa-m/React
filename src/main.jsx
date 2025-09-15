// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
// html element browser ma show garne process --render


import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { HeroUIProvider } from '@heroui/react'


createRoot(document.getElementById('root')).render(
  <HeroUIProvider>
    <App />
  </HeroUIProvider>


)
