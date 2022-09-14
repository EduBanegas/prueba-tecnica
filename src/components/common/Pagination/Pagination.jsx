// Dependencies
import React, { useEffect, useState } from 'react';

// Styles
import styles from './Pagination.module.css';

const LEFT_PAGE = 'LEFT';
const RIGHT_PAGE = 'RIGHT';

const range = (from, to, step = 1) => {
	let i = from;
	const range = [];

	while (i <= to) {
		range.push(i);
		i += step;
	}

	return range;
};

export default function Pagination({
	totalRecords = null,
	pageLimit = 10,
	pageNeighbours = 0,
	handlePageChange,
}) {
	// Pagination Settings
	pageLimit = typeof pageLimit === 'number' ? pageLimit : 10;

	totalRecords = typeof totalRecords === 'number' ? totalRecords : 0;

	pageNeighbours =
		typeof pageNeighbours === 'number'
			? Math.max(0, Math.min(pageNeighbours, 2))
			: 0;

	const totalPages = Math.ceil(totalRecords / pageLimit);

	const [currentPage, setCurrentPage] = useState(1);

	useEffect(() => {
		goToPage(1);
	}, [totalRecords]);

	const goToPage = pageNumber => {
		const currentPage = Math.max(0, Math.min(pageNumber, totalPages));

		const paginationData = {
			currentPage,
			totalPages,
			pageLimit,
			totalRecords,
		};

		setCurrentPage(currentPage);

		handlePageChange(paginationData);
	};

	const handleClick = (pageNumber, event) => {
		event.preventDefault();

		goToPage(pageNumber);
	};

	const handleMoveLeft = event => {
		event.preventDefault();

		goToPage(currentPage - pageNeighbours * 2 - 1);
	};

	const handleMoveRight = event => {
		event.preventDefault();

		goToPage(currentPage + pageNeighbours * 2 + 1);
	};

	const fetchPageNumbers = () => {
		const totalNumbers = pageNeighbours * 2 + 3;
		const totalBlocks = totalNumbers + 2;

		if (totalPages > totalBlocks) {
			let pages = [];

			const leftBound = currentPage - pageNeighbours;
			const rightBound = currentPage + pageNeighbours;
			const beforeLastPage = totalPages - 1;

			const startPage = leftBound > 2 ? leftBound : 2;
			const endPage = rightBound < beforeLastPage ? rightBound : beforeLastPage;

			pages = range(startPage, endPage);

			const pagesCount = pages.length;
			const singleSpillOffset = totalNumbers - pagesCount - 1;

			const leftSpill = startPage > 2;
			const rightSpill = endPage < beforeLastPage;

			const leftSpillPage = LEFT_PAGE;
			const rightSpillPage = RIGHT_PAGE;

			if (leftSpill && !rightSpill) {
				const extraPages = range(startPage - singleSpillOffset, startPage - 1);

				pages = [leftSpillPage, ...extraPages, ...pages];
			} else if (!leftSpill && rightSpill) {
				const extraPages = range(endPage + 1, endPage + singleSpillOffset);

				pages = [...pages, ...extraPages, rightSpillPage];
			} else if (leftSpill && rightSpill) {
				pages = [leftSpillPage, ...pages, rightSpillPage];
			}

			return [1, ...pages, totalPages];
		}

		return range(1, totalPages);
	};

	if (!totalRecords) return null;

	if (totalPages === 1) return null;

	const pages = fetchPageNumbers();

	return (
		<nav>
			<ul className={styles.pagination}>
				{pages.map((page, index) => {
					if (page === LEFT_PAGE) {
						return (
							<li
								onClick={handleMoveLeft}
								key={index}
								className={styles.pageItem}
							>
								<a href='#' aria-label='Previous' className={styles.pageLink}>
									<span aria-hidden='true'>&laquo;</span>
								</a>
							</li>
						);
					}

					if (page === RIGHT_PAGE) {
						return (
							<li
								onClick={handleMoveRight}
								key={index}
								className={styles.pageItem}
							>
								<a href='#' aria-label='Next' className={styles.pageLink}>
									<span aria-hidden='true'>&raquo;</span>
								</a>
							</li>
						);
					}

					return (
						<li
							onClick={e => handleClick(page, e)}
							key={index}
							className={`${styles.pageItem} ${
								currentPage === page ? styles.Action : ''
							}`}
						>
							<a href='#' className={styles.pageLink}>
								{page}
							</a>
						</li>
					);
				})}
			</ul>
		</nav>
	);
}
