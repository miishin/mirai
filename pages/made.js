import Head from 'next/head'
import Image from 'next/image' 
import Link from 'next/link'
import styles from '../styles/Menu.module.css'

export default function Made() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Made</title>
        <link rel = "icon" href="/favicon.ico" />
        <link rel = "preload"
              href = "/fdragon-quest-ds.ttf"
              as = "font"
              crossOrigin = ""/>
      </Head>

      <div>
        Mirai
      </div>

      <main className={styles.menu}>
        <div className={styles.items}>
          <a href = "https://github.com/miishin">
            <div className={styles.linktxt}>Code</div>
          </a>
          <a href = "https://instagram.com/miraisahara">
            <div className={styles.linktxt}>Photography</div>
          </a>
          <Link href = "keebs">
            <div className={styles.linktxt}>Keyboards</div>
          </Link>
        </div>
      </main>
    </div>
  )
}
