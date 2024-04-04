import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import { format, formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import styles from "./Post.module.css";
import { useState } from "react";

/**
 * props Post
 * author: {avatar_url: string; name: string; role: string}
 * publishedAt: Date
 * content: string
 */

// interface PostProps {
//   author: {
//     avatarUrl: string,
//     name: string,
//     role: string,
//   };
//   content: {
//     type: string,
//     content: string,
//   }[];
//   publishedAt: Date;
// }

export function Post(props) {
  const [comments, setComments] = useState(["Good point of view", "Amazing!!"]);

  const publishedDateFormatted = format(
    props.publishedAt,
    "dd 'de' LLLL 'às' HH:mm'h'",
    {
      locale: ptBR,
    }
  );

  function handleCreateNewComment() {
    event.preventDefault();
    const newCommentsText = event.target.comment.value;

    //imutabilididade de estados
    setComments([...comments, newCommentsText]);

    event.target.comment.value = "";
  }

  const publishedDateRelativeToNow = formatDistanceToNow(props.publishedAt, {
    addSuffix: true,
    locale: ptBR,
  });

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
        <time
          title={publishedDateFormatted}
          dateTime={props.publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>
      <div className={styles.content}>
        {props.content.map((line) => {
          if (line.type === "paragraph") {
            return <p key={line.content}>{line.content}</p>;
          } else if (line.type === "link") {
            return (
              <p key={line.content}>
                <a href="#">{line.content}</a>
              </p>
            );
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Give me a feedback</strong>
        <textarea name="comment" placeholder="Your comment" />

        <footer>
          <button type="submit">Publish</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment) => {
          return <Comment content={comment} />;
        })}
      </div>
    </article>
  );
}
