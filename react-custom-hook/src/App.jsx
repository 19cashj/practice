import React from "react";
import useSessionStorage from "./hooks/useSessionStorage";

export default function App() {
    const [input, setInput] = useSessionStorage('input', '')
    return (
        <input type="text" value={input} onChange={e => setInput(e.target.value)}/>
    );
}