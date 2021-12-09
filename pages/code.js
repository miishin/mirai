import Header from '../components/header.js'
import NHead from '../components/head.js'
import styles from '../styles/GridMenu.module.css'

export default function Code() {
  return (
    <div className="container">
      <NHead name="Code"/>
      <Header name="Coding Stuff"></Header>

      <main className={styles.menu}>
        <div className={styles.menuItem}>
          <a href="https://github.com/miishin">
            <img src="menu_item.svg" alt="" className={styles.img}/>
            <div className={styles.linktxt}>GitHub</div>
          </a>
        </div>
        <div className={styles.menuItem}>
          <a href="https://www.codewars.com/users/miishin">
            <img src="menu_item.svg" alt="" className={styles.img}/>
            <div className={styles.linktxt}>Codewars</div>
          </a>
        </div>
      </main>
    </div>
  )
}
