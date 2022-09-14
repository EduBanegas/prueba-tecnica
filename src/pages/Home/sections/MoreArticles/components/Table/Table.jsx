// Dependencies
import React from 'react';

// Styles
import styles from './Table.module.css';

export default function Table({ records }) {
	if (!records.length) return null;

	return (
		<table className={styles.table}>
			<thead>
				<tr>
					<td>
						<p>Name</p>
					</td>
					<td>
						<p>Description</p>
					</td>
					<td>
						<p>Date</p>
					</td>
				</tr>
			</thead>
			{records.map((record, index) => {
				return (
					<tbody key={index}>
						<tr>
							<td>
								<p>{record.title}</p>
							</td>
							<td>
								<p>{record.shortDescription}</p>
							</td>
							<td>
								<p>{record.date}</p>
							</td>
						</tr>
					</tbody>
				);
			})}
		</table>
	);
}
