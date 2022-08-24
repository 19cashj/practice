import Link from "next/link";
import styles from '../styles/404.module.css'
const NotFound = () => {
    return (
        <div className={styles.notfound}>
            <h1>Oops</h1>
            <h2>That page does not exist.</h2>
            <Link href='/'><a>Go Home</a></Link>
        </div>
    );
}

export default NotFound;