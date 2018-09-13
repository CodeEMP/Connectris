import React, { Component } from 'react';
import Board from './board.js';
import PlayerStatus from './playerstatus.js';
import * as gameActions from '../actions/gameActions.js';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';

class Gametoconnect extends Component {

  hoverHandler(x) {
    this.props.actions.onhover(x);
  }

  clickHandler(x, y) {
    this.props.actions.clicksquare(x,y);
  }

  resetHandler() {
    this.props.actions.resetButton();
  }

  componentDidMount() {
    console.log(this.props.currentPlayer);
  }

  render() {
    return (
        <div>
          <div className="content">
            <div className="redPlayer">
              <PlayerStatus player='Red'
                currentPlayer={this.props.currentPlayer}
                points={this.props.redPoints}
                shape={this.props.redShape} />
            </div>
            <div className="board">
              <Board currentPlayer={this.props.currentPlayer}
                squares={this.props.squares}
                hoverHandler={(x) => this.hoverHandler(x)}
                clickHandler={(x,y) => this.clickHandler(x,y)} />
            </div>
            <div className='bluePlayer'>
              <PlayerStatus player='Blue'
                currentPlayer={this.props.currentPlayer}
                points={this.props.bluePoints}
                shape={this.props.blueShape} />
            </div>
          </div>
          <div style={{marginTop:50}}>
            <Link to="/"><button>HOME</button></Link>
            <button style={{marginTop:30}} onClick={()=>this.resetHandler()}>RESET</button>
          </div>
        </div>
    )
  }
}

function mapStateToProps (state) {
  return {...state.game}
}

function mapDispatchToProps (dispatch) {
  return {
    actions: {
      onhover: function (x) {
        dispatch(gameActions.hoverChange(x))
      },
      clicksquare: function(x,y) {
        dispatch(gameActions.squareClick(x,y))
      },
      resetButton: function () {
        dispatch(gameActions.resetGame())
      }
    }
  }
}

const Game = connect(
  mapStateToProps, mapDispatchToProps
)(Gametoconnect)

export default Game
