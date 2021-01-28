const historyReducer = (state = [], action) => {
    switch(action.type) {
        case 'NEW_GAME':
            return [];
            break;

        case 'MOVE_PIECE':
            let newState = [];
            if (state.length > 0) {
                for (const key in state) {
                    newState.push(state[key]);
                }
            }
            newState.push({
                selectedPiece: action.selectedPiece,
                toPosition: action.toPosition,
                initialPiecesMap: action.piecesPosition
            });
            return newState;
            break;

        default:
            return state;
    }
    return state;
};

export default historyReducer;