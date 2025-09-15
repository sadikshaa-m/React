import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@heroui/react";
import { FaFish } from "react-icons/fa";

  
    
export default function App() {
  return (
    <Navbar>
      <NavbarBrand>
        
        <p className="font-bold text-inherit flex items-center gap-2"><FaFish className="size-7"></FaFish>FOODHUB</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
