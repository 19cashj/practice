import React from "react";

export default function Posts(props) {
    function createPosts(post) {
        return (
            <li key={post.id}>
                {post.body}
                {post.title}
            </li>
        )
    }
    return (
        <div>
            {props.loading ? <h2>Loading...</h2> : <></>}
            <ul>
                {props.posts.map(createPosts)}
            </ul>
        </div>
    ) 
}