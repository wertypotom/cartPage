import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = ({ cartItems }) => {
  return (
    <nav>
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo">
          Books Shop
        </Link>
        <ul className="right hide-on-med-and-down">
          <li>
            <Link to="/">Books</Link>
          </li>
          <li>
            <Link to="/cart">
              <i className="fas fa-shopping-cart" />
              <span className="cart-legth">
                {cartItems.length === 0 ? "" : cartItems.length}
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
