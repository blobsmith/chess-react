import { combineReducers } from 'redux';
import pieceReducer from './pieceReducer';
import piecesPositionReducer from './piecesPositionReducer';
import movementsReducer from './movementsReducer';

const chessReducers = combineReducers({
  selectedPiece: pieceReducer,
  availableMovements: movementsReducer,
  piecesPosition: piecesPositionReducer,
});

export default chessReducers;