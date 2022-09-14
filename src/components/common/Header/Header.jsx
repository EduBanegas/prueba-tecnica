// Dependencies
import React from 'react';
import { Link } from 'react-scroll';

// Styles - Assets
import styles from './Header.module.css';
import Logo from '../../../assets/icons/LogoA.svg';

export default function Header() {
	return (
		<div className={styles.header}>
			<div className={styles.navigationContainer}>
				<img src={Logo} alt='Logo' />

				<nav>
					<ul>
						<li>
							<Link
								to='Hero'
								offset={-100}
								smooth='true'
								spy={true}
								duration={100}
							>
								Hero
							</Link>
						</li>
						<li>
							<Link
								to='News'
								offset={-110}
								smooth='true'
								spy={true}
								duration={100}
							>
								News
							</Link>
						</li>
						<li>
							<Link
								to='Articles'
								offset={-90}
								smooth='true'
								spy={true}
								duration={100}
							>
								Articles
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	);
}
