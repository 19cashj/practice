import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from 'next/router'
import Head from "next/head";
import styles from '../styles/404.module.css'
const NotFound = () => {
    const router = useRouter();
    useEffect(() => {
        setTimeout(() => {
            //router.go(-1)
            router.push('/')
        }, 3000);
    }, [])
    return (
        <>
            <Head>
                <title>Ninja List | 404</title>
                <meta name="keywords" content='ninjas'/>
            </Head>
            <div className={styles.notfound}>
                <h1>Oops</h1>
                <h2>That page does not exist.</h2>
                <Link href='/'><a>Go Home</a></Link>
            </div>
        </>
    );
}

export default NotFound;