import Head from 'next/head'
import Image from 'next/image' 
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Ratings() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Likes</title>
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
          <Link href = "https://rateyourmusic.com/~miishin">
            <div className={styles.linktxt}>Music</div>
          </Link>
          <Link href = "https://letterboxd.com/miishin/">
            <div className={styles.linktxt}>Movies</div>
          </Link>
          <Link href = "https://anilist.co/user/miishin/">
            <div className={styles.linktxt}>Anime/Manga</div>
          </Link>
          <Link href = "https://glitchwave.com/user/miishin/">
            <div className={styles.linktxt}>Video Games</div>
          </Link>
        </div>
      </main>
    </div>
  )
}
