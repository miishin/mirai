import Head from 'next/head'
import Header from '../components/header.js'
import styles from '../styles/Menu.module.css'

export default function Ratings() {
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

      <main className={styles.menu}>
        <div className={styles.items}>
          <div className={styles.linktxt}>∗: You want to know what I like?</div><br/>
          <a href = "https://rateyourmusic.com/~miishin">
            <div className={styles.linktxt}>Music</div>
          </a>
          <a href = "https://letterboxd.com/miishin/">
            <div className={styles.linktxt}>Movies</div>
          </a>
          <a href = "https://trakt.tv/users/miishin/ratings/all/all/highest">
              <div className={styles.linktxt}>TV Shows</div>
          </a>
          <a href = "https://anilist.co/user/miishin/">
            <div className={styles.linktxt}>Anime + Manga</div>
          </a>
          <a href = "https://glitchwave.com/user/miishin/">
            <div className={styles.linktxt}>Video Games</div>
          </a>
        </div>
      </main>
    </div>
  )
}
