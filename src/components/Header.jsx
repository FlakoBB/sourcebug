import Link from 'next/link'
import styles from '@/styles/header.module.scss'
import 'bootstrap-icons/font/bootstrap-icons.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo_nav}>
        <figure className={styles.logo}>
          <img src='/LogoSB.png' alt='Logo de SourceBug en letras azules.' />
        </figure>
        <div className={styles.separator} />
        <nav className={styles.nav_bar}>
          <Link href='/'>Inicio</Link>
          <Link href='/categorias'>Categorías</Link>
          <Link href='/nosotros'>Nosotros</Link>
          <Link href='/contacto'>Contacto</Link>
        </nav>
      </div>
      <div className={styles.search_bar}>
        <input placeholder='Buscar en SourceBug...' />
        <button className={styles.search_btn} type='button'><i class='bi bi-search' /></button>
      </div>
    </header>
  )
}
export default Header
