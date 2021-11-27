import Head from 'next/head'
import Header from '../components/header.js'
import Link from 'next/link'
import styles from '../styles/Menu.module.css'

export default function Made() {
  return (
    <div className="container">
      <Head>
        <title>Made</title>
        <link rel = "icon" href="/favicon.ico" />
        <link rel = "preload"
              href = "/fdragon-quest-ds.ttf"
              as = "font"
              crossOrigin = ""/>
      </Head>

      <Header></Header>

      <main className={styles.menu}>
        <div className={styles.items}>
          <div className={styles.linktxt}>∗: What am I proud of?</div><br/>
          <a href = "https://github.com/miishin">
            <div className={styles.linktxt}>Some things I&apos;ve coded.</div>
          </a>
          <a href = "https://instagram.com/miraisahara">
            <div className={styles.linktxt}>Some of the photos I&apos;ve taken.</div>
          </a>
          <Link href = "/keebs" passHref>
            <div className={styles.linktxt}>Keyboards that I&apos;ve built.</div>
          </Link>
        </div>
      </main>
    </div>
  )
}
