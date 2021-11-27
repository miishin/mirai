import Head from 'next/head'
import Header from '../components/header.js'
import NHead from '../components/head.js'
import Link from 'next/link'
import styles from '../styles/Menu.module.css'

export default function Made() {
  return (
    <div className="container">
      <NHead name="Made"/>
      <Header></Header>

      <main className={styles.menu}>
        <img src="textbox.svg"/>
        <div className={styles.items}>
          <div className={styles.linktxt}>What am I proud of you ask?</div>
          <a href = "https://github.com/miishin">
            <div className={styles.linktxt}>∗ Some things I&apos;ve coded.</div>
          </a>
          <a href = "https://instagram.com/miraisahara">
            <div className={styles.linktxt}>∗ Some of the photos I&apos;ve taken.</div>
          </a>
          <Link href = "/keebs" passHref>
            <div className={styles.linktxt}>∗ Keyboards that I&apos;ve built.</div>
          </Link>
        </div>
      </main>
    </div>
  )
}
