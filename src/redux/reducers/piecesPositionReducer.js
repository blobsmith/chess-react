import movementsService from '../../services/MovementsService';
import promotionService from '../../services/PromotionService';

const piecesPositionReducer = (state, action) => {
    if (!state) {
        state = Object.assign({}, movementsService.initPiecesPosition);
    }
    switch(action.type) {
        case 'MOVE_PIECE':
            if (action.selectedPiece) {
                return movementsService.move(action.selectedPiece, action.toPosition, action.availableMovements, state);
            }
            break;

        case 'PAWN_PROMOTION_REPLACE':
            return promotionService.promotion(action.pieceName, action.pieceType, state);
            break;

        default:
            return state;
    }
    return state;
};


export default piecesPositionReducer;