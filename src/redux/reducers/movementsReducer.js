import movementsService from '../../services/MovementsService';

const movementsReducer = (state = [], action) => {
    let movements = [];
    switch(action.type) {
        case 'GET_AVAILABLE_MOVEMENTS':
            if (action.selectedPiece !== '') {
                movements = movementsService.getAvailableMovement(action.selectedPiece, action.piecesPosition);
            }
            break;

        default:
            return state;
    }
    return movements;
};

export default movementsReducer;