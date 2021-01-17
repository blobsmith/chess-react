

const pieceReducer = (state = '', action) => {
    let newSelectedPiece = state;
    switch(action.type) {
        case 'SELECT_PIECE':
            if (action.selectedPiece !== state) {
                newSelectedPiece = action.selectedPiece;
            }
            else {
                newSelectedPiece = '';
            }
            break;

        case 'MOVE_PIECE':
            newSelectedPiece = '';
            break;

        default:
            newSelectedPiece = state;
    }
    return newSelectedPiece;
};


export default pieceReducer;