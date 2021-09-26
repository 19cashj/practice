import React, { useContext } from "react";
import { DarkmodeContext } from "../contexts/DarkmodeContext";
import { Link } from "react-router-dom"

export default function About() {
    const { darkMode } = useContext(DarkmodeContext);
    const h1Style = {
        color: darkMode ? 'white' : 'black',
        backgroundColor: darkMode ? 'black' : 'white',
    }
    const linkStyle = {
        color: darkMode ? 'white' : 'black',
        textDecoration: 'none'
    }
    return (
        <div>
            <h1 style={h1Style}>This is the about page.</h1>
            <Link to="/" style={linkStyle}>Home</Link>
        </div>
    )
}