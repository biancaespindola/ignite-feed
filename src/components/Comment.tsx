import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";
import { Avatar } from "./Avatar";
import { useState } from "react";

export function Comment(
  { content }: { content: string },
  onDeleteComment: (content: string) => void
) {
  function handleDeleteComment() {
    console.log("Deletar");

    onDeleteComment(content);
  }

  function handleLikeComment() {
    setLikeCount((likeCount) => likeCount + 1);
  }

  const [likeCount, setLikeCount] = useState(0);

  return (
    <div className={styles.comment}>
      <Avatar
        alt="profile image user"
        hasBorder={false}
        src="https://github.com/biancaespindola.png"
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
            <button onClick={handleDeleteComment} title="Delete comment">
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleLikeComment}>
            {/* <button onClick={() => setLikeCount(likeCount + 1)}> */}
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
