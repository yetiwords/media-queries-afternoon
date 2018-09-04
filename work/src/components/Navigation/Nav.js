import React, { Component } from 'react'
import './Nav.css';

export default class Nav extends Component {
    constructor() {
        super();
        this.state = {
            toggle: false,

        }
    }
    render() {
    return (
      <nav id="mainNav">
        <div>
            <a id="sbs">Start Bootstrap</a>
            <button onClick={() => this.setState({toggle: !this.state.toggle})}>MENU</button>
                <div className={this.state.toggle ? "show" : ''}>
                <ul>
                    <li><a href="#">SERVICES</a></li>
                    <li><a href="#">PORTFOLIO</a></li>
                    <li><a href="#">ABOUT</a></li>
                    <li><a href="#">TEAM</a></li>
                    <li><a href="#">CONTACT</a></li>
                </ul>
            </div>
        </div>
      </nav>
    )
  }
}