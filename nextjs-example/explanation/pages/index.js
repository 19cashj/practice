import Head from 'next/head' // with Head you can add information to the page header and its used in the component, any HTML head tag can be used
import Image from 'next/image'
import styles from '../styles/Home.module.css' //You can import styles this way or using styled-jsx which allows you write css in the components themselves
// The advantage of this is you can dynamically change css with interpolation such as using data from props
import Link from 'next/link' // Use link instead of a href to link pages together
// so dont use <a href='/test'>Test</a>, use <Link href='/blog'><a>Blog</a></Link>
// prefetch={false} in link will turn off prefatching for a link so that it wont be preloaded before the user navigates to the page
import { useRouter } from 'next/router' //Use the next router to use query data
// you can send users to different pages with router.push('/page') and also trigger prefatching with router.prefetch('/page')
// wrap these in useEffect
export default function Home() {
  const router = useRouter()
  return (
    <div>
      <Head>
        <title>{`Custom Page Title ${Math.round(Math.random()*5)}`}</title>
      </Head>
      <h1>Home Page</h1>
      <Link href='/test' prefetch={false}>
        <a>Test</a>
      </Link>
      <p>Id: {router.query.id} </p>
      <style jsx>{`

      h1 {
        padding: ${50-25}px;
      }

      `}</style>
    </div>
  )
}

//go to blog/[id] for dynamic pages example


/*

if (typeof window === 'undefined') {
 //server side only code
}

if (typeof window !=== 'undefined') {
 //client side only code
}


*/