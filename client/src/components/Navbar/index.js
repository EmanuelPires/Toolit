import React, {Component} from "react";
import { Link } from "react-router-dom";
import SignInWidget from "../auth/SignInWidget";
import { withAuth } from "@okta/okta-react";
// import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
export default class Navbar extends Component {
  state = { authenticated: null };

  checkAuthentication = async () => {
    const authenticated = await this.props.auth.isAuthenticated();
    if (authenticated !== this.state.authenticated) {
      this.setState({ authenticated });
    }
  };

  // async componentDidMount() {
  //   this.checkAuthentication();
  // };

  logout = async () => {
    this.props.auth.logout("/");
  };

render () {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-#448aff blue accent-2
    "
    >
      <div>
        <ul className="navbar-nav ">
          <li className="nav-item">
            <Link
              to="/search"
              className={
                window.location.pathname === "/search"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Search <i className="fas fa-search" id="search" />
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
              My Profile <i className="fas fa-user-circle" id="profile" />
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
              My Orders <i className="fas fa-shopping-cart" id="orders" />
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
              My Products{" "}
              <i className="fas fa-file-invoice-dollar" id="products" />
            </Link>
          </li>
          <li className="nav-item">
              <button onClick={this.logout}>LOGOUT{" "}
              <i className="fas fa-file-invoice-dollar" id="logout" />
              </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
};


