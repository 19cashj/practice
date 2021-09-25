import React, { useState, useContext } from "react";
import { LoginContext } from "../contexts/LoginContext";

export default function Login() {
    const { setUsername, setShowProfile } = useContext(LoginContext); {/* Destructure the values you want access to in the child component with useContext*/}
    return (
        <>
            <input type="text" placeholder="username"
            onChange={(e) => setUsername(e.target.value)} />
            <input type="text" placeholder="password"/>
            <button onClick={() => setShowProfile(true)}>Login</button>
        </>
    )
}