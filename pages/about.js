import Head from 'next/head'
import Image from 'next/image' 
import Link from 'next/link'
import styles from '../styles/About.module.css'

export default function About() {
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

      <main className={styles.contents}>
        <div className={styles.items}>
          <div className={styles.txt}>
              I'm Mirai.
          </div>
        </div>
      </main>
    </div>
  )
}
