import React, { useEffect, useRef, useState } from "react"

function App() {
    const [name, setName] = useState('')
    const renderCount = useRef(1); {/* Refs are like state BUT will not re render a component on change so they will persist values across re renders */}
    {/* Refs are an object with a current value like so: { current : 1 } */}
    useEffect(() => {
        renderCount.current = renderCount.current + 1; { /* If we used state instead here it would have caused an infinite loop */}
    })


    const inputRef = useRef(null); { /* Refs can also be used to reference elements similar to DOM manipulation (most common use case) */ }
    function focus() {
        inputRef.current.focus(); { /* The inputRef.current is now referencing the input element, we can now perform actions like focusing or dom manipulation */}
    }

    const prevName = useRef('')
    useEffect(() => {
        prevName.current = name; {/* Refs can also be used to store previous values */}
    }, [name])

    return (
        <>
            <input ref={inputRef} value={name} onChange={e => setName(e.target.value)}/> {/* Elements can have a ref attribute for a ref to point to that element */}
            <h1>Name: {name}</h1>
            <h1>Previous Name: {prevName.current}</h1>
            <h1>Renders: {renderCount.current}</h1>
            <button onClick={focus}>Focus</button>
        </>
    )
}

export default App