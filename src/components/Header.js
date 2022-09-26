import React from "react";
import { NavLink } from "./NavLink";
import Image from "next/image";

const Header = () => {
  return (
    <div className="site-header container between">
      <NavLink className="site-header__link" href="/">
        <Image
          src="/assets/icons/logo.svg"
          alt="site logo"
          width="185"
          height="65"
        />
      </NavLink>
      <nav className="site-header__nav nav">
        <ul className="nav__list nav-list align-center">
          <li className="nav-list__item">
            <NavLink className="nav-list__link header-link" href="">
              Products
            </NavLink>
          </li>
          <li className="nav-list__item">
            <NavLink className="nav-list__link header-link" href="">
              Resources
            </NavLink>
          </li>
          <li className="nav-list__item">
            <NavLink className="nav-list__link header-link" href="">
              Event
            </NavLink>
          </li>
          <li className="nav-list__item">
            <NavLink className="nav-list__link header-link" href="">
              Company
            </NavLink>
          </li>
          <li className="nav-list__item">
            <NavLink className="nav-list__link header-link" href="">
              Contact Us
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="site-header__action action-header align-center">
        <div className="action-header__holder">
          <NavLink className="action-header__text header-link" href="">
            Login
          </NavLink>
        </div>
        <div className="action-header__holder">
          <NavLink className="action-header__link primary-btn" href="">
            Sign Up
          </NavLink>
        </div>
        <div className="action-header__holder action-badge">
          <button className="action-header__btn" type="button">
            Cart
          </button>
          <span className="action-header__badge center">0</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
