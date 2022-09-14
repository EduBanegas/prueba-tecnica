// Dependencies
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	articles: [],
	hasError: false,
	isLoading: false,
};

const articlesSlice = createSlice({
	name: 'articles',
	initialState,
	reducers: {
		fetchArticles: state => {
			state.isLoading = true;
		},
		articlesFetched: (state, action) => {
			state.isLoading = false;
			state.articles = action.payload;
		},
		errorFetchingArticles: state => {
			state.isLoading = false;
			state.hasError = true;
		},
	},
});

export const { fetchArticles, articlesFetched, errorFetchingArticles } =
	articlesSlice.actions;

export default articlesSlice.reducer;
