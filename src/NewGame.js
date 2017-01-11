import React, {Component} from 'react';
import './App.css';

export default class NewGame extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.reset}>clear board</button>
      </div>
    )
  }
}
