import Header from '../components/header.js'
import NHead from '../components/head.js'
import styles from '../styles/Menu.module.css'

export default function About() {
  return (
    <div className="container">
      <NHead>About Mii</NHead>

      <Header name="About"/>

      <main className={styles.menu}>
      <img src="textbox.svg" alt=""/>
      <div className={styles.items}>
        <div className={styles.linktxt}>
          My name is Mirai, but my nickname is
        </div>
        <div className={styles.linktxt}>
          &quot;miishin&quot; everywhere online.
        </div>
        <a href="https://linkedin.com/in/miraisahara">
          <div className={styles.linktxt}>∗ My LinkedIn</div>
        </a>
      </div>
      </main>
    </div>
  )
}