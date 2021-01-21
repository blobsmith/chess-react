import movementsService from '../../services/MovementsService';
import promotionService from '../../services/PromotionService';
import enPassantService from '../../services/EnPassantService';

const piecesPositionReducer = (state, action) => {
    if (!state) {
        state = Object.assign({}, movementsService.initPiecesPosition);
    }
    switch(action.type) {
        case 'MOVE_PIECE':
            if (action.selectedPiece) {
                let newPiecesMap = enPassantService.removePawnOnEnPassantMovement(action.selectedPiece, action.toPosition, state);
                newPiecesMap = movementsService.move(action.selectedPiece, action.toPosition, action.availableMovements, newPiecesMap);
                return newPiecesMap;
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