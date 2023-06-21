
const fetchComments = async (id) => {
  await new Promise(resolve => setTimeout(resolve, 5000))

  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, { cache: 'no-store' })
    .then(res => res.json())
}

async function Post ({ params }) {
  const { id } = params
  const comments = await fetchComments(id)
  return (
    <ul>
      {comments.map(comment => (
        <li key={comment.id}>
          <h2>{comment.name}</h2>
          <p>{comment.body}</p>
        </li>
      ))}
    </ul>
  )
}
export default Post
