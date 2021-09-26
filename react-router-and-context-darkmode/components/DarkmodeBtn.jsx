import React, { useContext } from "react";
import { DarkmodeContext } from "../contexts/DarkmodeContext";

export default function DarkmodeBtn() {
    const { darkMode, setdarkMode } = useContext(DarkmodeContext);
    const buttonStyle = {
        color: darkMode ? 'white' : 'black',
        backgroundColor: darkMode ? 'black' : 'white',
        borderColor: darkMode ? 'black' : 'white',
    }
    function onClick() {
        setdarkMode(!darkMode);
        console.log(darkMode);
    }
    return (
        <>
            <button onClick={onClick} style={buttonStyle}>Darkmode</button>
        </>
    )
}