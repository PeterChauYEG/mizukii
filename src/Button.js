import React, { Component } from "react";
import './App.css';

class Button extends Component {
  onClick() {
	alert('ペーターが大好きです。')
  }

  render() {
    return (
	  <div className="button" onClick={this.onClick}>
		<p>babe where are you...</p>
	  </div>
	)
  }
}

export default Button
