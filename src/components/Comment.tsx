import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';

export function Comment() {
	return (
		<div className={styles.comment}>
			<img
				className={styles.avatar}
				src="https://github.com/biancaespindola.png"
				alt="profile image user"
			/>
			<div className={styles.commentBox}>
				<div className={styles.commentContent}>
					<header>
						<div className={styles.authorAndTime}>
							<strong>Bianca Espindola</strong>
							<time
								title="20 April 2023 at 12:00 pm"
								dateTime="2023-04-20 12:00:00"
							>
								About an hour ago
							</time>
						</div>
						<button title="Delete comment">
							<Trash size={24} />
						</button>
					</header>
					<p>Congratulations Bianca, Good job!</p>
				</div>
				<footer>
					<button>
						<ThumbsUp />
						Aplaudir <span>20</span>
					</button>
				</footer>
			</div>
		</div>
	);
}
