import styles from './Sidebar.module.css';

export default function Sidebar() {
	return (
		<aside className={styles.sidebar}>
			<img
				src="https://images.unsplash.com/photo-1519923041107-e4dc8d9193da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
				alt="Cover img"
				className={styles.cover}
			/>

			<div className={styles.profile}>
				<img
					src="https://github.com/biancaespindola.png"
					alt="profile image"
				/>

				<strong>Bianca Espindola</strong>
				<span>Web developer</span>
			</div>

			<footer>
				<a href="#">Editar seu perfil</a>
			</footer>
		</aside>
	);
}
