export const selectPieceAction = (selectedPiece) => ({
  type: 'SELECT_PIECE',
  selectedPiece: selectedPiece
});

export const movePieceAction = (selectedPiece, toPosition) => ({
  type: 'MOVE_PIECE',
  selectedPiece: selectedPiece,
  toPosition: toPosition
});

export const castlingAction = (selectedPiece, toPosition) => ({
  type: 'CASTLING',
  selectedPiece: selectedPiece,
  toPosition: toPosition
});

export const pawnPromotionAction = (selectedPiece) => ({
  type: 'PAWN_PROMOTION',
  selectedPiece: selectedPiece
});


