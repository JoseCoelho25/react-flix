import React from 'react';
import { Navbar, Avatar, Dropdown} from "flowbite-react";
import Logo from "../images/logo.png";
import User from "../images/user.png";
import {Link} from "react-router-dom";

function NavBar() {
  return (
    <Navbar
  fluid={true}
  rounded={true}
  className="bg-black"
>
  <Navbar.Brand >
    <img
      src={Logo}
      className="mr-3 ml-3 h-6 sm:h-9"
      alt="Logo"
    />
  </Navbar.Brand>
  <div className="flex md:order-2 mr-4">
    <Dropdown
      arrowIcon={false}
      inline={true}
      label={<Avatar alt="User settings" img={User} rounded={true}/>}
    >
      <Dropdown.Header>
        <span className="block text-sm">
          José Coelho
        </span>
        <span className="block truncate text-sm font-medium">
          batatas@hotmail.com
        </span>
      </Dropdown.Header>
      <Dropdown.Item>
        Perfil
      </Dropdown.Item>
      <Dropdown.Item>
        Favoritos
      </Dropdown.Item>
      <Dropdown.Item>
        Settings
      </Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item>
        Sign out
      </Dropdown.Item>
    </Dropdown>
    <Navbar.Toggle />
  </div>
  <Navbar.Collapse>
    <Link to="/"
      className="text-white text-xl hover:text-blue-500"
    >
      Movies
    </Link>
    <Link to="/series" className="text-white text-xl hover:text-blue-500">
      Series
    </Link>
    <Link to="/about" className="text-white text-xl hover:text-blue-500">
      AboutUs
    </Link>
    <Link to="/contact" className="text-white text-xl hover:text-blue-500">
      ContactUs
    </Link>
  </Navbar.Collapse>
</Navbar>
  )
}

export default NavBar