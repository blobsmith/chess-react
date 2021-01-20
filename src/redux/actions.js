export const selectPieceAction = (selectedPiece) => (
  (dispatch, getState) => {
    dispatch({
      type: 'SELECT_PIECE',
      selectedPiece: selectedPiece,
      piecesPosition: getState().piecesPosition,
      castling: getState().castling
    });
  }
 );

 export const unselectPieceAction = (selectedPiece) => ({
  type: 'UNSELECT_PIECE'
});

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

export const activePawnPromotionAction = () => ({
  type: 'ACTIVE_PAWN_PROMOTION'
});

export const disablePawnPromotionAction = () => ({
  type: 'DISABLE_PAWN_PROMOTION'
});

export const pawnPromotionReplaceAction = (pieceName, pieceType) => ({
  type: 'PAWN_PROMOTION_REPLACE', 
  pieceName: pieceName,
  pieceType: pieceType
});


