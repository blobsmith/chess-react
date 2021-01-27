
const STATUS_INTRO = 'intro';
const STATUS_GAME = 'game';
const STATUS_OUTRO = 'outro';

const initConf = {
    autoflip: false,
    color: 'green',
    status: STATUS_INTRO
};

const configurationReducer = (state = initConf, action) => {
    let newState = {};
    switch(action.type) {
        case 'NEW_GAME':
            newState = {
                color: action.values.color,
                autoflip: action.values.autoflip,
                status: STATUS_GAME
            };
            return newState;
            break;

        case 'END_GAME':
            newState = Object.assign({}, state, {status: STATUS_OUTRO});
            return newState;
            break;

        case 'START_INTRO':
            newState = Object.assign({}, state, {status: STATUS_INTRO});
            return newState;
            break;

        default:
            return state;
    }
    return state;
};

export default configurationReducer;