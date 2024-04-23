import React from "react";
import Logo from "./Images/Logo";
// import logo from "./Images/Reciepe_logo.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <nav class="navbar navbar-light bg-light">
        <div>
          <a class="navbar-brand" href="#">
            <Link to="/">
              <Logo />
            </Link>
          </a>
        </div>
        <div>
          <Link to="/">
            <a class="navbar-brand">Home</a>
          </Link>
          <a class="navbar-brand" href="#">
            About
          </a>
        </div>
        <div>
          <button className="login-btn">Log in</button>
        </div>
      </nav>
    </div>
  );
}

export default Header;
