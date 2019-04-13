import React, { Component } from "react";

<<<<<<< HEAD
class Profile extends Component {
  state = {
    name: "Nic Cage",
    email: "NicCage@gmail.com",
    address: "200m Flavortown, DC, USA",
    phone: "301-666-4200",
    image:
      "https://i218.photobucket.com/albums/cc98/Proctor_06/crazynic.jpg?width=250&height=250&crop=1:1,smart"
  };

  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       formValues: {}
  //     };
  //   }

  //   //FINISH THIS CHANGE HANDLER
  //   handleChange(event) {
  //     event.preventDefault();
  //     let formValues = this.state.formValues;
  //     let name = event.target.name;
  //     let value = event.target.value;

  //     formValues[name] = value;

  //     this.setState({ formValues });
  //   }

  //   handleSubmit(event) {
  //     event.preventDefault();
  //     console.log(this.state.formValues);
  //   }

  //EDIT BELOW
  render() {
    return (
      <div className="container">
        <br />
        <br />
        <br />
        <div className="row">
          <div className="col s3">
            <div className="card">
              <div className="card-image">
                <img src={this.state.image} className="responsive-img" />{" "}
              </div>
              <div className="card-content">
                <ul>
                  <li>{this.state.name}</li>
                  <li>{this.state.email}</li>
                  <li>{this.state.address}</li>
                  <li>{this.state.phone}</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col s1" />
          <div className="col s8">
            <div className="row">
              <form className="col s12">
                <div className="row">
                  <div className="input-field col s12">
                    <input
                      placeholder="Name"
                      id="name"
                      type="text"
                      className="validate"
                      name="name"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <input
                      placeholder="Email"
                      id="email"
                      type="text"
                      className="validate"
                      name="email"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <input
                      placeholder="Address"
                      id="address"
                      type="text"
                      className="validate"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <input
                      placeholder="Phone"
                      id="phone"
                      type="text"
                      className="validate"
                    />
                  </div>
                </div>
              </form>
              <button
                className="btn waves-effect waves-light"
                type="submit"
                name="action"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
=======
const Profile = props => (
  <div className="container">
    <br />
    <br />
    <br />
    <div className="row">
      <div className="col s3">
        <div className="card">
          <div className="card-image">
            <img alt="" src={props.Image} className="responsive-img" />{" "}
          </div>
          <div className="card-content">
            <ul>
              <li>{props.Name}</li>
              <li>{props.Email}</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col s1" />
      <div className="col s8">
        <div className="row">
          <form className="col s12">
            <div className="row">
              <div className="input-field col s12">
                <input
                  placeholder="Name"
                  id="name"
                  type="text"
                  className="validate"
                  name="name"
                />
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input
                  placeholder="Email"
                  id="email"
                  type="text"
                  className="validate"
                  name="email"
                />
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input
                  placeholder="Address"
                  id="address"
                  type="text"
                  className="validate"
                />
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input
                  placeholder="Phone"
                  id="phone"
                  type="text"
                  className="validate"
                />
              </div>
            </div>
          </form>
          <button
            className="btn waves-effect waves-light"
            type="submit"
            name="action"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  </div>
);
>>>>>>> 288b147f4853a1f6d764055759a048e30f251c89

export default Profile;
