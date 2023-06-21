import Link from 'next/link'

const fetchSinglePosts = (id) => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, { cache: 'no-store' })
    .then(res => res.json())
}

async function Post ({ params }) {
  const { id } = params
  const post = await fetchSinglePosts(id)
  return (
    <article>
      <h1>{post.title}</h1>
      <div>
        <p>
          {post.body}
        </p>
        <Link href={`/posts/${id}/comments`}>Ver comentarios</Link>
      </div>
    </article>
  )
}
export default Post
