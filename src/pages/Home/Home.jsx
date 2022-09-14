// Dependencies
import React from 'react';
import { useEffect } from 'react';

// Styles - Components
import styles from './Home.module.css';
import Hero from './sections/Hero/Hero';
import LastNews from './sections/LastNews/LastNews';
import MoreArticles from './sections/MoreArticles/MoreArticles';

// Actions
import { fetchArticles } from '../../redux/features/articles/reducer';
import { useDispatch, useSelector } from 'react-redux';

export default function Home() {
	const { articles, isLoading, hasError } = useSelector(
		store => store.articles
	);

	const dispatch = useDispatch();

	useEffect(() => {
		if (!articles.length) {
			dispatch(fetchArticles());
		}
	}, []);

	return (
		<div className={`ViewGRID ${styles.home}`}>
			<Hero />
			<LastNews articles={articles} />
			<MoreArticles articles={articles} />
		</div>
	);
}
