import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "@okta/okta-react";
import SignInWidget from "../components/auth/SignInWidget";

export default withAuth(
  class Home extends Component {
    state = { authenticated: null };

    checkAuthentication = async () => {
      const authenticated = await this.props.auth.isAuthenticated();
      if (authenticated !== this.state.authenticated) {
        this.setState({ authenticated });
      }
    };

    async componentDidMount() {
      this.checkAuthentication();
    }

    async componentDidUpdate() {
      this.checkAuthentication();
    }

    login = async () => {
      this.props.auth.login("/");
    };

    logout = async () => {
      this.props.auth.logout("/");
    };

    render() {
      if (this.state.authenticated === null) return null;

      const mainContent = this.state.authenticated ? (
        <div>
          <div className="container">
            <br />
            <br />
            <div className="row center-align">
              <div className="jumbotron jumbotron-fluid">
                <div className="white z-depth-2">
                  <ul className="tabs bg-#448aff blue accent-2" />
                  <div className="card">
                    <div className="card-content">
                      <h2 className="display-4 ">Toolit</h2>
                      <h4>
                        Toolit provides a platform for users to rent, post
                        rentals, and place orders all from one website. Users
                        can register as a new user which unlocks the ability to
                        post listings, place orders, and view their order
                        history.
                      </h4>
                      <br />
                      <br />

                      <button
                        className="btn btn-light btn-lg"
                        onClick={this.login}
                      >
                        Search Tools
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container center-align">
              <h4>Who We Are</h4>
            </div>
            <div className="row">
              <div class="col s12 m6">
                <div class="card blue-grey darken-1">
                  <div class="card-content white-text">
                    <span class="card-title">Rachit Vijay</span>
                    <p>Rachit.Vijay@gmail.com</p>
                  </div>
                </div>
              </div>
              <div class="col s12 m6">
                <div class="card blue-grey darken-1">
                  <div class="card-content white-text">
                    <span class="card-title">Emanuel Pires</span>
                    <p>EmanuelPires11@gmail.com</p>
                  </div>
                </div>
              </div>
              <div class="col s12 m6">
                <div class="card blue-grey darken-1">
                  <div class="card-content white-text">
                    <span class="card-title">Mike Fox</span>
                    <p>MikeFox17@gmail.com</p>
                  </div>
                </div>
              </div>
              <div class="col s12 m6">
                <div class="card blue-grey darken-1">
                  <div class="card-content white-text">
                    <span class="card-title">Anthony Lawson</span>
                    <p>MrTechnocrat@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container center-align">
            <button className="btn btn-light btn-lg" onClick={this.logout}>
              Logout
            </button>
          </div>
        </div>
      ) : (
        <div>
          <div className="container">
            <br />
            <br />
            <div className="row center-align">
              <div className="jumbotron jumbotron-fluid">
                <div className="white z-depth-2">
                  <ul className="tabs bg-#448aff blue accent-2" />
                  <div className="card">
                    <div className="card-content">
                      <h2 className="display-4 ">Toolit</h2>
                      <h4>
                        Toolit provides a platform for users to rent, post
                        rentals, and place orders all from one website. Users
                        can register as a new user which unlocks the ability to
                        post listings, place orders, and view their order
                        history.
                      </h4>
                      <br />
                      <br />

                      <button
                        className="btn btn-light btn-lg"
                        onClick={this.login}
                      >
                        Get Started!
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container center-align">
              <h4>Who We Are</h4>
            </div>
            <div className="row">
              <div class="col s12 m6">
                <div class="card blue-grey darken-1">
                  <div class="card-content white-text">
                    <span class="card-title">Rachit Vijay</span>
                    <p>Rachit.Vijay@gmail.com</p>
                  </div>
                </div>
              </div>
              <div class="col s12 m6">
                <div class="card blue-grey darken-1">
                  <div class="card-content white-text">
                    <span class="card-title">Emanuel Pires</span>
                    <p>EmanuelPires11@gmail.com</p>
                  </div>
                </div>
              </div>
              <div class="col s12 m6">
                <div class="card blue-grey darken-1">
                  <div class="card-content white-text">
                    <span class="card-title">Mike Fox</span>
                    <p>MikeFox17@gmail.com</p>
                  </div>
                </div>
              </div>
              <div class="col s12 m6">
                <div class="card blue-grey darken-1">
                  <div class="card-content white-text">
                    <span class="card-title">Anthony Lawson</span>
                    <p>MrTechnocrat@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );

      return <div>{mainContent}</div>;
    }
  }
);