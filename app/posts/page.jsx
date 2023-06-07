import styles from './Posts.module.css'
import ListOfPostPage from './ListsOfPosts/ListOfPosts'
async function PostPage () {
  return (
    <div className={styles.section}>
      <section>
        <ListOfPostPage />
      </section>
    </div>
  )
}
export default PostPage
