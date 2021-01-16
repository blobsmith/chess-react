import React from 'react';

const Piece = ( props ) => {
    return (
        <div
            key={props.pieceKey}
            className={'piece ' + props.className + (props.selected ? ' square-selected' : '')}
            onClick={() => (props.onClick())}
        >
            <img src={props.image}  alt="" />
        </div>
    )
};

export default Piece;