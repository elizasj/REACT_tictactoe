import React, {Component} from 'react';
import './App.css';

export default class DisplayWinner extends Component {
  render() {
    return (
      <div className={this.props.winner ? 'visible' : 'hidden'}>
        {console.log(this.props.winner)}
        <h2>Winner : { this.props.winner }</h2>
      </div>
    )
  }
}
