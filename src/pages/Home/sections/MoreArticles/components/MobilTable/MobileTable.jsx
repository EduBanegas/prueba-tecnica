// Dependencies
import React from 'react';

// Styles
import styles from './MobileTable.module.css';

export default function MobileTable({ data }) {
	if (!data.length) return null;

	return (
		<table className={styles.table}>
			{data.map((row, index) => {
				return (
					<div key={index}>
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

						<tbody>
							<tr>
								<td>
									{row.title.length > 32 ? (
										<p>{row.title.substring(0, 32)} ...</p>
									) : (
										<p>{row.title}</p>
									)}
								</td>
								<td>
									{row.shortDescription.length > 148 ? (
										<p>{row.shortDescription.substring(0, 148)} ...</p>
									) : (
										<p>{row.shortDescription}</p>
									)}
								</td>
								<td>
									<p>{row.date}</p>
								</td>
							</tr>
						</tbody>
					</div>
				);
			})}
		</table>
	);
}
