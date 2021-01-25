import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import Game from './containers/Game';
import GameIntro from './containers/GameIntro';
import GameStatus from './containers/GameStatus';
import { Provider } from 'react-redux';
import reducer from './redux/reducers';
import thunk from 'redux-thunk';
import './styles/css/main.css';

// ========================================
const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <Game />
        <GameIntro />
        <GameStatus />
    </Provider>,
    document.getElementById('root')
);