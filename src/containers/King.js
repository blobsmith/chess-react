import React from 'react';
import Piece from '../components/Piece';
import blackking from '../images/pieces/black-king.png';
import whiteking from '../images/pieces/white-king.png';

class King extends React.Component {


    render() {

        const column = this.props.position.substring(0,1);
        const row = this.props.position.substring(1,2);
        const piece = this.props.color === 'white' ? whiteking : blackking;


        return (
            <Piece image={piece} className={'King row'+ row + ' column' + column} />
        );
    }
}

export default King;
