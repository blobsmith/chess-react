import React from 'react';

const Square = ( props ) => {
    return (
        <div id={props.cell} className={'square ' + props.background} >
            <div class="square-label">{props.cell}</div>
        </div>
    )
};

export default Square;