import React from "react";
import { NavLink } from "react-router-dom";

function RootLayout() {
  return (
    <nav>
      <div>
        <h2>
          <NavLink to={"/"} className={"text-3xl font-extrabold"}>
            Amrutham
          </NavLink>
        </h2>
      </div>
      <div>
        <ul>
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/about-us"}>About Us</NavLink>
          </li>
          <li>
            <NavLink to={"/contact-us"}>Contact Us</NavLink>
          </li>
        </ul>
        <ul>
          <li>
            <NavLink to={"/login"}>Login</NavLink>
          </li>
          <li>
            <NavLink to={"/signup"}>Sign Up</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default RootLayout;
