export const getArticles = async (ruta) => {
  try {
    const response = await fetch(ruta)
    const data = await response.json()
    return data
  } catch (err) {
    console.log(err)
    throw err
  }
}
