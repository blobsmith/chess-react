import piecesService from './PiecesService';

class MovementsService {
    constructor() {
        /**
         * Array of all lettre columns of the board.
         */
        this.lettreToNumber = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

        /**
         * Map Object of all pieces at the begining of the game.
         */
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

        this.EMPTY = 'empty';
        this.FILLED_BY_OTHER = 'filled-by-other';
        this.FILLED_BY_OWN = 'filled-by-own';
    }



    isCheck = () => {

    }

    isCheckMat = () => {

    }

    /**
     * Check if a square is empty and check which piece is on it.
     * 
     * @param {String} newPosition 
     *      Location of the square to be check. 
     */
    checkSquareAvailability = (newPosition) => {
        if (this.piecesPosition[newPosition] !== undefined) {
            const pieceName = this.piecesPosition[newPosition];
            const color = piecesService.getPieceColor(pieceName);
            if (this.pieceColor === color) {
                return this.FILLED_BY_OWN;
            }
            else {
                return this.FILLED_BY_OTHER;
            }
        }
        return this.EMPTY;
    }

    pushNewPosition = (newPosition) => {
        const squareStatus = this.checkSquareAvailability(newPosition);
        if (squareStatus !== this.FILLED_BY_OWN) {
            this.availableMovements.push(newPosition);
        }
        return squareStatus;
    }
    

    /**
     * Get all available movements for a piece.
     * 
     * @param {string} selectedPiece 
     *      The complete piece name (name-position).
     * @param {string} piecesPosition 
     *      Positions of pieces on the board.
     * 
     * @return {Array}
     *      The list of available movements.
     */
    getAvailableMovement = (selectedPiece, piecesPosition) => {
        this.pieceType = piecesService.getPieceType(selectedPiece);
        this.pieceColor = piecesService.getPieceColor(selectedPiece);
        this.positionColumn = piecesService.getPositionColumn(selectedPiece);
        this.positionRow = piecesService.getPositionRow(selectedPiece);
        this.columnNumber = this.convertToNumber(this.positionColumn);
        this.piecesPosition = piecesPosition;
        this.availableMovements = [];

        switch(this.pieceType) {
            case piecesService.PAWN:
                this.getPawnAvailablePositions();
                break;

            case piecesService.ROOK:
                this.getRookAvailablePositions();
                break;

            case piecesService.KNIGHT:
                this.getKnightAvailablePositions();
                break;

            case piecesService.BISHOP:
                this.getBishopAvailablePositions();
                break;

            case piecesService.QUEEN:
                this.getQueenAvailablePositions();
                break;
            
            case piecesService.KING:
                this.getKingAvailablePositions();
                break;
            
            default:

        }
        return this.availableMovements;
    }

    /**
     * Get all the possible move for the selected Pawn.
     */
    getPawnAvailablePositions = () => {
        let newPosition;
        if (this.pieceColor === piecesService.WHITE_PIECE) {
            newPosition = this.positionColumn + (parseInt(this.positionRow) + 1);
            this.pushNewPosition(newPosition);
            if (parseInt(this.positionRow) === 2) {
                newPosition = this.positionColumn + (parseInt(this.positionRow) + 2);
                this.pushNewPosition(newPosition);
            }
        }
        else {
            newPosition = this.positionColumn + (parseInt(this.positionRow) - 1);
            this.pushNewPosition(newPosition);
            if (parseInt(this.positionRow) === 7 ) {
                newPosition = this.positionColumn + (parseInt(this.positionRow) - 2);
                this.pushNewPosition(newPosition);
            }
        }
    }

    /**
     * Get all the possible move for the selected Rook.
     */
    getRookAvailablePositions = () => {
        let newPosition;
        let squareStatus; 
        for (let i = 1; i < 9; i++) {
            const columnNumber = parseInt(this.columnNumber) + i;
            if (columnNumber > 8) {
                break;
            }
            newPosition = this.convertToLetter(columnNumber) + this.positionRow;
            squareStatus = this.pushNewPosition(newPosition);
            if (squareStatus !== this.EMPTY) {
                break;
            }
        }
        for (let i = 1; i < 9; i++) {
            const columnNumber = parseInt(this.columnNumber) - i;
            if (columnNumber < 1) {
                break;
            }
            newPosition = this.convertToLetter(columnNumber) + this.positionRow;
            squareStatus = this.pushNewPosition(newPosition);
            if (squareStatus !== this.EMPTY) {
                break;
            }
        }
        for (let i = 1; i < 9; i++) {
            const rowNumber = parseInt(this.positionRow) + i;
            if (rowNumber > 8) {
                break;
            }
            newPosition = this.positionColumn + rowNumber;
            squareStatus = this.pushNewPosition(newPosition);
            if (squareStatus !== this.EMPTY) {
                break;
            }
        }

        for (let i = 1; i < 9; i++) {
            const rowNumber = parseInt(this.positionRow) - i;
            if (rowNumber < 1) {
                break;
            }
            newPosition = this.positionColumn + rowNumber;
            squareStatus = this.pushNewPosition(newPosition);
            if (squareStatus !== this.EMPTY) {
                break;
            }
        }
    }

    /**
     * Get all the possible move for the selected Knight.
     */
    getKnightAvailablePositions = () => {
        let newPosition;
        const movements = [-2, -1, 1, 2];
        for (let keyColumn in movements) {
            for (let keyLine in movements) {
                const movColumn = movements[keyColumn];
                const movLine = movements[keyLine];
                if (Math.abs(movColumn) === Math.abs(movLine)) {
                    continue;
                }
                const column = parseInt(this.columnNumber) + movColumn;
                const line = parseInt(this.positionRow) + movLine;
                if (column > 0 && column < 9 && line > 0 && line < 9) {
                    newPosition = this.convertToLetter(column) + line;
                    this.pushNewPosition(newPosition);
                }
            }
        }
    }

    /**
     * Get all the possible move for the selected Bishop.
     */
    getBishopAvailablePositions = () => {
        let newPosition;
        let setUpperRight = true;
        let setUpperLeft = true;
        let setLowerRight = true;
        let setLowerLeft = true;
        let squareStatus;
        for (let i = 1; i < 9; i++) {
            const upperColumn = parseInt(this.columnNumber) + i;
            const upperRow = parseInt(this.positionRow) + i;
            const lowerColumn = parseInt(this.columnNumber) - i;
            const lowerRow = parseInt(this.positionRow) - i;
            if (upperColumn < 9 && upperRow < 9 && setUpperRight) {
                newPosition = this.convertToLetter(upperColumn) + upperRow;
                squareStatus = this.pushNewPosition(newPosition);
                if (squareStatus !== this.EMPTY) {
                    setUpperRight = false;
                }
            }

            if (lowerColumn > 0 && lowerRow > 0 && setLowerLeft) {
                newPosition = this.convertToLetter(lowerColumn) + lowerRow;
                squareStatus = this.pushNewPosition(newPosition);
                if (squareStatus !== this.EMPTY) {
                    setLowerLeft = false;
                }
            }

            if (lowerColumn > 0 && upperRow < 9 && setUpperLeft) {
                newPosition = this.convertToLetter(lowerColumn) + upperRow;
                squareStatus = this.pushNewPosition(newPosition);
                if (squareStatus !== this.EMPTY) {
                    setUpperLeft = false;
                }
            }

            if (upperColumn < 9 && lowerRow > 0 && setLowerRight) {
                newPosition = this.convertToLetter(upperColumn) + lowerRow;
                squareStatus = this.pushNewPosition(newPosition);
                if (squareStatus !== this.EMPTY) {
                    setLowerRight = false;
                }
            }
        }
    }

    /**
     * Get all the possible move for the selected Queen.
     */
    getQueenAvailablePositions = () => {
        this.getRookAvailablePositions();
        this.getBishopAvailablePositions();
    }

    /**
     * Get all the possible move for the selected King.
     */
    getKingAvailablePositions = () => {
        let newPosition;
        for (let columnIndex = -1; columnIndex < 2; columnIndex++) {
            for (let rowIndex = -1; rowIndex < 2; rowIndex++) {
                if (columnIndex === 0 && rowIndex === 0)
                    continue;
                const newColumn = parseInt(this.columnNumber) + columnIndex;
                const newRow = parseInt(this.positionRow) + rowIndex;
                if (newColumn > 0 && newColumn < 9 && newRow > 0 && newRow < 9) {
                    newPosition = this.convertToLetter(newColumn) + newRow;
                    this.pushNewPosition(newPosition);
                }
            }
        }
    }

    /**
     * Move a piece to another square.
     * 
     * @param {String} selectedPiece 
     *      The selected piece to be move.
     * @param {String} targetPosition 
     *      The piece position to be moved to. 
     * @param {Array} availableMovements 
     *      Array of possible movements for the selected piece.
     * @param {Object} piecesMap 
     *      Map of all locations of pieces.
     */
    move = (selectedPiece, targetPosition, availableMovements, piecesMap) => {
        const currentPosition = piecesService.getCurrentPosition(selectedPiece);
        const currentPiece = piecesService.getPiece(selectedPiece);
        if (availableMovements.indexOf(targetPosition) !== -1) {
            let newPiecesMap = Object.assign({}, piecesMap);
            delete newPiecesMap[currentPosition];
            newPiecesMap[targetPosition] = currentPiece;
            // this.debugMap(newPiecesMap, 'New Piece moved');
            return newPiecesMap;
        }
        // this.debugMap(piecesMap, 'Old map');
        return piecesMap;
    }
    /**
     * Help function used to see board data in JavaScript console.
     * 
     * @param {Object} map 
     *      Map Object of pieces.
     * @param {String} label 
     *      Title to be shown before the map.
     */
    debugMap = (map, label = 'Map') => {
        const space = 35 - label.length;
        console.log('---------------------------------------');
        let headText = '|';
        for(let i = 0 ; i < (space/2); i++) {
            headText = headText + ' ';
        }
        headText = headText + label;
        for(let i = 0 ; i < (space/2); i++) {
            headText = headText + ' ';
        }
        headText = headText + '|';
        console.log(headText);
        console.log('---------------------------------------');


        for(let iLine = 8 ; iLine > 0; iLine--) {
            console.log(' ');
            console.log('---- ---- ---- ---- ---- ---- ---- ----');
            let line = '';
            for(let iColumn = 1 ; iColumn < 9; iColumn++) {
                const square = this.convertToLetter(iColumn) + iLine;
                line = line + '|';
                if (map[square] === undefined) {
                    line = line + '  ';
                }
                else {
                    line = line + map[square];
                }
                line = line + '|';
                if (iColumn !== 8) {
                    line = line + ' ';
                }
            }
            console.log(line);
        }
        console.log('---- ---- ---- ---- ---- ---- ---- ----');
    }

    /**
     * Convert a column number to the equivant letter.
     *
     * @param {String} number 
     */
    convertToLetter = (number) => {
        let lettre;
        if (number > 0 && number < 9) {
            lettre = this.lettreToNumber[parseInt(number)-1];
        }
        return lettre;
    }

        /**
     * Convert a column lettre to the equivant number.
     *
     * @param {String} number 
     */
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