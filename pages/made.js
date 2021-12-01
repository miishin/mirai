import Head from 'next/head'
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
          <a href="https://github.com/miishin">
            <img src="menu_item.svg" className={styles.img}/>
            <div className={styles.linktxt}>Code</div>
          </a>
        </div>
        <div className={styles.menuItem}>
          <a href="https://instagram.com/miraisahara">
            <img src="menu_item.svg" className={styles.img}/>
            <div className={styles.linktxt}>Photos</div>
          </a>
        </div>
      </main>
    </div>
  )
}
