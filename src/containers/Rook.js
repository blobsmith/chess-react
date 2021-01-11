import React from 'react';
import Piece from '../components/Piece';
import blackrook from '../images/pieces/black-rook.png';
import whiterook from '../images/pieces/white-rook.png';

class Rook extends React.Component {


    render() {

        const column = this.props.position.substring(0,1);
        const row = this.props.position.substring(1,2);
        const piece = this.props.color === 'white' ? whiterook : blackrook;


        return (
            <Piece image={piece} className={'Rook row'+ row + ' column' + column} />
        );
    }
}

export default Rook;
