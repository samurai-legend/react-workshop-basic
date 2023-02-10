import styles from "./Post.module.css";

const Post = ({ title, body }) => {
  return (
    <div className={styles.post}>
      <div className={styles.post_title}>
        <h3>{title}</h3>
      </div>
      <div className={styles.post_body}>
        <p>{body}</p>
      </div>
    </div>
  );
};

export default Post;
