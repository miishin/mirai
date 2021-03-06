import Header from '../components/header.js'
import NHead from '../components/head.js'
import Link from 'next/link'
import styles from '../styles/GridMenu.module.css'

export default function Made() {
  return (
    <div className="container">
      <NHead name="Made"/>
      <Header name="Stuff I've Done"></Header>

      <main className={styles.menu}>
        <div className={styles.menuItem}>
          <img src="menu_item.svg" alt="" className={styles.img}/>
          <Link href="/code" passHref>
            <div className={styles.linktxt}>Code</div>
          </Link>
        </div>
        <div className={styles.menuItem}>
          <a href="https://instagram.com/miraisahara">
            <img src="menu_item.svg" alt="" className={styles.img}/>
            <div className={styles.linktxt}>Photos</div>
          </a>
        </div>
      </main>
    </div>
  )
}
