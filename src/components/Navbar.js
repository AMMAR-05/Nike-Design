import React, { useState } from "react";
import "./Navbar.css";
import NikeLogo from "../images/Logo.png";
import BasketIcon from "../images/basket.png";
import { FiSearch } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { BiMenu } from "react-icons/bi";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav>
      {/* Nike Logo */}
      <>
        <img className="nikeLogo" src={NikeLogo} alt="nike" />
      </>

      {/* Burger Icon */}
      <BiMenu className="burgerIcon" onClick={() => setIsOpen(!isOpen)} />

      {/* Meun */}
      <ul className={isOpen ? "menu active" : "menu"}>
        {/* Close Menu Icon */}
        <MdClose className="closeIcon" onClick={() => setIsOpen(!isOpen)} />

        <li>What's New</li>
        <li>
          <strong>Men</strong>
        </li>
        <li>Women</li>
        <li>Kids</li>
        <li>Personalize</li>
        <li>Collections</li>
        <li>Sales</li>
        <li className="searchIcon">
          <FiSearch />
        </li>
      </ul>

      {/* Basket Logo */}
      <>
        <img className="basketLogo" src={BasketIcon} alt="basket" />
      </>
    </nav>
  );
}

export default Navbar;
