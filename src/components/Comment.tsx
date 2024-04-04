import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";
import { Avatar } from "./Avatar";

export function Comment({content}: {content: string}) {
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
            <button title="Delete comment">
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
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
