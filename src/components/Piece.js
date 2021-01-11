import React from 'react';

const Piece = ( props ) => {
    return (
        <div className={'piece ' + props.className} >
            <img src={props.image} />
        </div>
    )
};

export default Piece;