import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post() {
	return (
		<article className={styles.post}>
			<header>
				<div className={styles.author}>
					<img
						className={styles.avatar}
						src="https://github.com/biancaespindola.png"
						alt="profile image user"
					/>
					<div className={styles.authorInfo}>
						<strong>Bianca Espindola</strong>
						<span>Web Developer</span>
					</div>
				</div>
				<time
					title="20 April 2023 at 12:00 pm"
					dateTime="2023-04-20 12:00:00"
				>
					Published at 1h
				</time>
			</header>
			<div className={styles.content}>
				<p>Hi guys</p>

				<p>
					Today I finally put it on the air by portfolio. I'm very
					happy with the result. I put several projects that I did
					recently.
				</p>

				<p>
					To access just click:{' '}
					<a href="">https://biancaespindolaportfolio.netlify.app/</a>
				</p>

				<p>
					{' '}
					Thank you for helping me. <br />
					<a href=""> #nlw </a> {''} <a href="">#rockseat </a> {''}
					<a href="">#frontend</a> {''} <a href="">#portifolio</a>{' '}
				</p>
			</div>

			<form className={styles.commentForm}>
				<strong>Give me a feedback</strong>
				<textarea placeholder="Your comment" />
				<footer>
					<button type="submit">Publish</button>
				</footer>
			</form>

			<div className={styles.commentList}>
				<Comment />
				<Comment />
				<Comment />
			</div>
		</article>
	);
}
