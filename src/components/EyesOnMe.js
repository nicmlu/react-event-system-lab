// Code EyesOnMe Component Here

import React, { Component } from "react";

export default class EyesOnMe extends Component {
  handleKeyPress = e => {
    if (e.key) {
      console.log("Entering password..."));
      resize("+");
    } 
  };

  render() {
    return (
      <input type="password" onKeyPress={this.handleKeyPress} />
    );
  }
}
