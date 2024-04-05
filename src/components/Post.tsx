import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import { format, formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import styles from "./Post.module.css";
import { useState, KeyboardEvent } from "react";

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
    deleteComment: (content: string) => void;
  }[];
  publishedAt: Date;
}

export function Post(props: PostProps) {
  const [comments, setComments] = useState(["Good point of view", "Amazing!!"]);

  const [newCommentText, setNewCommentText] = useState("");

  const publishedDateFormatted = format(
    props.publishedAt,
    "dd 'de' LLLL 'às' HH:mm'h'",
    {
      locale: ptBR,
    }
  );

  function handleCreateNewComment(event: React.FormEvent) {
    event.preventDefault();

    //imutabilididade de estados
    setComments([...comments, newCommentText]);

    setNewCommentText("");
  }

  function handleNewCommentChange(
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) {
    event?.target.setCustomValidity("");
    setNewCommentText(event.target.value);
  }

  function handleNewCommentInvalid() {
    event?.target.setCustomValidity("Esse campo é obrigatório");
    //target é o elemento que disparou o evento
  }

  function deleteComment(commentToDeleted: string) {
    //posso passar funções como props no react :O
    //imutabilidade: não alteramos a variavel, criamos um novo valor para ela.
    const commentsWithoutDeletedOne = comments.filter((comment) => {
      return comment !== commentToDeleted;
    });

    setComments(commentsWithoutDeletedOne);
  }

  const isNewCommentEmpty = newCommentText.length === 0;

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
        <textarea
          name="comment"
          placeholder="Your comment"
          value={newCommentText}
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
          //o required deixa o campo obrigatório e true é o padrão
          required
        />

        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>
            Publish
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment) => {
          return (
            <Comment
              key={comment}
              content={comment}
              onDeleteComment={deleteComment}
            />
          );
        })}
      </div>
    </article>
  );
}
