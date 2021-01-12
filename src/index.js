import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import Game from './containers/Game';
import { Provider } from 'react-redux';
import reducer from './redux/reducers';

// ========================================
const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <Game />
    </Provider>,
    document.getElementById('root')
);