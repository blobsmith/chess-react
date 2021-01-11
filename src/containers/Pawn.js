import React from 'react';
import Piece from '../components/Piece';
import blackpawn from '../images/pieces/black-pawn.png';
import whitepawn from '../images/pieces/white-pawn.png';

class Pawn extends React.Component {


    render() {

        const column = this.props.position.substring(0,1);
        const row = this.props.position.substring(1,2);
        const piece = this.props.color === 'white' ? whitepawn : blackpawn;


        return (
            <Piece image={piece} className={'Pawn row'+ row + ' column' + column} />
        );
    }
}

export default Pawn;
