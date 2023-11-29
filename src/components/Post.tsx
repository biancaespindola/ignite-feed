import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";

/**
 * props Post
 * author: {avatar_url: string; name: string; role: string}
 * publishedAt: Date
 * content: string
 */

interface PostProps {
  author: {
    avatarUrl: string;
    name: string;
    role: string;
  };
  content: {
    type: string;
    content: string;
  }[];
  publishedAt: Date;
}

export function Post(props: PostProps) {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar alt="profile image user" src={props.author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{props.author.name}</strong>
            <span>{props.author.role}</span>
          </div>
        </div>
        <time title="20 April 2023 at 12:00 pm" dateTime="2023-04-20 12:00:00">
          Published at 1h
        </time>
      </header>
      <div className={styles.content}></div>

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
