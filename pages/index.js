import Head from 'next/head'
import Image from 'next/image' 
import Link from 'next/link'
import styles from '../styles/Menu.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mirai Sahara</title>
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
          <Link href="about">
            <div className={styles.linktxt}>About Me</div>
          </Link>
          <Link href="like">
            <div className={styles.linktxt}>Things I Like</div>
          </Link>
          <Link href="made">
            <div className={styles.linktxt}>Things I've Made</div>
          </Link>
        </div>
      </main>
    </div>
  )
}
