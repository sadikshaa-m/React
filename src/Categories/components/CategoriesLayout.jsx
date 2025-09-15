
import { Outlet } from 'react-router-dom'
import HeaderC from './HeaderC'

export default function Categorieslayout() {
  return (
    <div>
      
        <HeaderC></HeaderC>
        

        <Outlet/>
    </div>
  )
}
