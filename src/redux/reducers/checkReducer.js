import piecesService from '../../services/PiecesService';
import movementsService from '../../services/MovementsService';

const CHECK = 'check';
const CHECK_MAT = 'check-mat';

const checkReducer = (state = {}, action) => {
    let newState = {};
    switch(action.type) {
        case 'CHECK_OR_CHECK_MAT':
            if (movementsService.isCheck(action.nextPlayer, action.piecesPosition)) {
                newState = {
                    'status' : CHECK,
                    'color' : action.nextPlayer
                };
            }
            return newState;
            break;

        default:
            return state;
    }
    return state;
};

export default checkReducer;