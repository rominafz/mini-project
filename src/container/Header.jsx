import React, { useEffect } from "react";
import logo from "../assets/images/logo.png";
import { Button } from "../components/Button";
import { RiShoppingCartLine } from "react-icons/ri";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";
const Header = () => {
  const cart = useSelector((state) => state.cart.singleCart);
  const history = useHistory();
  const handleGoHome = () => {
    history.push("/");
  };
  useEffect(() => {}, [cart]);
  return (
    <>
      <header className="header">
        <div className="header__content">
          <img
            className="header__content__logo"
            src={logo}
            alt="it is a logo of this store"
            onClick={handleGoHome}
          />
        </div>

        <div className="header__buttons">
          {cart.orders.length > 0 && (
            <span className="header__buttons__entity">
              {cart.orders.length}
            </span>
          )}
          <Button className="header__buttons__cartbutton">
            <RiShoppingCartLine className="header__buttons__cartbutton__icons" />
          </Button>
        </div>
      </header>
    </>
  );
};

export default Header;
