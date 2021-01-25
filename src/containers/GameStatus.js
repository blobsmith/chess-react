import React from 'react';
import { connect } from 'react-redux';
import piecesService from '../services/PiecesService';

class GameStatus extends React.Component {

    render() {
        let status = '';
        let playerColor = '';
        if(this.props.checkOrCheckMat['status'] !== undefined) {
            playerColor = this.props.checkOrCheckMat['color'];
            status = this.props.checkOrCheckMat['status'];
        }
        return (
            <div className="game-status">
            <div>{ piecesService.getColorLabel(this.props.nextPlayer)  + ' to play.'}</div>
            <div className={(playerColor === '' ? 'hidden' : '')} >{piecesService.getColorLabel(playerColor) + ' are ' + status + '.'}</div>
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

export default connect(mapStatesToProps)(GameStatus);
