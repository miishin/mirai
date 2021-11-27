import Head from 'next/head'
import Header from '../components/header.js'
import styles from '../styles/About.module.css'

export default function About() {
  return (
    <div className="container">
      <Head>
        <title>Likes</title>
        <link rel = "icon" href="/favicon.ico" />
        <link rel = "preload"
              href = "/fdragon-quest-ds.ttf"
              as = "font"
              crossOrigin = ""/>
      </Head>

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
