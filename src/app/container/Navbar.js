"use client"

import {Link} from "react-scroll";
import React from "react";

const Navbar = () => {

  const tabs = [
    {title: 'Home', href: '/'},
    {title:'About', href:'/about'},
    {title: 'Projects', href: '/projects'},
    {title: 'Skills', href: '/skills'},
    {title:'Contact', href: '/contact'}
  ]

  return (
    <div className="bg-[#111111] z-10 h-22 fixed w-full">
      <div className="container mx-auto w-[75%]  flex items-center justify-between p-7">
        <div  className="text-white text-[1.8rem] font-semibold">
          <h1 className="cursor-pointer ">Ajit.dev</h1>
        </div>
        <ul className="flex gap-8 space-x-4 max-[1100px]:hidden">
        
         {
           tabs.map((tab, i) => (
             <li key={i}>
          <Link
                to={tab.href}
                activeClass=""
                smooth={true}
                offset={-100}
                duration={300}
                className="text-[#9ca3af] text-[1.2rem] cursor-pointer hover:text-gray-400 transition duration-300 relative activeTab"
              >
              {tab.title}
            </Link>
          </li>
           ))
         }
        </ul>
        <ul className="fixed top-0 right-0 w-60 z-30 flex gap-8 space-x-4 flex-col min-[1100px]:hidden">
        
         {
           tabs.map((tab, i) => (
             <li key={i}>
          <Link
                to={tab.href}
                activeClass=""
                smooth={true}
                offset={-100}
                duration={300}
                className="text-[#9ca3af] text-[1.2rem] cursor-pointer hover:text-gray-400 transition duration-300 relative activeTab"
              >
              {tab.title}
            </Link>
          </li>
           ))
         }
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
