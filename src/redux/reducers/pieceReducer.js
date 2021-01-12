

const pieceReducer = (state = '', action) => {
    let newSelectedPiece = state;
    switch(action.type) {
        case 'SELECT_PIECE':
            if (action.piece_type !== state) {
                newSelectedPiece = action.piece_type;
            }
            else {
                newSelectedPiece = '';
            }
            break;

        default:
            newSelectedPiece = state;
    }
    return newSelectedPiece;
};


export default pieceReducer;