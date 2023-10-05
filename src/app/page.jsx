'use client'
import { getArticles } from '@/api/getArticles'
import { useEffect, useState } from 'react'

export default function Home () {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    const getArticlesData = async () => {
      try {
        const data = await getArticles('/mocks/articles.json')
        setArticles(data)
      } catch (err) {
        console.log(`Errore: ${err}`)
      }
    }

    getArticlesData()
  }, [])

  return (
    <div>
      <h1>Source Code: Homepage</h1>
      <p>La Newsletter de tecnología.</p>
      {
        articles.map(article => {
          return (
            <div key={article.id}>
              <h3>{article.title}</h3>
            </div>
          )
        })
      }
    </div>
  )
}
