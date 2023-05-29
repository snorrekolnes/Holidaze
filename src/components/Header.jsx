//import React from 'react';
import { NavLink} from "react-router-dom";
import Holidaze from "../assets/img/Holidaze-logo-1.svg"
import { useState } from "react";
import Profile2 from "../assets/img/Profile.png"


const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
   const logout = () => {
    localStorage.clear();
    window.location.href = "/";
  }
    
return (
  
<div>
<nav
        className="flex items-center justify-between flex-wrap bg-white p-6 fixed w-full z-10 top-0"
      >
        <NavLink to="/">
         <img src={Holidaze} alt=""/></NavLink>
         <div className="flex text-center flex-shrink-0 text-HOLIDAZE-BLACK mr-6">
          <a
            className="text-HOLIDAZE-BLACK font-Josefin no-underline hover:text-white hover:no-underline"
            href="#"
          >
            <h1 className="pl-2 text-center justify-center tablet:hidden desktop:hidden">Holidaze</h1>
          </a>
        </div>
        <h2
          className="text-HOLIDAZE-BROWN text-center m-auto justify-center tablet:flex hidden font-Indie text-xs"
        >
          “I`ts better to see something once, than to hear about it a million times”
        </h2>
        <div className="block">
          <button onClick={()=> setIsOpen(!isOpen)}
            id="nav-toggle"
            className="flex lg:hidden items-center px-3 py-2 border rounded text-HOLIDAZE-BLACK border-HOLIDAZE-BLACK hover:text-HOLIDAZE-BROWN hover:border-HOLIDAZE-BROWN"
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
      {isOpen &&
        <div
          className="w-full flex-grow lg:items-center lg:w-auto lg:block pt-6 lg:pt-0"
          id="nav-content"
        >
         <ul className="list-reset lg:flex justify-end flex-1 items-center">
         {!localStorage.accessToken && <> <NavLink to="Signup">
        <li className="mr-3">
              <span
                id="signUp-btn"
                className="inline-block text-HOLIDAZE-BLACK font-Josefin no-underline hover:text-underline py-2 px-4"
                href="./create.html"
                >Sign Up
         </span >
            </li>
            </NavLink>
            <li id="credits-show" className="mr-3"></li>
            <NavLink to="Login">
            <li className="mr-3">
              <span
                id="login-btn"
                className="inline-block text-HOLIDAZE-BLACK no-underline font-Josefin  hover:text-underline py-2 px-4"
                href="#"
                >Login
            </span >
            </li>
            </NavLink> </> }
            {localStorage.venueManager ==="true" &&     <NavLink to="createvenue">
            <li className="mr-3">
              <span
                id="logout-btn"
                className="inline-block text-HOLIDAZE-BLACK no-underline font-Josefin  hover:text-underline py-2 px-4"
                href="#"
                >Create Venue
            </span>
            </li>
            </NavLink>}
            <li className="mr-3">
              <span onClick={logout}
                id="logout-btn"
                className="inline-block text-HOLIDAZE-BLACK no-underline font-Josefin hover:text-underline py-2 px-4"
                href="#"
                >Log Out
            </span >
            </li>

            <NavLink to="Profile">
            <li id="profile-btn" className="ml-3 w-10 laptop:ml-0">
              <img src={Profile2} alt="profile" />
            </li>
            </NavLink>
         </ul>
        </div>
}
<div
          className="w-full hidden  flex-grow lg:items-center lg:w-auto lg:block pt-6 lg:pt-0"
          id="nav-content"
        >
         <ul className="list-reset lg:flex justify-end flex-1 items-center">
         {!localStorage.accessToken && <> <NavLink to="Signup">
        <li className="mr-3">
              <span
                id="signUp-btn"
                className="inline-block text-HOLIDAZE-BLACK font-Josefin no-underline  hover:text-underline py-2 px-4"
                href="./create.html"
                >Sign Up
         </span >
            </li>
            </NavLink>
            <li id="credits-show" className="mr-3"></li>
            <NavLink to="Login">
            <li className="mr-3">
              <span
                id="login-btn"
                className="inline-block text-HOLIDAZE-BLACK no-underline font-Josefin  hover:text-underline py-2 px-4"
                href="#"
                >Login
            </span >
            </li>
            </NavLink> </> }
            {localStorage.venueManager ==="true" &&      <NavLink to="createvenue">
            <li className="mr-3">
              <span
                id="create-btn"
                className="inline-block text-HOLIDAZE-BLACK no-underline font-Josefin  hover:text-underline py-2 px-4"
                href="#"
                >Create Venue
            </span>
            </li>
            </NavLink>}
            {localStorage.accessToken && <li className="mr-3">
              <span onClick={logout}
                id="logout-btn"
                className="inline-block text-HOLIDAZE-BLACK no-underline font-Josefin hover:cursor-pointer   hover:text-underline py-2 px-4"
                href="#"
                >Log Out
            </span >
            </li>}
            {localStorage.accessToken &&     <NavLink to="Profile">
            <li id="profile-btn" className="ml-3 w-10 laptop:ml-0">
              <img src={Profile2} alt="profile" />
            </li>
            </NavLink>}
         </ul>
        </div>
      </nav>
</div>
      
)
}
export default Header;
