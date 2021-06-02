// Code Keypad Component Here
import React, { Component } from "react";

export default class Keypad extends Component {
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
