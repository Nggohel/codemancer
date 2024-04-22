import React from "react";

function Header() {
  return (
    <div>
      <nav class="navbar navbar-light bg-light">
        <div>
          <a class="navbar-brand" href="#">
            <img
              src="/docs/5.1/assets/brand/bootstrap-logo.svg"
              alt=""
              width="30"
              height="24"
              class="d-inline-block align-text-top"
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
