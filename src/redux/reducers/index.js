import { combineReducers } from 'redux';
import pieceReducer from './pieceReducer';
import piecesPositionReducer from './piecesPositionReducer';
import movementsReducer from './movementsReducer';
import castlingReducer from './castlingReducer';

const chessReducers = combineReducers({
  selectedPiece: pieceReducer,
  availableMovements: movementsReducer,
  piecesPosition: piecesPositionReducer,
  castling: castlingReducer,
});

export default chessReducers;