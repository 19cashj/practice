export const getStaticPaths = async () => { //generate all routes for static generation
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();

    const paths = data.map(ninja => {
        return {
            params: { id: ninja.id.toString() }
        }
    })
    return {
        paths: paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => { //this will run for every path in getStaticPaths
    const id= context.params.id;
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    const data = await res.json();

    return {
        props: {ninja: data}
    }
}

import Head from "next/head";
const Details = ({ ninja }) => {
    return (
        <>
        <Head>
            <title>Ninja List | Details</title>
        </Head>
            <div>
                <h1>{ninja.name}</h1>
                <p>{ninja.email}</p>
                <p>{ninja.website}</p>
                <p>{ninja.address.city}</p>
            </div>
        </>
    );
}
 
export default Details;