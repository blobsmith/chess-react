import piecesService from './PiecesService';
import movementsService from './MovementsService';

class EnPassantService {

    removePawnOnEnPassantMovement = (selectedPiece, position, piecesMap) => {
        // If it's a Pawn.
        if (piecesService.isPawn(selectedPiece)) {
            // If it changes his column.
            if (piecesService.getPositionColumn(selectedPiece) !== piecesService.getPositionColumn(position)) {
                // If there is no piece on it's target square position.
                if (piecesMap[position] === undefined) {
                    let row = parseInt(piecesService.getPositionRow(position));
                    const column = piecesService.getPositionColumn(position);
                    let pawnToDeletePosition = '';

                    // if there is a pawn of a different color behind it.
                    if (piecesService.getPieceColor(selectedPiece) === piecesService.WHITE_PIECE) {
                        row = row - 1;
                        pawnToDeletePosition = column + row;
                    }
                    else {
                        row = row + 1;
                        pawnToDeletePosition = column + row;
                    }
                    const pawnToDelete = piecesMap[pawnToDeletePosition];
                    if (pawnToDelete !== undefined 
                        && piecesService.isPawn(pawnToDelete)
                        && piecesService.getPieceColor(pawnToDelete) !== piecesService.getPieceColor(selectedPiece)) {
                        // delete pawn due to "En passant" functionnality.
                        delete piecesMap[pawnToDeletePosition];
                    }
                }
            }
        }
       return piecesMap;
    }

    /**
     * Get availables En passant after a move for the next selection of a piece.
     *
     * @param {String} selectedPiece 
     * @param {String} toPosition 
     * @param {Object} piecesMap 
     */
    getAvailables = (selectedPiece, toPosition, piecesMap, newState) => {
        // Check if it's Pawn.
        if (piecesService.isPawn(selectedPiece)) {

            // Check if the Pawn is moving of 2 rows.
            const selectedPieceColor = piecesService.getPieceColor(selectedPiece);
            const selectedPieceRow = parseInt(piecesService.getPositionRow(selectedPiece));
            const toPositionRow = parseInt(piecesService.getPositionRow(toPosition));
            const enPassantRow = parseInt(toPositionRow) + (selectedPieceColor === piecesService.WHITE_PIECE ? (-1) : 1);
            const enPassantPosition = piecesService.getPositionColumn(toPosition) + enPassantRow;
            if (Math.abs(selectedPieceRow - toPositionRow) === 2) {
                
                // Check if there is a piece in the same target row on the column before or after target
                const pieceColumn = movementsService.convertToNumber(piecesService.getPositionColumn(toPosition));
                let positionsToTest = [];
                if (pieceColumn - 1 > 0) {
                    positionsToTest.push(movementsService.convertToLetter(pieceColumn - 1) + toPositionRow);
                }
                if (pieceColumn + 1 < 9) {
                    positionsToTest.push(movementsService.convertToLetter(pieceColumn + 1) + toPositionRow);
                }
                if (positionsToTest.length > 0) {
                    for (const index in positionsToTest) {
                        const position = positionsToTest[index];
                        const pawnNear = piecesMap[position];
                        //check if the piece is a pawn of a different color.
                        if (pawnNear !== undefined 
                            && piecesService.isPawn(pawnNear) 
                            && piecesService.getPieceColor(pawnNear) !== selectedPieceColor) {
                            // add the pawn to the list of "en passant" pawn movements available
                            newState.push(
                                {
                                [piecesService.getPieceName(pawnNear, positionsToTest[index])]: enPassantPosition
                            }); 
                        }
                        
                    }
                }
            }
        }
        return newState;
    }

    /**
     * Add the "en passant" movement for the selected piece if exists.
     * 
     * @param {String} selectedPiece 
     * @param {Array} enPassant 
     * @param {Object} movements 
     */
    addEnPassantToMovements = (selectedPiece, enPassant, movements) => {
        if (enPassant.length > 0) {
            for(const key in enPassant) {
                const enPassantPiece = enPassant[key];
                for(const pieceName in enPassantPiece) {
                    const position = enPassantPiece[pieceName];
                    if (pieceName === selectedPiece) {
                        movements.push(position);
                    }
                }
            }
        }
        return movements;
    }
}

const enPassantService = new EnPassantService();
export default enPassantService;