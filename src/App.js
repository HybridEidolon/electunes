import React, { Component } from 'react';
require('@blueprintjs/core');

import { Header, Editor, Footer }  from './components';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="pt-app pt-dark app">
        <Header />
        <Editor />
        <Footer />
      </div>
    );
  }
}

export default App;
