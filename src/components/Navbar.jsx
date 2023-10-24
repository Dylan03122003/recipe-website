import './nav_style.css';
import { BiLogoFacebook } from "react-icons/bi";
import { BiLogoTwitter } from "react-icons/bi";
import { BsInstagram } from "react-icons/bs";
import { LuMenu } from "react-icons/lu";
import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className='relative'>
        <div className="container m-auto flex justify-between p-[30px] max-md:items-center items-center">
          <div className="flex items-center">
            <input type="checkbox" name="" id="toggler" className="" checked={isOpen} onChange={toggleNavbar} />
            <label id='togglerlabel' htmlFor="toggler"> <LuMenu className="w-6 h-6 mr-5 max-[400px]:mr-3" /> </label>
            <h3 className="text-[22px] font-medium">Foodieland.</h3>
            {isOpen && <div id="overlay" onClick={toggleNavbar}></div>}
            {isOpen && (
              <div id='navbar' className="flex text-base font-medium tracking-[-0.32px] gap-2">
                <h3 className="text-[22px] font-medium m-[20px]">Foodieland.</h3>
                <hr />
                <a className="hover:border-b-4 hover:border-[#d8d8d8]" href="">Home</a>
                <a className="hover:border-b-4 hover:border-[#d8d8d8]" href="">Recipes</a>
                <a className="hover:border-b-4 hover:border-[#d8d8d8]" href="">Blog</a>
                <a className="hover:border-b-4 hover:border-[#d8d8d8]" href="">Contact</a>
                <a className="hover:border-b-4 hover:border-[#d8d8d8]" href="">About Us</a>
              </div>
            )}
          </div>

          <div className="flex items-center 2xl:text-[17px] 2xl:gap-14 lg:gap-11 font-medium tracking-[-0.32px] gap-6 max-md:gap-[2px] max-md:hidden">
            <a className="hover:border-b-4 hover:border-[#d8d8d8]" href="">Home</a>
            <a className="hover:border-b-4 hover:border-[#d8d8d8]" href="">Recipes</a>
            <a className="hover:border-b-4 hover:border-[#d8d8d8]" href="">Blog</a>
            <a className="hover:border-b-4 hover:border-[#d8d8d8]" href="">Contact</a>
            <a className="hover:border-b-4 hover:border-[#d8d8d8]" href="">About Us</a>
          </div>
          <div className="flex gap-5 text-[22px] max-[400px]:text-[20px] max-[400px]:gap-2">
            <a href=""><BiLogoFacebook /></a>
            <a href=""><BiLogoTwitter /></a>
            <a href=""><BsInstagram /></a>
          </div>
        </div>
        <hr />
      </div>
    </>
  );
};

export default Navbar;
