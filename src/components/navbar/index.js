// Navbar.js
import React, { useState } from "react";
import  Link  from "next/link";
import { FaHome } from "react-icons/fa";
import { IoIosFootball } from "react-icons/io";
import { FaRegNewspaper } from "react-icons/fa6";
import { TbPodium } from "react-icons/tb";
import logo from "../../../public/logo.png";
import Image from "next/image"
const Navbar = () => {
  // React useState updated the state of a variable constant
  //   @see — https://react.dev/reference/react/useState
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    // When this function is clicked the menu variable constant isMobileMenuOpen is being changed from false to true and true to false
  };

  return (
    <nav className='navbar'>
      <Link href={"/"} className='logo'>
        <Image src={logo} alt='' />
      </Link>
      <div className={`menu ${isMobileMenuOpen ? "open" : ""}`}>
        <ul>
          <li>
            <Link
              className=''
              href={"/"}
              onClick={() => {
                setIsMobileMenuOpen(false);
              }}
            >
              <div className='ic_nav'>
                <FaHome />
              </div>
              Home
            </Link>
          </li>
          <li>
            <Link
              className=''
              href={`/categorypage/sports`}
              onClick={() => {
                setIsMobileMenuOpen(false);
              }}
            >
              <div className='ic_nav'>
                <IoIosFootball />
              </div>
              Sports
            </Link>
          </li>
          <li>
            <Link
              className=''
              href={`/categorypage/aktualitet`}
              onClick={() => {
                setIsMobileMenuOpen(false);
              }}
            >
              <div className='ic_nav'>
                <FaRegNewspaper />
              </div>{" "}
              Aktualitet
            </Link>
          </li>
          <li>
            <Link
              className=''
              href={`/categorypage/politike`}
              onClick={() => {
                setIsMobileMenuOpen(false);
              }}
            >
              <div className='ic_nav'>
                <TbPodium />
              </div>{" "}
              Politike
            </Link>
          </li>
        </ul>
      </div>
      {/* Where the mobile menu is opened and closed */}
      <div
        className={`mobile-menu-icon ${isMobileMenuOpen ? "open" : ""}`}
        onClick={toggleMobileMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
