import styles from '../Posts.module.css'
import LikeButton from '@/app/components/LikeButton/LikeButton'
import Link from 'next/link'

const fetcgPost = () => {
  return fetch('https://jsonplaceholder.typicode.com/posts', { cache: 'no-store' })
    .then(res => res.json())
}

async function ListOfPostPage () {
  const posts = await fetcgPost()
  return (
    <>
      {posts.slice(0, 20).map(post => (
        <article className={styles.articulo} key={post.id}>
          <Link href='/posts/[id]' as={`/posts/${post.id}`}>
            <h2 className={styles.h2}>{post.title}</h2>
            <p>{post.body}</p>
            <LikeButton id={post.id} />
          </Link>
        </article>
      )
      )}
    </>
  )
}

export default ListOfPostPage
