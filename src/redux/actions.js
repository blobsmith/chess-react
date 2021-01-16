export const selectPieceAction = (selectedPiece) => ({
  type: 'SELECT_PIECE',
  selectedPiece: selectedPiece
});

export const storeAvailableMovementsAction = (selectedPiece) => (
  (dispatch, getState) => {
    dispatch({
      type: 'GET_AVAILABLE_MOVEMENTS',
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


