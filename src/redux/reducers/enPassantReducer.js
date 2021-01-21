import enPassantService from '../../services/EnPassantService';

const enPassantReducer = (state = [], action) => {
    switch(action.type) {
        case 'MOVE_PIECE':
            let newState = [];
            if (action.selectedPiece !== '') {
                newState = enPassantService.getAvailables(action.selectedPiece, action.toPosition, action.piecesPosition, newState);
            }
            return newState;
            break;

        default:
            return state;
    }
    return state;
};

export default enPassantReducer;