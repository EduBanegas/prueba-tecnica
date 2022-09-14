// Dependencies
import { call, put, takeLatest } from 'redux-saga/effects';
import apiCall from '../apiCall';

// Reducers
import {
	fetchArticles,
	articlesFetched,
	errorFetchingArticles,
} from './reducer';

// Adapters
import articlesAdapter from '../../../adapters/articles';

function* loadArticles() {
	try {
		const { data } = yield call(
			apiCall,
			'get',
			'https://fakerapi.it/api/v1/custom?title=text&image=image&short_description=text&published_at=date_time&last_news=boolean&_quantity=100'
		);

		const adaptedArticles = articlesAdapter(data.data);

		yield put(articlesFetched(adaptedArticles));
	} catch (error) {
		yield put(errorFetchingArticles());
	}
}

export default function* articlesSaga() {
	yield takeLatest(fetchArticles.type, loadArticles);
}
