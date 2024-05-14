import React from "react";
import Logo from "./Images/logo.svg";
// import logo from "./Images/Reciepe_logo.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <nav class="navbar navbar-light bg-light">
        <div>
          <a class="navbar-brand" href="#">
            <Link to="/">
             
              <img src={Logo} className="logo-img"></img>
            </Link>
          </a>
        </div>
        <div>
          <Link to="/">
            <a class="navbar-brand">Home</a>
          </Link>
          <Link to="/about">
            <a class="navbar-brand">About</a>
          </Link>
        </div>
        <div>
        <Link to="/yourallrecipe"><button className="login-btn">Saved Recipe</button></Link>
          
        </div>
      </nav>
    </div>
  );
}

export default Header;
