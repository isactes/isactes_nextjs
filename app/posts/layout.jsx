import styles from './Posts.module.css'
function PostsLayout ({ children }) {
  return (
    <div className={styles.layout}>
      <h1>Este es layout de los posts</h1>
      {children}
    </div>
  )
}
export default PostsLayout
