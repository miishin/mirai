import Head from 'next/head'
import Image from 'next/image' 
import Link from 'next/link'
import styles from '../styles/Header.module.css'

export default function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.txt}>
                <Link href="/">Mirai</Link>
            </div>
        </div>
    )
}