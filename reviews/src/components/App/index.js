import React, { Component } from 'react';

import './App.css';

import Header from './Header';
import Footer from './Footer';
import View from './View';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />
      <View />
      <Footer />
      </div>
    );
  }
}

export default App;
