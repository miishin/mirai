import Head from 'next/head'
import Header from '../components/header.js'
import NHead from '../components/head.js'
import styles from '../styles/Menu.module.css'

export default function About() {
  return (
    <div className="container">
      <NHead>About</NHead>

      <Header name="About"/>

      <main className={styles.menu}>
      <img src="textbox.svg"/>
      <div className={styles.items}>
      <div className={styles.linktxt}>Here are my social media links.</div>
        <a href="https://linkedin.com/in/miraisahara">
          <div className={styles.linktxt}>∗ My LinkedIn</div>
        </a>
        <a href="https://github.com/miishin">
          <div className={styles.linktxt}>∗ My GitHub</div>
        </a>
      </div>
      </main>
    </div>
  )
}