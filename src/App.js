import React, {Component} from 'react';
import './App.css';

import NewGame from './NewGame';
import DisplayWinner from './DisplayWinner';

class App extends Component {

    constructor(props) {
        super(props)
        this.newGame = this.newGame.bind(this);
        this.state = {
            PLAYER_ONE_SYMBOL: "X",
            PLAYER_TWO_SYMBOL: "O",
            currentTurn: "X",
            board: [
                "","","",
                "","","",
                "","",""
            ],
            winner: null
        }
    }

    // reset the game
    newGame() {
        this.setState({
            currentTurn: "X",
            board: [
                "","","",
                "","","",
                "","",""
            ],
            winner: null
        });
    }

    handleClick(index) {
        // place an X or an O
        if (this.state.board[index] === "") {
            this.state.board[index] = this.state.currentTurn
            this.setState({
                board: this.state.board,
                currentTurn: this.state.currentTurn === this.state.PLAYER_ONE_SYMBOL
                    ? this.state.PLAYER_TWO_SYMBOL
                    : this.state.PLAYER_ONE_SYMBOL
            });
        }

        // possible win combos
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

        let cells = this.state.board

        // check for win
        for (let i = 0; i < lines.length; i++) {
          const [a, b, c] = lines[i];
          if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
            const winner = this.state.currentTurn
            this.setState({
                winner: winner,
                board: [
                    "❤","❤","❤",
                    "❤","❤","❤",
                    "❤","❤","❤"
                ]
            })
          }
        }
    }

    render() {
        return (
            <div>
                <div className="header">
                    <h1>Tic Tac Toe</h1>
                    <NewGame reset={this.newGame.bind(this)} />
                    <DisplayWinner winner={this.state.winner} />
                </div>

                <div className="board">
                    {this.state.board.map((cell, index) => {
                        return <div onClick={() => this.handleClick(index)} className="square">{cell}</div>
                    })}
                </div>
            </div>
        )
    }
}

export default App;
