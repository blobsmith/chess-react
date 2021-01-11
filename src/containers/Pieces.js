import React from 'react';
import Rook from './Rook';
import Knight from './Knight';
import Bishop from './Bishop';
import Queen from './Queen';
import King from './King';
import Pawn from './Pawn';
import '../styles/pieces.css';


class Pieces extends React.Component {

    render() {
            let pieces = [];
            Object.entries(this.props.pieces).forEach((item, key) => {
                    let piece;
                    const position = item[0];
                    const name = item[1];
                    switch (name.substring(0, 1)) {
                            case 'P':
                                    piece = <Pawn
                                        key={item}
                                        color={(name.substring(1, 2) === 'w' ? 'white' : 'black')}
                                        position={position}/>;
                                    break;

                            case 'R':
                                    piece = <Rook
                                        key={item}
                                        color={(name.substring(1, 2) === 'w' ? 'white' : 'black')}
                                        position={position}/>;
                                    break;

                            case 'N':
                                    piece = <Knight
                                        key={item}
                                        color={(name.substring(1, 2) === 'w' ? 'white' : 'black')}
                                        position={position}/>;
                                    break;

                            case 'B':
                                    piece = <Bishop
                                        key={item}
                                        color={(name.substring(1, 2) === 'w' ? 'white' : 'black')}
                                        position={position}/>;
                                    break;

                            case 'Q':
                                    piece = <Queen
                                        key={item}
                                        color={(name.substring(1, 2) === 'w' ? 'white' : 'black')}
                                        position={position}/>;
                                    break;

                            case 'K':
                                    piece = <King
                                        key={name}
                                        color={(name.substring(1, 2) === 'w' ? 'white' : 'black')}
                                        position={position}/>;
                                    break;

                            default:
                                    piece = <Pawn
                                        key={item}
                                        color={(name.substring(1, 2) === 'w' ? 'white' : 'black')}
                                        position={position}/>;
                                    break;

                    }
                    pieces.push(piece);
            });


        return (
            <div className="pieces">
                {pieces}
            </div>
        );
    }
}
export default Pieces;
