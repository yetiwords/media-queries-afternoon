import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/Navigation/Nav';
import Header from './components/Header/Header';
import SectionOne from './components/sectionOne/SectionOne';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Header/>
        <SectionOne />
      </div>
    );
  }
}

export default App;
