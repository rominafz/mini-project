import React from "react";
import logo from "../assets/images/logo.png";
import { CartButton } from "./Button";
import { RiShoppingCartLine } from "react-icons/ri";

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="header__content">
          <img src={logo} alt="it is a logo of this store" />
        </div>
        <div className="header__buttons">
          <CartButton className="header__buttons__cartbutton">
            <RiShoppingCartLine className="header__buttons__cartbutton__icons" />
          </CartButton>
        </div>
      </header>
    </>
  );
};

export default Header;
