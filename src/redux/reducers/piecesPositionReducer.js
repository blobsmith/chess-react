import movementsService from '../../services/MovementsService';

const piecesPositionReducer = (state, action) => {
    if (!state) {
        state = Object.assign({}, movementsService.initPiecesPosition);
    }
    switch(action.type) {
        case 'MOVE_PIECE':
            if (action.selectedPiece) {
                return movementsService.move(action.selectedPiece, action.toPosition, state);
            }
            break;

        case 'CASTLING':
            break;

        case 'PAWN_PROMOTION':
            break;

        default:
            return state;
    }
    return state;
};


export default piecesPositionReducer;