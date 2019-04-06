import React from "react";

function UserLogin() {
  return (
    <div className="container">
      <br />
      <br />
      <div className="white z-depth-2">
        <ul className="tabs bg-#448aff blue accent-2">
          <li className="tab col s3">
            <a className="white-text active" href="#login">
              login
            </a>
          </li>
          <li className="tab col s3">
            <a className="white-text" href="#register">
              register
            </a>
          </li>
        </ul>
        <div id="login" className="col s12">
          <form className="col s12">
            <div className="form-container">
              <h3 className="">Login</h3>
              <div className="row">
                <div className="input-field col s12">
                  <input id="email" type="email" className="validate" />
                  <label for="email">Email</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <input id="password" type="password" className="validate" />
                  <label for="password">Password</label>
                </div>
              </div>
              <br />
              <center>
                <button
                  className="btn waves-effect waves-light bg-#448aff blue accent-2"
                  type="submit"
                  name="action"
                >
                  Login
                </button>
                <br />
                <br />
              </center>
            </div>
          </form>
        </div>
        <div id="register" className="col s12">
          <form className="col s12">
            <div className="form-container">
              <h3 className="">Welcome</h3>
              <div className="row">
                <div className="input-field col s12">
                  <input id="name" type="text" className="validate" />
                  <label for="name">Name</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <input id="email" type="email" className="validate" />
                  <label for="email">Email</label>
                </div>
              </div>

              <div className="row">
                <div className="input-field col s12">
                  <input id="password" type="password" className="validate" />
                  <label for="password">Password</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <input id="password2" type="password" className="validate" />
                  <label for="password2">Password Confirmation</label>
                </div>
              </div>
              <center>
                <button
                  className="btn waves-effect waves-light bg-#448aff blue accent-2"
                  type="submit"
                  name="action"
                >
                  Register
                </button>
              </center>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UserLogin;
