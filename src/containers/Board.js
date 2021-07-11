import React from 'react';
import Square from '../components/Square';
import { movePieceAction, activePawnPromotionAction } from '../redux/actions';
import { connect } from 'react-redux';
import promotionService from '../services/PromotionService';
import piecesService from '../services/PiecesService';

class Board extends React.Component {

    handleMove(position) {
        if (this.props.selectedPiece !== '' && this.props.availableMovements.indexOf(position) !== -1) {
            // In case of Pawn, manage the promotion.
            if (promotionService.promotionIsNeeded(this.props.selectedPiece, position)) {
                this.props.launchPawnPromotion();
            }
            this.props.move(this.props.selectedPiece, position);
            
        }
    }

    getSquareRef = (letter, number) => {
        return letter + number;
    }

    getBackground = (letter, number, reverse, inverseResult = false) => {
        const position = this.getSquareRef(letter, number);
        let isDark = false;
        let className;
        if (reverse) {
            if (number%2 !== 0) {
                isDark = true;
            }
        }
        else {
            if (number%2 === 0) {
                isDark = true;
            }
        }

        if (isDark) {
            className = 'dark '+this.props.configuration.color;
            if (inverseResult) {
                className = 'light';
            }
        }
        else {
            className = 'light';
            if (inverseResult) {
                className = 'dark '+this.props.configuration.color;
            }
        }

        if (this.props.lastMove.indexOf(position) !== -1) {
            className = className + ' last-move';
        }
        return className;
    }

    showDot = (letter, number) => {
        let showDot = false;
        if (this.props.configuration['helpmove']) {
            if (this.props.availableMovements.indexOf(letter + number) !== -1 ) {
                showDot = true;
            }
        }
        return showDot;
    }

    getSquare(letter, number, reverse, inverseResult) {
        const position = letter + number;
        return  <Square
            key={position}
            cell={position}
            background={this.getBackground(letter, number, reverse, inverseResult)}
            onClick={() => (this.handleMove(position))}
            showDot={this.showDot(position)}
        />
    }

    render() {
        let numbers = ['8', '7', '6', '5', '4', '3', '2', '1'];
        let letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
        let reverse = false;
        if (this.props.configuration.autoflip && this.props.nextPlayer === piecesService.BLACK_PIECE) {
            reverse = true;
            numbers = numbers.reverse();
            letters = letters.reverse();
        }
        const squares = numbers.map((number, index) => (
            <div key={'row'+number} className={"board-row row-" + number} >
                { this.getSquare(letters[0], number, reverse, false) }
                { this.getSquare(letters[1], number, reverse, true) }
                { this.getSquare(letters[2], number, reverse, false) }
                { this.getSquare(letters[3], number, reverse, true) }
                { this.getSquare(letters[4], number, reverse, false) }
                { this.getSquare(letters[5], number, reverse, true) }
                { this.getSquare(letters[6], number, reverse, false) }
                { this.getSquare(letters[7], number, reverse, true) }
            </div>
        ));

        return (
            <div className="board-squares" >
                { squares }
            </div>
        );
    }
}

const mapStatesToProps = (state) => {
    return {
        selectedPiece: state.selectedPiece,
        availableMovements: state.availableMovements,
        configuration: state.configuration,
        nextPlayer: state.nextPlayer,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        move: (selectedPiece, toPosition) => {
            dispatch(movePieceAction(selectedPiece, toPosition));
        },
        launchPawnPromotion: () => {
            dispatch(activePawnPromotionAction());
        },
    };
};

export default connect(mapStatesToProps, mapDispatchToProps)(Board);
