// Dependencies
import React, { useState } from 'react';

// Styles - Components
import styles from './MoreArticles.module.css';
import SearchInput from './components/SearchInput/SearchInput';
import MobileTable from './components/MobilTable/MobileTable';
import Pagination from '../../../../components/common/Pagination/Pagination';
import Table from './components/Table/Table';

export default function MoreArticles({ articles }) {
	if (!articles.length) return null;

	const [allArticles, setAllArticles] = useState(articles);

	// Search _ Pasar a hook
	const [articlesFound, setArticlesFound] = useState(articles);
	const [lookupValue, setLookupValue] = useState('');

	const handleLookupValueChange = event => {
		setLookupValue(event.target.value);

		if (event.target.value === '') return setArticlesFound(articles);

		filterSearch(event.target.value);
	};

	const filterSearch = value => {
		const resultsFound = allArticles.filter(article => {
			if (
				article.title.toString().toLowerCase().includes(value.toLowerCase())
			) {
				return article;
			}
		});

		setArticlesFound(resultsFound);
	};

	// Pagination
	const [paginationData, setPaginationData] = useState({
		currentArticles: [],
		currentPage: 1,
		totalPages: null,
	});

	const handlePageChange = data => {
		const { currentPage, totalPages, pageLimit } = data;

		const offSet = (currentPage - 1) * pageLimit;
		const currentArticles = articlesFound.slice(offSet, offSet + pageLimit);

		setPaginationData({
			currentArticles,
			currentPage,
			totalPages,
		});
	};

	return (
		<section className={`SectionGRID ${styles.moreArticles}`} id='Articles'>
			<h4>More Articles</h4>

			<div className={styles.searchInput}>
				<SearchInput value={lookupValue} onChange={handleLookupValueChange} />
			</div>

			<MobileTable data={paginationData.currentArticles} />
			<Table records={paginationData.currentArticles} />

			<Pagination
				totalRecords={articlesFound.length}
				pageLimit={4}
				pageNeighbours={0}
				handlePageChange={handlePageChange}
			/>
			{!articlesFound.length && <h6>No se encontraron articulos recientes</h6>}
		</section>
	);
}
