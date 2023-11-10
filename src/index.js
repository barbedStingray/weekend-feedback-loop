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

const feelingRate = (state = 'Test 123', action) => {
    if(action.type === 'FEELING_RATE') {
        // pass the new variable here.
        return action.payload;
    }
    return state;
}





// Step 2. create your store
const reduxStore = createStore(
    combineReducers({
        // *** your reducers go here
        feelingRate
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



