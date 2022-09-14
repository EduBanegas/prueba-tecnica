import { configureStore, combineReducers } from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core';

// Reducers
import articlesReducer from './features/articles/reducer';

// Sagas
import rootSagas from './rootSagas';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
	reducer: combineReducers({ articles: articlesReducer }),
	middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSagas);

export default store;
