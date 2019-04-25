import React, { Component } from 'react';
import './App.css';
import PopupHint from './components/PopupHint'

class App extends Component {
  render() {
    return (
      <>
        <span>some simple text but, </span> 
        <PopupHint elem="this" hint="is a hint"/>
        <span> is not.</span>
      </>
    );
  }
}

export default App;
