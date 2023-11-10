import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';

// Step 1. Import Provider, middleware, combinereducers, create store
import { Provider } from 'react-redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';



// *** REDUCERS ***

// Feeling Reducer

const feelingRate = (state = 'feeling...', action) => {
    if(action.type === 'FEELING_RATE') {
        // pass the new variable here.
        return action.payload;
    }
    return state;
}



// understanding reducer

const understandRate = (state = 'understanding...', action) => {
    if(action.type === 'UNDERSTAND_RATE') {
        return action.payload;
    }
    return state;
}



// support reducer

const supportRate = (state = 'supporting...', action) => {
    if(action.type === 'SUPPORT_RATE') {
        return action.payload;
    }
    return state;
}

// comment reducer

const commentInput = (state = 'commenting...', action) => {
    if(action.type === 'COMMENT_INPUT') {
        return action.payload;
    }
    return state;
}





// Step 2. create your store
const reduxStore = createStore(
    combineReducers({
        // *** your reducers go here
        feelingRate,
        understandRate,
        supportRate,
        commentInput
    }),
    applyMiddleware(logger)
);

// Step 3: wrap the app in your provider
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={reduxStore}>
            <App />
        </Provider>
    </React.StrictMode>
);



