import Link from 'next/link'
import { useRouter } from 'next/router' //Use the next router to use query data
import posts from '../../posts.json'
//Folders translate into stacked urls in this case /blog/
//Id comes from the filename of [id] so /blog/id <- id is captured with router.query.id

// const post = posts[router.query.id] wont work on its own Why? Because.. during rendering, when the component is initialized, the data is not there yet.
// when we actually have links to these posts, then the page will load and SSR will work with this dynamic route.
/*const id = () => {
    const router = useRouter()
    return (
        <>
            <ul>
                {Object.entries(posts).map((value, index) => {
                    return (
                        <li key={index}>
                            <Link href='/blog/[id]' as={'/blog/' + value[0]}>
                            <a>{value[1].title}</a>
                            </Link>
                        </li>
                    )
                })}
            </ul>
            <p>Id: {router.query.id}</p>
        </>
    )
}*/
//However theres another way to make SSR work with these without putting links all over the page, getInitialProps()
const Post = props => {
    return (
        <>
            <h1>{props.post.title}</h1>
            <p>{props.post.content}</p>
        </>
    )
}
//We make another function using the main component and pass in the query object, which returns the post we want using the query id
//We can then use this data in the function above and even get rid of useRouter all together
Post.getInitialProps = async ({ query }) => {
    const {id, pathname, asPath, req, res, err} = query
    return {
      post: posts[id]
    }
}

export default Post