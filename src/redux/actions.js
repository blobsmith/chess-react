export const selectPieceAction = (selectedPiece) => (
  (dispatch, getState) => {
    dispatch({
      type: 'SELECT_PIECE',
      selectedPiece: selectedPiece,
      piecesPosition: getState().piecesPosition
    });
  }
 );

export const movePieceAction = (selectedPiece, toPosition) => (
  (dispatch, getState) => {
    dispatch({
      type: 'MOVE_PIECE',
      selectedPiece: selectedPiece,
      toPosition: toPosition,
      availableMovements: getState().availableMovements
    });
  }
);

export const castlingAction = (selectedPiece, toPosition) => ({
  type: 'CASTLING',
  selectedPiece: selectedPiece,
  toPosition: toPosition
});

export const pawnPromotionAction = (selectedPiece) => ({
  type: 'PAWN_PROMOTION',
  selectedPiece: selectedPiece
});


