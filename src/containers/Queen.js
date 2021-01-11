import React from 'react';
import Piece from '../components/Piece';
import blackqueen from '../images/pieces/black-queen.png';
import whitequeen from '../images/pieces/white-queen.png';

class Queen extends React.Component {


    render() {

        const column = this.props.position.substring(0,1);
        const row = this.props.position.substring(1,2);
        const piece = this.props.color === 'white' ? whitequeen : blackqueen;


        return (
            <Piece image={piece} className={'Queen row'+ row + ' column' + column} />
        );
    }
}

export default Queen;
