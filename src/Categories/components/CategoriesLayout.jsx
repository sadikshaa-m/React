
import { Outlet } from 'react-router'
import HeaderC from './HeaderC'

export default function Categorieslayout() {
  return (
    <div>
      
        <HeaderC></HeaderC>
        

        <Outlet/>
    </div>
  )
}
