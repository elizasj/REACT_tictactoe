import React, {Component} from 'react';
import './App.css';

export default class HandleCells extends Component {
  handleClick(index) {
    // place an X or an O
    if (this.props.board[index] === "") {
      this.props.board[index] = this.props.turn
      this.props.manageTurn(this.props.turn)
    }

    // possible wining combos
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    let cells = this.props.board

    // check for win
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
        this.props.displayWinner(this.props.turn)
      }
    }
  }

  render() {
    return (
      <div className="board">
         {this.props.board.map((cell, index) => {
              console.log(cell)
              return <div onClick={() => this.handleClick(index)} className="square">{cell}</div>
          })}
      </div>
    )
  }
}
