import React from 'react';
import PieceComponent from '../components/Piece';
import { selectPieceAction, storeAvailableMovementsAction, movePieceAction } from '../redux/actions';
import { connect } from 'react-redux';
import piecesService from '../services/PiecesService';

class Piece extends React.Component {

    handleSelect() {
        this.props.select(piecesService.getPieceName(this.props.name, this.props.position));
    }

    handleMove(position) {
        this.props.move(this.props.selectedPiece, position);
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
                    this.handleMove(this.props.position);
                    this.handleSelect();
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
        selectedPiece: state.selectedPiece
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        select: (selectedPiece) => {
            dispatch(selectPieceAction(selectedPiece));
            dispatch(storeAvailableMovementsAction(selectedPiece));
        },
        move: (selectedPiece, toPosition) => {
            dispatch(movePieceAction(selectedPiece, toPosition));
        },
    }
};

export default connect(mapStatesToProps, mapDispatchToProps)(Piece);
