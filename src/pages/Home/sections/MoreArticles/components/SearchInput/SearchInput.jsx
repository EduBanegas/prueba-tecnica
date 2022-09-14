// Dependencies
import React from 'react';

// Styles - Assets
import styles from './SearchInput.module.css';
import LupaIcon from '../../../../../../assets/icons/Lupa.svg';

export default function SearchInput({ value, onChange }) {
	return (
		<form className={styles.searchInput}>
			<button type='submit'>
				<img src={LupaIcon} alt='Lupa' />
			</button>
			<input
				type='text'
				value={value}
				onChange={onChange}
				placeholder='Search articles...'
			/>
		</form>
	);
}
