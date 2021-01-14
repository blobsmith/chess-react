import piecesService from './PiecesService';

class MovementsService {
    constructor() {
        this.lettreToNumber = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

        this.initPiecesPosition = {
            /** Rooks **/
            'A1': 'Rw',
            'H1': 'Rw',
            'A8': 'Rb',
            'H8': 'Rb',
        
            /** Knights **/
            'B1': 'Nw',
            'G1': 'Nw',
            'B8': 'Nb',
            'G8': 'Nb',
        
            /** Bishops **/
            'C1': 'Bw',
            'F1': 'Bw',
            'C8': 'Bb',
            'F8': 'Bb',
        
            /** Kings **/
            'D1': 'Kw',
            'D8': 'Kb',
        
            /** Queens **/
            'E1': 'Qw',
            'E8': 'Qb',
        
            /** white Pawns **/
            'A2': 'Pw',
            'B2': 'Pw',
            'C2': 'Pw',
            'D2': 'Pw',
            'E2': 'Pw',
            'F2': 'Pw',
            'G2': 'Pw',
            'H2': 'Pw',
        
            /** black Pawns **/
            'A7': 'Pb',
            'B7': 'Pb',
            'C7': 'Pb',
            'D7': 'Pb',
            'E7': 'Pb',
            'F7': 'Pb',
            'G7': 'Pb',
            'H7': 'Pb',
        };
    }
    

    /**
     * Get all available movements for a piece.
     * 
     * @param {string} selectedPiece 
     *      The complete piece name (name-position).
     * 
     * @return {Array}
     *      The list of available movements.
     */
    getAvailableMovement = (selectedPiece) => {
        const pieceType = piecesService.getPieceType(selectedPiece);
        const pieceColor = piecesService.getPieceColor(selectedPiece);
        const positionColumn = piecesService.getPositionColumn(selectedPiece);
        const positionRow = piecesService.getPositionRow(selectedPiece);
        const columnNumber = this.convertToNumber(positionColumn);

        let availableMovements = [];
        switch(pieceType) {
            case piecesService.PAWN:
                if (pieceColor === piecesService.WHITE_PIECE) {
                    availableMovements.push(positionColumn + (parseInt(positionRow) + 1));
                    if (parseInt(positionRow) === 2) {
                        availableMovements.push(positionColumn + (parseInt(positionRow) + 2));
                    }
                }
                else {
                    availableMovements.push(positionColumn + (parseInt(positionRow) - 1));
                    if (parseInt(positionRow) === 7 ) {
                        availableMovements.push(positionColumn + (parseInt(positionRow) - 2));
                    }
                }
                break;

            case piecesService.ROOK:
                for (let i = 1; i < 9; i++) {
                    if (i !== parseInt(columnNumber)) {
                        availableMovements.push(this.convertToLetter(i) + positionRow);
                    }
                }
                for (let i = 1; i < 9; i++) {
                    if (i !== parseInt(positionRow)) {
                        availableMovements.push(positionColumn + i);
                    }
                }
                break;

            case piecesService.KNIGHT:
                const movements = [-2, -1, 1, 2];
                for (let keyColumn in movements) {
                    for (let keyLine in movements) {
                        const movColumn = movements[keyColumn];
                        const movLine = movements[keyLine];
                        if (Math.abs(movColumn) === Math.abs(movLine)) {
                            continue;
                        }
                        const column = parseInt(columnNumber) + movColumn;
                        const line = parseInt(positionRow) + movLine;
                        if (column > 0 && column < 9 && line > 0 && line < 9) {
                            availableMovements.push(this.convertToLetter(column) + line);
                        }
                    }
                }
                break;

            case piecesService.BISHOP:
                for (let i = 1; i < 9; i++) {
                    const upperColumn = parseInt(columnNumber) + i;
                    const upperRow = parseInt(positionRow) + i;
                    const lowerColumn = parseInt(columnNumber) - i;
                    const lowerRow = parseInt(positionRow) - i;
                    if (upperColumn < 9 && upperRow < 9) {
                        availableMovements.push(this.convertToLetter(upperColumn) + upperRow);
                    }

                    if (lowerColumn > 0 && lowerRow > 0) {
                        availableMovements.push(this.convertToLetter(lowerColumn) + lowerRow);
                    }

                    if (lowerColumn > 0 && upperRow < 9) {
                        availableMovements.push(this.convertToLetter(lowerColumn) + upperRow);
                    }

                    if (upperColumn < 9 && lowerRow > 0) {
                        availableMovements.push(this.convertToLetter(upperColumn) + lowerRow);
                    }
                }
                break;

            case piecesService.QUEEN:
                for (let i = 1; i < 9; i++) {
                    if (i !== parseInt(columnNumber)) {
                        availableMovements.push(this.convertToLetter(i) + positionRow);
                    }
                }
                for (let i = 1; i < 9; i++) {
                    if (i !== parseInt(positionRow)) {
                        availableMovements.push(positionColumn + i);
                    }
                }
                for (let i = 1; i < 9; i++) {
                    const upperColumn = parseInt(columnNumber) + i;
                    const upperRow = parseInt(positionRow) + i;
                    const lowerColumn = parseInt(columnNumber) - i;
                    const lowerRow = parseInt(positionRow) - i;
                    if (upperColumn < 9 && upperRow < 9) {
                        availableMovements.push(this.convertToLetter(upperColumn) + upperRow);
                    }

                    if (lowerColumn > 0 && lowerRow > 0) {
                        availableMovements.push(this.convertToLetter(lowerColumn) + lowerRow);
                    }

                    if (lowerColumn > 0 && upperRow < 9) {
                        availableMovements.push(this.convertToLetter(lowerColumn) + upperRow);
                    }

                    if (upperColumn < 9 && lowerRow > 0) {
                        availableMovements.push(this.convertToLetter(upperColumn) + lowerRow);
                    }
                }
                break;
            
            case piecesService.KING:
                for (let columnIndex = -1; columnIndex < 2; columnIndex++) {
                    for (let rowIndex = -1; rowIndex < 2; rowIndex++) {
                        if (columnIndex === 0 && rowIndex === 0)
                            continue;
                        const newColumn = parseInt(columnNumber) + columnIndex;
                        const newRow = parseInt(positionRow) + rowIndex;
                        if (newColumn > 0 && newColumn < 9 && newRow > 0 && newRow < 9) {
                            availableMovements.push(this.convertToLetter(newColumn) + newRow);
                        }
                    }
                }
                break;
            
            default:

        }
        return availableMovements;
    }

    move = (selectedPiece, targetPosition, piecesMap) => {
        const availableMovements = this.getAvailableMovement(selectedPiece);
        const currentPosition = piecesService.getCurrentPosition(selectedPiece);
        const currentPiece = piecesService.getPiece(selectedPiece);
        if (availableMovements.indexOf(targetPosition) !== -1) {
            let newPiecesMap = Object.assign({}, piecesMap);
            delete newPiecesMap[currentPosition];
            newPiecesMap[targetPosition] = currentPiece;
            return newPiecesMap;
        }
        return piecesMap;
    }

    convertToLetter = (number) => {
        let lettre;
        if (number > 0 && number < 9) {
            lettre = this.lettreToNumber[parseInt(number)-1];
        }
        return lettre;
    }

    convertToNumber = (lettre) => {
        let number = this.lettreToNumber.indexOf(lettre);
        if (number !== -1) {
            number = number + 1;
        }
        return number;
    }
}

const movementsService = new MovementsService();
export default movementsService;