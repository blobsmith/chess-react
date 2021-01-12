import React from 'react';

const Piece = ( props ) => {
    return (
        <div
            className={'piece ' + props.className + (props.selected ? ' square-selected' : '')}
            onClick={() => (props.onClick())}
        >
            <img src={props.image} />
        </div>
    )
};

export default Piece;