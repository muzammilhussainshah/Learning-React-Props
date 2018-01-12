import React, { Component } from 'react';
import Links from './linksComponent';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      links: [
        "https://firebasestorage.googleapis.com/v0/b/shopinbrowser-e2b71.appspot.com/o/Assets%2Fslider%203.png?alt=media&token=1ec4788a-08d9-46ea-b237-d86ca757227b",
        "https://firebasestorage.googleapis.com/v0/b/shopinbrowser-e2b71.appspot.com/o/Assets%2Fslider%202.png?alt=media&token=2cf32f20-9402-4f33-bb3e-56782cdcfda0",
        "https://firebasestorage.googleapis.com/v0/b/shopinbrowser-e2b71.appspot.com/o/Assets%2Fposter%201%20(1).jpg?alt=media&token=e5f1ddc4-b629-45af-9797-b0c4cfa7bb0f",
        "https://firebasestorage.googleapis.com/v0/b/shopinbrowser-e2b71.appspot.com/o/Assets%2Fslider%204.png?alt=media&token=be601205-be27-4adc-840a-e2392754372d"
      ]
    }
  }


  render() {
    return (
      <div>
   
        <Links source={this.state.links} elName="a"/>
      </div>
    );
  }
}

export default App;
