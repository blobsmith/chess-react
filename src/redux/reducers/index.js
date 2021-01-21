import { combineReducers } from 'redux';
import pieceReducer from './pieceReducer';
import piecesPositionReducer from './piecesPositionReducer';
import movementsReducer from './movementsReducer';
import castlingReducer from './castlingReducer';
import playerReducer from './playerReducer';
import pawnPromotionReducer from './pawnPromotionReducer';
import enPassantReducer from './enPassantReducer';

const chessReducers = combineReducers({
  pawnPromotion: pawnPromotionReducer,
  selectedPiece: pieceReducer,
  castling: castlingReducer,
  enPassant: enPassantReducer,
  availableMovements: movementsReducer,
  piecesPosition: piecesPositionReducer,
  nextPlayer: playerReducer
});

export default chessReducers;