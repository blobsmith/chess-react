import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import Game from './containers/Game';
import { Provider } from 'react-redux';
import reducer from './redux/reducers';
import thunk from 'redux-thunk';

// ========================================
const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <Game />
    </Provider>,
    document.getElementById('root')
);