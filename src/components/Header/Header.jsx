import React from 'react'
import styles from './Header.module.css'
import logoImg from '../../assets/logo.png'
import { AiOutlineMenu } from "react-icons/ai";

const Header = () => {
	return (
		<header className={styles.header}>
			<img src={logoImg} alt="Logo" />

			<nav className={styles.nav}>
				<ul className={styles.anchors}>
					<li>Utility</li>
					<li>About</li>
					<li>Team</li>
					<li>FAQ</li>
				</ul>
				<div className={styles.links}></div>
				<button>Get your crypto hand 'should be another component'</button> 
			</nav>

			<button className={styles.burgerBtn}><AiOutlineMenu/></button>
		</header>
	)
}

export default Header