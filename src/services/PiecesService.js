
class PiecesService {

    constructor() {
        /* Pieces definition */
        this.PAWN = 'P';
        this.ROOK = 'R';
        this.KNIGHT = 'N';
        this.BISHOP = 'B';
        this.QUEEN = 'Q';
        this.KING = 'K';
    
        /* Pieces color definition */
        this.WHITE_PIECE = 'w';
        this.BLACK_PIECE = 'b';
    }

    /**
     * Get the piece name, letter and color.
     * 
     * @param {string} selectedPiece 
     *      the string definition of a piece.
     */
    getPiece = (selectedPiece) => {
        return selectedPiece.substring(0,2);
    }

    /**
     * Get the letter of a piece type.
     * 
     * @param {string} selectedPiece 
     *      the string definition of a piece.
     */
    getPieceType = (selectedPiece) => {
        return selectedPiece.substring(0,1);
    }

     /**
     * Get the piece color.
     * 
     * @param {string} selectedPiece 
     *      the string definition of a piece.
     */
    getPieceColor = (selectedPiece) => {
        return selectedPiece.substring(1,2);
    }

    /**
    * Get the current position of the piece, column and row.
    * 
    * @param {string} selectedPiece 
    *      the string definition of a piece.
    */
    getCurrentPosition = (selectedPiece) => {
        return selectedPiece.substring(3,5);
    }

    /**
     * Get only the column position of a piece.
     * 
     * @param {string} selectedPiece 
     *      the string definition of a piece.
     */
    getPositionColumn = (selectedPiece) => {
        let column = '';
        if (selectedPiece.length === 2) {
            column = selectedPiece.substring(0,1);
        }
        if (selectedPiece.length === 5) {
            column = selectedPiece.substring(3,4);
        }
        return column;
    }

    /**
     * Get only the row position of a piece.
     * 
     * @param {string} selectedPiece 
     *      the string definition of a piece.
     */
    getPositionRow = (selectedPiece) => {
        let row = '';
        if (selectedPiece.length === 2) {
            row = selectedPiece.substring(1,2);
        }
        if (selectedPiece.length === 5) {
            row = selectedPiece.substring(4,5);
        }
        return row;
    }

    /**
     * Get the complete name of a piece (name-position).
     * 
     * @param {string} name 
     *      the string name of a piece.
     * @param {string} position 
     *      the string position of a piece.
     */
    getPieceName = (name, position) => {
        return name + '-' + position;
    }

    /**
     * True if the piece is a Pawn.
     * 
     * @param {String} pieceName 
     *      Name of the piece.
     */
    isPawn = (pieceName) => {
        let isPawn = false;
        if (this.getPieceType(pieceName) === this.PAWN) {
            isPawn = true;
        }
        return isPawn;
    }

    /**
     * True if the piece is a King.
     * 
     * @param {String} pieceName 
     *      Name of the piece.
     */
    isKing = (pieceName) => {
        let isKing = false;
        if (this.getPieceType(pieceName) === this.KING) {
            isKing = true;
        }
        return isKing;
    }

    /**
     * Get the label of a color from the color code.
     *
     * @param {String} color
     *      The color code
     */
    getColorLabel = (color) => {
        let label = '';
        if (color === piecesService.WHITE_PIECE) {
            label = 'Whites';
        }
        else {
            label = 'Blacks';
        }
        return label;
    }


}


const piecesService = new PiecesService();
export default piecesService;