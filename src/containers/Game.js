import React from 'react';
import { connect } from 'react-redux';

import Board from './Board';
import Pieces from './Pieces';
import PawnPromotion from './PawnPromotion';

class Game extends React.Component {

    render() {
        let reverse = false;
        return (
            <div className="game">
                <div className={'game-board ' + (reverse ? 'reverse' : 'regular') }>
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
    }
};

export default connect(mapStatesToProps)(Game);
