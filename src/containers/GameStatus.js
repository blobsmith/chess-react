import React from 'react';
import { connect } from 'react-redux';
import piecesService from '../services/PiecesService';
import { endGameAction } from '../redux/actions';

class GameStatus extends React.Component {

    render() {
        let status = '';
        let playerColor = '';
        if(this.props.checkOrCheckMat['status'] !== undefined) {
            playerColor = this.props.checkOrCheckMat['color'];
            status = this.props.checkOrCheckMat['status'];
            if (status === 'check mat') {
                this.props.endGame();
            }
        }
        return (
            <div className="game-status">
                <div className="play-status">{ piecesService.getColorLabel(this.props.nextPlayer)  + ' to play.'}</div>
                <div className={"check-status " + (playerColor === '' ? 'hidden' : '')} >{piecesService.getColorLabel(playerColor) + ' are ' + status + '.'}</div>
            </div>
        );
    }
}

const mapStatesToProps = (state) => {
    return {
        nextPlayer: state.nextPlayer,
        checkOrCheckMat: state.checkOrCheckMat
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        endGame: () => {
            dispatch(endGameAction());
        },
    };
};

export default connect(mapStatesToProps, mapDispatchToProps)(GameStatus);
