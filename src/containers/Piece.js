import React from 'react';
import PieceComponent from '../components/Piece';
import { selectPieceAction, unselectPieceAction, movePieceAction } from '../redux/actions';
import { connect } from 'react-redux';
import piecesService from '../services/PiecesService';

class Piece extends React.Component {

    handleClick() {
        // White player play only white pieces.
        if (this.props.nextPlayer === this.props.color) {

            // If piece is selected, unselect it on next click.
            if (piecesService.getCurrentPosition(this.props.selectedPiece) === this.props.position) {
                this.props.unselect();
            }
            else {
                // If no piece has been selected, select it.
                if (this.props.selectedPiece === '') {
                    this.props.select(piecesService.getPieceName(this.props.name, this.props.position));
                }
                else {
                    // If a piece is selected and click on other piece, check if we have to move it.
                    this.props.move(this.props.selectedPiece, this.props.position);
                }
            }
        }
    }

    renderPiece() {
        const column = this.props.position.substring(0,1);
        const row = this.props.position.substring(1,2);
        const piece = this.props.color === piecesService.WHITE_PIECE ? this.props.white : this.props.black;

        return (
                <PieceComponent
                pieceKey={piecesService.getPieceName(this.props.name, this.props.position)}
                selected={this.props.selectedPiece === piecesService.getPieceName(this.props.name, this.props.position)}
                image={piece}
                className={'row'+ row + ' column' + column}
                onClick={() => {
                    this.handleClick();
                }}
            />
        );
    }

    render() {
        return this.renderPiece();
    }
}

const mapStatesToProps = (state) => {
    return {
        selectedPiece: state.selectedPiece,
        nextPlayer: state.nextPlayer
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        select: (selectedPiece) => {
            dispatch(selectPieceAction(selectedPiece));
        },
        unselect: (selectedPiece) => {
            dispatch(unselectPieceAction(selectedPiece));
        },
        move: (selectedPiece, toPosition) => {
            dispatch(movePieceAction(selectedPiece, toPosition));
        },
    }
};

export default connect(mapStatesToProps, mapDispatchToProps)(Piece);
