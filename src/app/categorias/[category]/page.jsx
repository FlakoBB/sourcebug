const Category = ({ params }) => {
  return (
    <div>
      <h1>Categoría</h1>
      <p>Esta es la categoría: {params.category}</p>
    </div>
  )
}
export default Category
