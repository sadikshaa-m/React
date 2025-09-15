import { Outlet } from "react-router";
import HeaderC from "./HeaderC";


export default function CatLayout() {
  return (
    <div>
      
        <HeaderC/>
        

        <Outlet/>
    </div>
  )
}
