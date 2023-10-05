import Header from '@/components/Header'
import '@/styles/globals.scss'
import { Podkova } from 'next/font/google'

const podkova = Podkova({ subsets: ['latin'] })

export const metadata = {
  title: 'SourceBug',
  description: 'Newsletter sobre tecnología.'
}

export default function RootLayout ({ children }) {
  return (
    <html lang='es'>
      <body className={podkova.className}>
        <Header />
        <main className='main_container'>
          {children}
        </main>
      </body>
    </html>
  )
}
