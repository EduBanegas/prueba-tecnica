// Dependencies
import React from 'react';

// Styles - Component - Assets
import styles from './HorizontalSliderScroll.module.css';
import NewCard from '../NewCard/NewCard';

export default function HorizontalSliderScroll({ records }) {
	if (!Array.isArray(records) || !records.length) return null;

	return (
		<div className={styles.horizontalSliderScroll}>
			{records.map((record, index) => {
				return (
					<NewCard
						key={index}
						img={record.image}
						title={record.title}
						description={record.shortDescription}
						date={record.date}
					/>
				);
			})}
		</div>
	);
}
