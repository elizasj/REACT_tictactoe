import React, {Component} from 'react';
import './App.css';

import NewGame from './NewGame';
import DisplayWinner from './DisplayWinner';
import HandleCells from './Cells';

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

    manageTurn() {
        this.setState({
            board: this.state.board,
            winner: null,
            currentTurn: this.state.currentTurn === this.state.PLAYER_ONE_SYMBOL
                         ? this.state.PLAYER_TWO_SYMBOL
                         : this.state.PLAYER_ONE_SYMBOL
        });
    }

    displayWinner(winner) {
        this.setState({
            winner: winner,
            board: [
                "❤","❤","❤",
                "❤","❤","❤",
                "❤","❤","❤"
            ]
        });
    }

    render() {
        return (
            <div>
                <div className="header">
                    <h1>Tic Tac Toe</h1>
                </div>

                <NewGame
                    reset={this.newGame.bind(this)} />
                <DisplayWinner
                    winner={this.state.winner}
                    displayWinner={this.displayWinner.bind(this)} />
                <HandleCells
                    player1={this.state.PLAYER_ONE_SYMBOL}
                    player2={this.state.PLAYER_TWO_SYMBOL}
                    turn={this.state.currentTurn}
                    board={this.state.board}
                    manageTurn={this.manageTurn.bind(this)}
                    displayWinner={this.displayWinner.bind(this)} />
            </div>
        )
    }
}

export default App;
