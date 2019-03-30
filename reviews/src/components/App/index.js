import React, { Component } from 'react';

import './App.css';

import Header from './Header';
import Footer from './Footer';
import View from './View';

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <View />
        <Footer />
      </>
    );
  }
}

export default App;
