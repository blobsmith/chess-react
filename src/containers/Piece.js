import React from 'react';
import PieceComponent from '../components/Piece';
import { selectPieceAction } from '../redux/actions';
import { connect } from 'react-redux';

class Piece extends React.Component {

    handleSelect() {
        this.props.select(this.props.name+'-'+this.props.position);
    }

    renderPiece() {
        const column = this.props.position.substring(0,1);
        const row = this.props.position.substring(1,2);
        const piece = this.props.color === 'white' ? this.props.white : this.props.black;

        return (
                <PieceComponent
                selected={this.props.selectedPiece === (this.props.name+'-'+this.props.position)}
                image={piece}
                className={'row'+ row + ' column' + column}
                onClick={() => (this.handleSelect())}
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
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        select: (piece_type) => {
            dispatch(selectPieceAction(piece_type));
        },
    }
};

export default connect(mapStatesToProps, mapDispatchToProps)(Piece);
