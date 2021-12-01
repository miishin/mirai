import Head from 'next/head' 
import Link from 'next/link'
import Header from '../components/header.js'
import NHead from '../components/head.js'
import styles from '../styles/Menu.module.css'

export default function Home() {
  return (
    <div className="container">
      <NHead name="Home"/>
      <Header></Header>

      <main className={styles.menu}>
        <img src="textbox.svg"/>
        <div className={styles.items}>
          <div className={styles.linktxt}>What do you want to know?</div>
          <Link href="/about" passHref>
            <div className={styles.linktxt}>∗ What can you tell me about yourself?</div>
          </Link>
          <Link href="/made" passHref>
            <div className={styles.linktxt}>∗ What are you proud of?</div>
          </Link>
          <Link href="/like" passHref>
            <div className={styles.linktxt}>∗ What&apos;s your favorite _____?</div>
          </Link>
        </div>
      </main>
    </div>
  )
}
