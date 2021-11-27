import Head from 'next/head'
import Header from '../components/header.js'
import NHead from '../components/head.js'
import styles from '../styles/About.module.css'

export default function About() {
  return (
    <div className="container">
      <NHead>About</NHead>

      <Header></Header>

      <main className={styles.contents}>
        <div className={styles.items}>
          <div className={styles.txt}>
              <p>Mirai.</p>
          </div>
        </div>
      </main>
    </div>
  )
}
