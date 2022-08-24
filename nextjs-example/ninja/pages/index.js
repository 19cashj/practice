import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <h1 className={styles.title}>Home Page</h1>
      <p className={styles.text}>hi</p>
      <Link href="ninjas"><a className={styles.btn}>See Ninja Listing</a></Link>
    </div>
  )
}