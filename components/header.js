import Head from 'next/head'
import Image from 'next/image' 
import Link from 'next/link'
import styles from '../styles/Header.module.css'

export default function Header(title) {
    return (
        <div className={styles.header}>
            <div className={styles.txt}>
                <Link href="/">Mirai</Link>
                <br/>
                {title.name}
            </div>
        </div>
    )
}