import React from 'react';
import Rook from './pieces/Rook';
import Knight from './pieces/Knight';
import Bishop from './pieces/Bishop';
import Queen from './pieces/Queen';
import King from './pieces/King';
import Pawn from './pieces/Pawn';
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
                                        position={position}
                                        name={name}
                                    />;

                                    break;

                            case 'R':
                                    piece = <Rook
                                        key={item}
                                        color={(name.substring(1, 2) === 'w' ? 'white' : 'black')}
                                        position={position}
                                        onClick={() => (this.handleSelectPiece())}
                                        name={name}
                                    />;
                                    break;

                            case 'N':
                                    piece = <Knight
                                        key={item}
                                        color={(name.substring(1, 2) === 'w' ? 'white' : 'black')}
                                        position={position}
                                        name={name}
                                    />;
                                    break;

                            case 'B':
                                    piece = <Bishop
                                        key={item}
                                        color={(name.substring(1, 2) === 'w' ? 'white' : 'black')}
                                        position={position}
                                        name={name}
                                    />;
                                    break;

                            case 'Q':
                                    piece = <Queen
                                        key={item}
                                        color={(name.substring(1, 2) === 'w' ? 'white' : 'black')}
                                        position={position}
                                        name={name}
                                    />;
                                    break;

                            case 'K':
                                    piece = <King
                                        key={name}
                                        color={(name.substring(1, 2) === 'w' ? 'white' : 'black')}
                                        position={position}
                                        name={name}
                                    />;
                                    break;

                            default:
                                    piece = <Pawn
                                        key={item}
                                        color={(name.substring(1, 2) === 'w' ? 'white' : 'black')}
                                        position={position}
                                        name={name}
                                    />;
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
