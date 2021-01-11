import React from 'react';
import Piece from '../components/Piece';
import blackbishop from '../images/pieces/black-bishop.png';
import whitebishop from '../images/pieces/white-bishop.png';

class Bishop extends React.Component {


    render() {

        const column = this.props.position.substring(0,1);
        const row = this.props.position.substring(1,2);
        const piece = this.props.color === 'white' ? whitebishop : blackbishop;


        return (
            <Piece image={piece} className={'Bishop row'+ row + ' column' + column} />
        );
    }
}

export default Bishop;
