import React from "react";
import { Link } from "react-router-dom";
// import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/search"
              className={
                window.location.pathname === "/search"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              SearchProducts
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/myprofile"
              className={
                window.location.pathname === "/myprofile"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              My Profile
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/myorders"
              className={
                window.location.pathname === "/myorders"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              My Orders
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/MyProducts"
              className={
                window.location.pathname === "/MyProducts"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              My Products
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
