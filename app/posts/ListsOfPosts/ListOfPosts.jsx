import styles from '../Posts.module.css'
const fetcgPost = () => {
  return fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
}

async function ListOfPostPage () {
  const posts = await fetcgPost()
  return (
    <>
      {posts.slice(0, 20).map(post => (
        <article className={styles.articulo} key={post.id}>
          <h2 className={styles.h2}>{post.title}</h2>
          <p>{post.body}</p>
        </article>
      )
      )}
    </>
  )
}

export default ListOfPostPage
