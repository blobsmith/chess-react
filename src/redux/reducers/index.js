import { combineReducers } from 'redux';
import pieceReducer from './pieceReducer';
import piecesPositionReducer from './piecesPositionReducer';
import movementsReducer from './movementsReducer';
import castlingReducer from './castlingReducer';
import playerReducer from './playerReducer';

const chessReducers = combineReducers({
  selectedPiece: pieceReducer,
  castling: castlingReducer,
  availableMovements: movementsReducer,
  piecesPosition: piecesPositionReducer,
  nextPlayer: playerReducer
});

export default chessReducers;