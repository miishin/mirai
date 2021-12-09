import Head from 'next/head'
import Header from '../components/header.js'
import NHead from '../components/head.js'
import styles from '../styles/Menu.module.css'
import gridstyles from '../styles/GridMenu.module.css'

export default function About() {
  return (
    <div className="container">
      <NHead>About Mii</NHead>

      <Header name="About"/>

      <main className={styles.menu}>
      <img src="textbox.svg"/>
      <div className={styles.items}>
        <div className={styles.linktxt}>
          My name's Mirai, but my nickname is
        </div>
        <div className={styles.linktxt}>
          "miishin" everywhere online.
        </div>
        <a href="https://linkedin.com/in/miraisahara">
          <div className={styles.linktxt}>∗ My LinkedIn</div>
        </a>
      </div>
      </main>
    </div>
  )
}