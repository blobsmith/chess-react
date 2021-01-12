
const initPiecesPosition = {
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

const piecesPositionReducer = (state, action) => {
    if (!state) {
        state = Object.assign({}, initPiecesPosition);
    }
    let newPiecesPosition = Object.assign({}, state)
    switch(action.type) {
        case 'MOVE_PIECE':
            break;

        case 'CASTLING':
            break;

        case 'PAWN_PROMOTION':
            break;

        default:
            newPiecesPosition = state;
    }
    return newPiecesPosition;
};


export default piecesPositionReducer;