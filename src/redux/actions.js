export const selectPieceAction = (piece_type) => ({
  type: 'SELECT_PIECE',
  piece_type: piece_type
});

export const movePieceAction = (piece_type, toPosition) => ({
  type: 'MOVE_PIECE',
  piece_type: piece_type,
  toPosition: toPosition
});

export const castlingAction = (piece_type, toPosition) => ({
  type: 'CASTLING',
  piece_type: piece_type,
  toPosition: toPosition
});

export const pawnPromotionAction = (piece_type) => ({
  type: 'PAWN_PROMOTION',
  piece_type: piece_type,
  toPosition: toPosition
});


