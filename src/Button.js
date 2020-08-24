import React, { Component } from "react";
import './App.css';

class Button extends Component {
  onClick() {
    alert('peter ❤️　em')
	alert('ペーターが大好きです。')
  }

  render() {
    return (
	  <div className="body" onClick={this.onClick}>
		<p>babe where are you...</p>
	  </div>
	)
  }
}

export default Button
