import Image from 'next/image'
const fetchComments = async (id) => {
  await new Promise(resolve => setTimeout(resolve, 5000))

  // throw new Error('Error al cargar los comentarios') se pone para que aparesca los errores, se debe de comentar el return  para que salga el error

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
          <Image width={500} height={500} alt={comment} src={`https://avatars.dicebear.com/api/pixel-art-neutral/${comment.email}.svg`} />
          <p>{comment.body}</p>
        </li>
      ))}
    </ul>
  )
}
export default Post
