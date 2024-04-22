import React from "react";
import logo from "./Images/Reciepe_logo.png";

function Header() {
  return (
    <div>
      <nav class="navbar navbar-light bg-light">
        <div>
          <a class="navbar-brand" href="#">
            <img
              src={logo}
              alt=""
              width="100"
              height="34"
              class="d-inline-block align-text-top"
              style={{objectFit:"fill"}}
            />
          </a>
        </div>
        <div>
          <a class="navbar-brand" href="#">
            Home
          </a>
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
