import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      likes: 0,
    }
    this.incLike = this.incLike.bind(this);
  }

  incLike() {
    this.setState({ likes: this.state.likes + 1 });
  }

  render() {
    return (
      <React.Fragment>
        <h1>Reactjs Like Button</h1>
        <button onClick = {this.incLike}><span className = 'like-amount'>{this.state.likes}</span><span className ='like-text'>Likes</span></button>
      </React.Fragment>
    )
  }
}

export default App;
