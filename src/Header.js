import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img className="header__logo" src="logo1.png" alt="" />
      </Link>
      <div className="header_nav">
        <Link to={"/login"}>
          <div className="header__option">
            <span className="header__optionLineTwo">HOME</span>
            <span className="header__optionLineOne"></span>
          </div>
        </Link>
        <Link to="/orders">
          <div className="header__option">
            <span className="header__optionLineTwo">MENU</span>
            <span className="header__optionLineOne"></span>
          </div>
        </Link>

        <Link to="/orders">
          <div className="header__option">
            <span className="header__optionLineTwo">PROMOTIONS</span>
            <span className="header__optionLineOne"></span>
          </div>
        </Link>

        <Link to="/orders">
          <div className="header__option">
            <span className="header__optionLineTwo">THE EXPERIENCE</span>
          </div>
        </Link>

        <Link to="/orders">
          <div className="header__option">
            <span className="header__optionLineTwo">LOCATIONS</span>
          </div>
        </Link>
        <Link to="/orders">
          <div className="header__option">
            <span className="header__optionLineTwo">RESERVATIONS</span>
          </div>
        </Link>
        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount"></span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
