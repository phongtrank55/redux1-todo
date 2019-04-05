import React from 'react';
import ReactDOM from 'react-dom';
//import 'todomvc-app-css/index.css';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import TodoApp from './containers/TodoApp';
import rootReducer from './reducers/rootReducer';

const initialState = {};

const store = createStore(rootReducer, initialState);

const appRoot = (
    <Provider store={store}>
        <div>
            <TodoApp />
        </div>
    </Provider>
);

ReactDOM.render(appRoot, document.getElementById('root'));