
import HeaderC from './HeaderC'
import { Outlet } from 'react-router'

export default function CategoriesLayout() {
  return (
    <div>
      <HeaderC/>

      <Outlet/>
    </div>
  )
}

