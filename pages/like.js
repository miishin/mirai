import Head from 'next/head'
import Header from '../components/header.js'
import NHead from '../components/head.js'
import styles from '../styles/GridMenu.module.css'

export default function Ratings() {
  return (
    <div className="container">
      <NHead name="Ratings"/>
      <Header></Header>
      <div className={styles.linktxt}>∗: You want to know what I like?</div>
      <main className={styles.menu}>
          <div className={styles.menuItem}>
            <img src="menu_item.svg" className={styles.img}/>
            <a href = "https://rateyourmusic.com/~miishin" className={styles.linktxt}>Music</a>
          </div>
          <div className={styles.menuItem}>
            <img src="menu_item.svg" className={styles.img}/>
            <a href = "https://letterboxd.com/miishin/" className={styles.linktxt}>Movies</a>
          </div>
          <div className={styles.menuItem}>
            <img src="menu_item.svg" className={styles.img}/>
            <a href = "https://trakt.tv/users/miishin/ratings/all/all/highest" className={styles.linktxt}>TV Shows</a>
          </div>
          <div className={styles.menuItem}>
            <img src="menu_item.svg" className={styles.img}/>
            <a href = "https://anilist.co/user/miishin/animelist" className={styles.linktxt}>Anime</a>
          </div>
          <div className={styles.menuItem}>
            <img src="menu_item.svg" className={styles.img}/>
            <a href = "https://anilist.co/user/miishin/mangalist" className={styles.linktxt}>Manga</a>
          </div>
          <div className={styles.menuItem}>
            <img src="menu_item.svg" className={styles.img}/>
            <a href = "https://glitchwave.com/user/miishin/" className={styles.linktxt}>Video Games</a>
          </div>
      </main>
    </div>
  )
}
