import { combineReducers } from 'redux';
import pieceReducer from './pieceReducer';
import piecesPositionReducer from './piecesPositionReducer';

const chessReducers = combineReducers({
  selectedPiece: pieceReducer,
  piecesPosition: piecesPositionReducer,
});

export default chessReducers;