import React, { Component } from 'react';

class PlayerStatus extends Component {

  renderPoints() {
      return (
        <p>
          {this.props.points}
        </p>
      )
  }

  renderColorShape() {
    if (this.props.shape==='Line') {
      return (
        <div className='shapecontainerbig'>
          <p className='shapecontainer'>
            [][][][]
          </p>
        </div>
      )
    }
    else if (this.props.shape==='Square') {
      return (
        <div className='shapecontainerbig'>
          <p className='shapecontainer'>
            [][]
          </p>
          <p className='shapecontainer'>
            [][]
          </p>
        </div>
      )
    }
    else if (this.props.shape==='Tee') {
      return (
        <div className='shapecontainerbig'>
          <p className='shapecontainer'>
            []
          </p>
          <p className='shapecontainer'>
            [][][]
          </p>
        </div>
      )
    }
    else if (this.props.shape==='Ell') {
      return (
        <div className='shapecontainerbig'>
          <p className='shapecontainer'>
            []
          </p>
          <p className='shapecontainer'>
            []
          </p>
          <p className='shapecontainer elloffset'>
            [][]
          </p>
        </div>
      )
    }
    else if (this.props.shape==='Lee') {
      return (
        <div className='shapecontainerbig'>
          <p className='shapecontainer elloffset'>
            []
          </p>
          <p className='shapecontainer elloffset'>
            []
          </p>
          <p className='shapecontainer'>
            [][]
          </p>
        </div>
      )
    }
    else if (this.props.shape==='Ess') {
      return (
        <div className='shapecontainerbig'>
          <p className='shapecontainer essoffset'>
            [][]
          </p>
          <p className='shapecontainer'>
            [][]
          </p>
        </div>
      )
    }
    else if (this.props.shape==='Zee') {
      return (
        <div className='shapecontainerbig'>
          <p className='shapecontainer'>
            [][]
          </p>
          <p className='shapecontainer essoffset'>
            [][]
          </p>
        </div>
      )
    }
  }

  render() {
    return(
      <div>
        <h2>
          {this.props.currentPlayer === this.props.player ? (<p className='turnmarker'>:NEXT:</p>) : <p className='turnmarker'>:_____:</p>}
          {this.props.player}
          {this.renderPoints()}
          {this.renderColorShape()}
        </h2>
      </div>
    )
  }
}

export default PlayerStatus;
