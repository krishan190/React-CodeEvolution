// lecture 16 Conditional Rendering

import React, { Component } from "react";

class UserGreeting extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
    };
  }
  render() {
    return this.state.isLoggedIn ? (
      <h1>Welcome Krishan</h1>
    ) : (
      <div>Welcome Guest</div>
    );

    // let message;
    // if (this.state.isLoggedIn) {
    //   message = <div>Welcome Krishna</div>;
    // } else {
    //   message = <div>Welcome Guest</div>;
    // }
    // return <div>{message}</div>;
    // if (this.state.isLoggedIn) {
    //   return <div>Welcome Vishwas</div>;
    // } else {
    //   return <div>welcome Guest</div>;
    // }
  }
}

export default UserGreeting;
