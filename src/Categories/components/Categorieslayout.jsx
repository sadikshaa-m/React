
import HeaderC from './HeaderC'
import { Outlet } from 'react-router-dom'

export default function Categorieslayout() {
  return (
    <div>
      <HeaderC/>

      <Outlet/>
    </div>
  )
}
