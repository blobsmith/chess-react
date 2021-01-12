import React from 'react';
import { connect } from 'react-redux';

import Board from './Board';
import Pieces from './Pieces';
import '../styles/game.css';

class Game extends React.Component {

    render() {
        let reverse = false;
        return (
            <div className="game">
                <div className={'game-board ' + (reverse ? 'reverse' : 'regular') }>
                    <Board reverse={reverse} />
                    <Pieces pieces={this.props.piecesPosition} />
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }
}

const mapStatesToProps = (state) => {
    return {
        piecesPosition: state.piecesPosition,
    }
};

export default connect(mapStatesToProps)(Game);
