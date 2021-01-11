import React from 'react';
import Piece from '../components/Piece';
import blackknight from '../images/pieces/black-knight.png';
import whiteknight from '../images/pieces/white-knight.png';

class Knight extends React.Component {


    render() {

        const column = this.props.position.substring(0,1);
        const row = this.props.position.substring(1,2);
        const piece = this.props.color === 'white' ? whiteknight : blackknight;


        return (
            <Piece image={piece} className={'Knight row'+ row + ' column' + column} />
        );
    }
}

export default Knight;
