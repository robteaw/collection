import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
// images
import { FaBars, FaTimes } from "react-icons/fa"; // npm install react-icons --save
import logo from "../images/logo.png";

export default function Navbar() {
  // Setting nav mobile
  const [click, setClick] = useState(false);

  // Close nav menu
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <Nav>
      <Logo onClick={closeMobileMenu}>
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </Logo>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li className="nav-links" onClick={closeMobileMenu}>
          <Link to="/">Movies</Link>
        </li>
        <li className="nav-links" onClick={closeMobileMenu}>
          <Link to="/wishlist">Wishlist</Link>
        </li>
        <li className="nav-links" onClick={closeMobileMenu}>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <MenuIcon
        onClick={handleClick}
        // className={icon ? "icon icon-scroll" : "icon"}
      >
        {click ? <FaBars /> : <FaTimes />}
      </MenuIcon>
    </Nav>
  );
}

// styling
const Nav = styled.div`
  background-color: var(--navColor);
  height: 65px;
  width: 100%;
  display: flex;
  position: sticky;
  align-items: center;
  justify-content: space-around;
  img {
    height: 50px;
  }
  .nav-menu {
    list-style-type: none;
  }
  .nav-links {
    padding: 20px 20px;
    display: inline-block; // place links side by side
  }
  a {
    color: var(--linkColor);
    text-decoration: none;
    &:hover {
      color: var(--linkHover);
    }
  }

  @media (max-width: 500px) {
    padding: 0 2rem;
    position: relative;
    justify-content: space-between;
    .nav-menu {
      width: 100%;
      display: flex;
      flex-direction: column;
      position: absolute;
      top: 4rem; /* removes the spacing in navbar and menu */
      left: -100%;
    }
    .nav-menu .active {
      padding: 1.5rem;
      left: 0;
      opacity: 98%;
      outline: none;
      z-index: 999;
    }
    .nav-menu li {
      text-align: center;
      padding: 1.5rem;
      top: 0;
      width: 100%;
      display: table;
    }
  }
`;

const Logo = styled.div`
  align-items: left;
`;

const MenuIcon = styled.div`
  color: var(--linkColor);
  display: none;
  cursor: pointer;

  &:hover {
    color: var(--linkHover);
  }

  @media (max-width: 500px) {
    display: block;
  }
`;
