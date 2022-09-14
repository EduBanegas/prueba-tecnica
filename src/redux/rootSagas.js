// Dependencies
import { all } from 'redux-saga/effects';

// Sagas
import articles from './features/articles/saga';

export default function* rootSagas() {
	yield all([articles()]);
}
