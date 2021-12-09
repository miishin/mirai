import Header from '../components/header.js'
import NHead from '../components/head.js'
import styles from '../styles/GridMenu.module.css'

export default function Ratings() {
  return (
    <div className="container">
      <NHead name="Ratings"/>
      <Header name="Stuff I Like"/>
      <main className={styles.menu}>
          <div className={styles.menuItem}>
            <a href="https://rateyourmusic.com/~miishin">
              <img src="menu_item.svg" alt="" className={styles.img}/>
              <div className={styles.linktxt}>Music</div>
            </a>
          </div>
          <div className={styles.menuItem}>
            <a href = "https://letterboxd.com/miishin/">
              <img src="menu_item.svg" alt="" className={styles.img}/>
              <div className={styles.linktxt}>Movies</div>
            </a>
          </div>
          <div className={styles.menuItem}>
            <a href = "https://trakt.tv/users/miishin/ratings/all/all/highest">
              <img src="menu_item.svg" alt="" className={styles.img}/>
              <div className={styles.linktxt}>TV Shows</div>
            </a>
          </div>
          <div className={styles.menuItem}>
            <a href = "https://anilist.co/user/miishin/animelist">
              <img src="menu_item.svg" alt="" className={styles.img}/>
              <div className={styles.linktxt}>Anime</div>
            </a>
          </div>
          <div className={styles.menuItem}>
            <a href = "https://anilist.co/user/miishin/mangalist">
              <img src="menu_item.svg" alt="" className={styles.img}/>
              <div className={styles.linktxt}>Manga</div>
            </a>
          </div>
          <div className={styles.menuItem}>
            <a href = "https://glitchwave.com/user/miishin/">
              <img src="menu_item.svg" alt="" className={styles.img}/>
              <div className={styles.linktxt}>Video Games</div>
            </a>
          </div>
      </main>
    </div>
  )
}
