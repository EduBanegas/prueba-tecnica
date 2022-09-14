// Dependencies
import React from 'react';

// Styles - Assets
import styles from './Hero.module.css';
import Logo from '../../../../assets/icons/LogoB.svg';

export default function Hero() {
	return (
		<section className={styles.hero} id='Hero'>
			<div className={styles.logoAndTexts}>
				<img src={Logo} alt='Logo' />

				<div>
					<h3>BLACK MESA</h3>

					<p>Research Facility</p>
				</div>
			</div>

			<p className={styles.cta}>
				“Working to make a better tomorrow for all mankind”
			</p>

			<button>
				<p>More Information</p>
			</button>
		</section>
	);
}
