import React from 'react';
import { connect } from 'react-redux';

import GameStatus from './GameStatus';
import Board from './Board';
import Pieces from './Pieces';
import PawnPromotion from './PawnPromotion';
import piecesService from '../services/PiecesService';

class Game extends React.Component {

    render() {
        let reverse = false;
        return (
            <div className="game">
                <div className={'game-board ' + (this.props.configuration.autoflip && this.props.nextPlayer === piecesService.BLACK_PIECE ? 'reverse' : 'regular') }>
                    <GameStatus />
                    <Board reverse={reverse} />
                    <Pieces pieces={this.props.piecesPosition} />
                    <PawnPromotion />
                </div>
            </div>
        );
    }
}

const mapStatesToProps = (state) => {
    return {
        piecesPosition: state.piecesPosition,
        configuration: state.configuration,
        nextPlayer: state.nextPlayer,
    }
};

export default connect(mapStatesToProps)(Game);
