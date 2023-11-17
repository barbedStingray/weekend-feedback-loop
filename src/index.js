import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';

// Step 1. Import Provider, middleware, combinereducers, create store
import { Provider } from 'react-redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';



// *** REDUCERS ***

// ? trooperID Reducer

const trooperID = (state = 'feeling...', action) => {
    if(action.type === 'SET_TROOPERID') {
        // pass the new variable here.
        return action.payload;
    }
    return state;
}



// * starSystems reducer

const starSystems = (state = {}, action) => {
    if(action.type === 'SET_STAR_SYSTEM') {
        return action.payload;
    }
    return state;
}



// ? resources reducer

const resources = (state = 'supporting...', action) => {
    if(action.type === 'SET_RESOURCES') {
        return action.payload;
    }
    return state;
}

// ? encounters reducer

const encounters = (state = 'commenting...', action) => {
    if(action.type === 'SET_ENCOUNTERS') {
        return action.payload;
    }
    return state;
}

// * comments reducer

const comments = (state = '', action) => {
    if(action.type === 'SET_COMMENTS') {
        return action.payload;
    }
    return state;
}





// Step 2. create your store
const reduxStore = createStore(
    combineReducers({
        // *** your reducers go here
        trooperID,
        starSystems,
        resources,
        encounters,
        comments
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



