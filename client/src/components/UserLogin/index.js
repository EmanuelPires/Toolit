import React from "react";

function UserLogin() {
  return (
    <div class="materialContainer">
      <div class="box">
        <div class="title">LOGIN</div>

        <div class="input">
          <label for="name">Username</label>
          <input type="text" name="name" id="name" />
          <span class="spin" />
        </div>

        <div class="input">
          <label for="pass">Password</label>
          <input type="password" name="pass" id="pass" />
          <span class="spin" />
        </div>

        <div class="button login">
          <button>
            <span>GO</span> <i class="fa fa-check" />
          </button>
        </div>

        <a href="" class="pass-forgot">
          Forgot your password?
        </a>
      </div>

      <div class="overbox">
        <div class="material-button alt-2">
          <span class="shape" />
        </div>

        <div class="title">REGISTER</div>

        <div class="input">
          <label for="regname">Username</label>
          <input type="text" name="regname" id="regname" />
          <span class="spin" />
        </div>

        <div class="input">
          <label for="regpass">Password</label>
          <input type="password" name="regpass" id="regpass" />
          <span class="spin" />
        </div>

        <div class="input">
          <label for="reregpass">Repeat Password</label>
          <input type="password" name="reregpass" id="reregpass" />
          <span class="spin" />
        </div>

        <div class="button">
          <button>
            <span>NEXT</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserLogin;
