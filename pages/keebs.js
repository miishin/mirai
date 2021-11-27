import Head from 'next/head'
import Header from '../components/header.js'
import styles from '../styles/Keebs.module.css'

export default function Keebs() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Keebs</title>
        <link rel = "icon" href="/favicon.ico" />
        <link rel = "preload"
              href = "/fdragon-quest-ds.ttf"
              as = "font"
              crossOrigin = ""/>
      </Head>

      <Header></Header>

      <main className={styles.menu}>
        <div className={styles.items}>
          <div className={styles.txt}></div>
        </div>
      </main>
    </div>
  )
}
