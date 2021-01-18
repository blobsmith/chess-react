import { combineReducers } from 'redux';
import pieceReducer from './pieceReducer';
import piecesPositionReducer from './piecesPositionReducer';
import movementsReducer from './movementsReducer';
import castlingReducer from './castlingReducer';

const chessReducers = combineReducers({
  selectedPiece: pieceReducer,
  castling: castlingReducer,
  availableMovements: movementsReducer,
  piecesPosition: piecesPositionReducer
});

export default chessReducers;