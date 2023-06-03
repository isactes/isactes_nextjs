function Post ({ params }) {
  const { id } = params
  return (
    <h1>
      Este es un post {id}
    </h1>
  )
}
export default Post
