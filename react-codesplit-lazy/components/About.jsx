import React from "react"
import { Link } from "react-router-dom"

export default function About() {
    return (
        <div>
            <h1>This is the about page.</h1>
            <Link to="/">Home</Link>
        </div>
    )
}