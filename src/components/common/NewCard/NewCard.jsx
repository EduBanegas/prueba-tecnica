// Dependencies
import React from 'react';

// Styles - Assets
import styles from './NewCard.module.css';

export default function NewCard({ img, title, description, date }) {
	return (
		<div className={`ContainerGRID ${styles.newCard}`}>
			<div>
				<img src={img} alt='Image' />
				<p>{date}</p>
			</div>

			<div>
				{title.length > 48 ? (
					<h5>{title.substring(0, 48)} ...</h5>
				) : (
					<h5>{title}</h5>
				)}

				{description.length > 192 ? (
					<p>{description.substring(0, 192)} ...</p>
				) : (
					<p>{description}</p>
				)}
			</div>
		</div>
	);
}
