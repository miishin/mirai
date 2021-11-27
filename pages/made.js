import Head from 'next/head'
import Image from 'next/image' 
import Link from 'next/link'
import styles from '../styles/Home.module.css'

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
          <Link href = "https://github.com/miishin">
            <div className={styles.linktxt}>Code</div>
          </Link>
          <Link href = "instagram.com/miraisahara">
            <div className={styles.linktxt}>Photography</div>
          </Link>
          <Link href = "keebs">
            <div className={styles.linktxt}>Keyboards</div>
          </Link>
        </div>
      </main>
    </div>
  )
}
