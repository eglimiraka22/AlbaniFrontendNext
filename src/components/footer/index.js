import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { ImMail } from "react-icons/im";
import { FaHome } from "react-icons/fa";
import { IoIosFootball } from "react-icons/io";
import { FaRegNewspaper } from "react-icons/fa6";
import { TbPodium } from "react-icons/tb";
import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <div className='footer-container'>
        <div className='footer-container-top-content'>
          <div className='footer-container-top-content-left'>
            <div className='ic_footer'>
              <FaFacebook />
            </div>
            
          </div>
          <div className='footer-container-top-content-right'>
           
          </div>
        </div>
        <div className='footer-container-middle-content'>
          <ul>
            <li>
              <Link href='/'>
                  <span>
                    <FaHome />
                  </span>
                  Home
              </Link>
              <Link href='/categories/sports'>
                  <span>
                    <IoIosFootball />
                  </span>
                  Sports
              </Link>
              <Link href='/categories/aktualitet'>
                  <span>
                    <FaRegNewspaper />
                  </span>
                  Aktualitet
              </Link>
              <Link href='/categories/politike'>
                  <span>
                    <TbPodium />
                  </span>
                  Politike
              </Link>
            </li>
          </ul>
        </div>
        <div className='footer-container-bottom-content'>
          Te gjitha te drejtat e rezervuara nga Albanian News.al © 2023
        </div>
      </div>
    </footer>
  );
};

export default Footer;
