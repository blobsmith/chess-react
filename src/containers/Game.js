import React from 'react';
import { connect } from 'react-redux';

import Board from './Board';
import Pieces from './Pieces';
import piecesService from '../services/PiecesService';
import '../styles/game.css';
import PawnPromotion from './PawnPromotion';

class Game extends React.Component {

    render() {
        let reverse = false;
        let playerColor = '';
        let status = '';
        if(this.props.checkOrCheckMat['status'] !== undefined) {
            playerColor = this.props.checkOrCheckMat['color'];
            status = this.props.checkOrCheckMat['status'];
        }
        return (
            <div className="game">
                <div className={'game-board ' + (reverse ? 'reverse' : 'regular') }>
                    <Board reverse={reverse} />
                    <Pieces pieces={this.props.piecesPosition} />
                    <PawnPromotion />
                </div>
                <div className="game-info">
                    <div>{ piecesService.getColorLabel(this.props.nextPlayer)  + ' to play.'}</div>
                    <div className={(playerColor === '' ? 'hidden' : '')} >{piecesService.getColorLabel(playerColor) + ' are ' + status + '.'}</div>
                </div>
            </div>
        );
    }
}

const mapStatesToProps = (state) => {
    return {
        piecesPosition: state.piecesPosition,
        nextPlayer: state.nextPlayer,
        checkOrCheckMat: state.checkOrCheckMat
    }
};

export default connect(mapStatesToProps)(Game);
