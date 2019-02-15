import React, { Component } from 'react';
import './App.css';

import Navbar from './components/Navbar';
import PageContent from './components/PageContent';
import data from './data/data.js';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <PageContent data={data}/>
      </div>
    );
  }
}

export default App;
