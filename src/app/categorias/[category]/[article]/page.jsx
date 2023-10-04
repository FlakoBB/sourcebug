const Article = ({ params }) => {
  return (
    <div>
      <h1>Artículo</h1>
      <p>Este es el articulo: {params.article}</p>
    </div>
  )
}
export default Article
