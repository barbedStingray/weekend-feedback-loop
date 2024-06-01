import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';

// REDUX Step 1. Import Provider, middleware, combinereducers, create store
import { Provider } from 'react-redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';

// SAGA step 1. import
import createSagaMiddleware from 'redux-saga';
import { takeLatest, put } from 'redux-saga/effects';
import axios from 'axios';



// *** REDUCERS ***

// * trooperID Reducer

const trooperID = (state = {}, action) => {
    if (action.type === 'SET_TROOPERID') {
        // pass the new variable here.
        return action.payload;
    }
    return state;
}

// * starSystems data reducer

const starSystems = (state = {}, action) => {
    if (action.type === 'DATA_STAR_SYSTEM') {
        return action.payload;
    }
    return state;
}

// * starsystems list reducer
const starSystemList = (state = [], action) => {
    if (action.type === 'SET_STAR_SYSTEM_LIST') {
        return action.payload;
    }
    return state;
}



// * resources reducer

const resources = (state = {}, action) => {
    if (action.type === 'SET_RESOURCES') {
        return action.payload;
    }
    return state;
}

// * encounters reducer

const encounters = (state = [], action) => {
    if (action.type === 'SET_ENCOUNTERS') {
        return action.payload;
    }
    return state;
}

// * comments reducer

const comments = (state = '', action) => {
    if (action.type === 'SET_COMMENTS') {
        return action.payload;
    }
    return state;
}

// * reports reducer

const patrolReports = (state = [], action) => {
    if (action.type === 'SET_PATROL_REPORT') {
        return action.payload;
    }
    return state;
}

function* fetchPatrolReports() {
    try {
        console.log(`fetching patrol reports`);

        const response = yield axios.get('/review');

        const action = { type: 'SET_PATROL_REPORT', payload: response.data }
        yield put(action);

    } catch (error) {
        console.log(`get patrol reports error`, error);
        alert(`something went wrong`);
    }
}

function* postPatrolReport(action) {
    console.log(`posting new report`);

    yield axios.post('/review', action.payload);
    yield put({ type: 'FETCH_PATROL_REPORTS' });
}

function* deleteReport(action) {
    yield axios.delete(`/review/${action.payload}`);
    yield put({ type: 'FETCH_PATROL_REPORTS' });
}

function* rootSaga() {
    // sagas go here
    yield takeLatest('FETCH_PATROL_REPORTS', fetchPatrolReports);
    yield takeLatest('POST_PATROL_REPORT', postPatrolReport);
    yield takeLatest('DELETE_REPORT', deleteReport);
}

const sagaMiddleware = createSagaMiddleware();

// Step 2. create your store
const reduxStore = createStore(
    combineReducers({
        // *** your reducers go here
        starSystemList,
        trooperID,
        starSystems,
        resources,
        encounters,
        comments,
        patrolReports

    }),
    applyMiddleware(sagaMiddleware, logger)
);

sagaMiddleware.run(rootSaga);

// Step 3: wrap the app in your provider
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={reduxStore}>
                <App />
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
);



