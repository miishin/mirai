import Head from 'next/head'
import Header from '../components/header.js'
import NHead from '../components/head.js'
import styles from '../styles/GridMenu.module.css'

export default function Ratings() {
  return (
    <div className="container">
      <NHead name="Ratings"/>
      <Header></Header>

      <main className={styles.menu}>
      <div className={styles.linktxt}>∗: You want to know what I like?</div>
        <div className={styles.items}>
          <div className={styles.menuItem}>
            <img src="menu_item.svg"/>
            <a href = "https://rateyourmusic.com/~miishin" className={styles.linktxt}>Music</a>
          </div>
          <div className={styles.menuItem}>
            <img src="menu_item.svg"/>
            <a href = "https://letterboxd.com/miishin/" className={styles.linktxt}>Movies</a>
          </div>
          <div className={styles.menuItem}>
            <img src="menu_item.svg"/>
            <a href = "https://trakt.tv/users/miishin/ratings/all/all/highest" className={styles.linktxt}>TV Shows</a>
          </div>
          <div className={styles.menuItem}>
            <img src="menu_item.svg"/>
            <a href = "https://anilist.co/user/miishin/" className={styles.linktxt}>Anime + Manga</a>
          </div>
          <div className={styles.menuItem}>
            <img src="menu_item.svg"/>
            <a href = "https://glitchwave.com/user/miishin/" className={styles.linktxt}>Video Games</a>
          </div>
        </div>
      </main>
    </div>
  )
}
