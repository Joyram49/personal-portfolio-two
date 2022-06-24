import React, { useState } from "react";
import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceFill } from "react-icons/ri";
import { TiContacts } from "react-icons/ti";

const Nav = () => {
  const [activeNav, setAciveNav] = useState("#");

  return (
    <nav className='nav__container'>
      <a
        href='#'
        onClick={() => setAciveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      <a
        href='#about'
        onClick={() => setAciveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <AiOutlineUser />
      </a>
      <a
        href='#experience'
        onClick={() => setAciveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <BiBook />
      </a>
      <a
        href='#services'
        onClick={() => setAciveNav("#services")}
        className={activeNav === "#services" ? "active" : ""}
      >
        <RiServiceFill />
      </a>
      <a
        href='#contact'
        onClick={() => setAciveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <TiContacts />
      </a>
    </nav>
  );
};

export default Nav;
