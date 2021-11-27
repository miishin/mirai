import Head from 'next/head'
import Header from '../components/header.js'
import NHead from '../components/head.js'
import styles from '../styles/Keebs.module.css'

export default function Keebs() {
  return (
    <div className="container">
      <NHead name="Keebs"/>

      <Header></Header>

      <main className={styles.menu}>
        <div className={styles.items}>
          <div className={styles.txt}></div>
        </div>
      </main>
    </div>
  )
}
