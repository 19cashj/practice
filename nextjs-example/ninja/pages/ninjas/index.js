import styles from "../../styles/Ninjas.module.css"
import Link from 'next/link'

//getStaticProps runs before render, so no client side code
export const getStaticProps = async () => {

    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await res.json();

    return {
        props: {ninjas: data}
    }
} //use for fetch, this is required for getStaticPaths to work

import Head from "next/head";
const Ninjas = ({ ninjas }) => {
    return (
        <>
            <Head>
                <title>Ninja List | Ninjas</title>
                <meta name="keywords" content='ninjas'/>
            </Head>
            <div>
                <h1>All Ninjas</h1>
                {ninjas.map(ninja => (
                    <Link href={`/ninjas/${ninja.id}`}key={ninja.id}>
                        <a className={styles.single}>
                            <h3>{ ninja.name }</h3>
                        </a>
                    </Link>
                ))}
            </div>
        </>
    );
}

export default Ninjas