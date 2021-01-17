import movementsService from '../../services/MovementsService';

const movementsReducer = (state = [], action) => {
    let movements = [];
    switch(action.type) {
        case 'SELECT_PIECE':
            if (action.selectedPiece !== '') {
                movements = movementsService.getAvailableMovement(action.selectedPiece, action.piecesPosition);
            }
            break;

        case 'MOVE_PIECE':
            movements = [];
            break;
        default:
            return state;
    }
    return movements;
};

export default movementsReducer;