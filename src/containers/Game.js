import React from 'react';
import { connect } from 'react-redux';

import GameStatus from './GameStatus';
import Board from './Board';
import StatusOfLost from './StatusOfLost';
import PawnPromotion from './PawnPromotion';
import GameConf from './GameConf';
import piecesService from '../services/PiecesService';
import History from '../services/HistoryService';
import Piece from "./Piece";

class Game extends React.Component {

    getPieces ()  {
        let pieces = [];
        Object.entries(this.props.piecesPosition).forEach((item, key) => {
            const position = item[0];
            const name = item[1];
            const color = name.substring(1, 2);
            const type = name.substring(0, 1);
            const fullName = piecesService.getPieceId(name, position);
            const piece = <Piece
                key={item}
                color={color}
                position={position}
                type={type}
                name={fullName}
            />;
            pieces.push(piece);
        });
        return pieces;
    }

    render() {
        let reverse = false;
        return (
            <div className="game">
                <div className={'game-board ' + (this.props.configuration.autoflip && this.props.nextPlayer === piecesService.BLACK_PIECE ? 'reverse' : 'regular') }>
                    <GameStatus />
                    <Board reverse={reverse} lastMove={this.props.history.getLastMove()} />
                    <StatusOfLost />
                    <div className="pieces">
                        {this.getPieces()}
                    </div>
                    <PawnPromotion />
                    <GameConf />
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
        history: new History(state.history),
    }
};

export default connect(mapStatesToProps)(Game);
