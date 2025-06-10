import React from "react";
import nikeLogo from "../../assets/images/nike.png";
import { Link } from "react-router-dom";
import "./style.css";

export default function Navbar() {
  const data = [
    {
      label: "HOME",
      to: "/",
    },
    {
      label: "MENU",
      to: "/menu",
    },
    {
      label: "ABOUT",
      to: "/about",
    },
    {
      label: "CONTACT",
      to: "/contact",
    },
    {
      label: "LOCATION",
      to: "/location",
    },
  ];
  return (
    <div>
      <div className="navbar">
        <div className="navbar-left">
          <div className="logo-container">
            <Link to="/">
              <img src={nikeLogo} alt="Nike Logo" className="logo" />
            </Link>
          </div>
        </div>

        <div className="navbar-middle">
          <ul className="navbar-middle-list">
            {data.map((item, key) => (
              <li key={key} className="navbar-middle-list-item">
                <Link to={item.to} className="navbar-middle-list-item-link">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="navbar-right">
          <button className="login-button">Login</button>
        </div>
      </div>
    </div>
  );
}
