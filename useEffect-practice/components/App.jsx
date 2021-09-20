import React, { useEffect, useState } from "react"

function App() {
    const [count, setCount] = useState(0)
    function increaseCount() {
        setCount(count + 1);
    }

    useEffect(() => { {/* useEffect will run on the mounting of the component and if a dependency is updated */}
        console.log("hi");
        return () => { {/* Returning a function will be recognized as a cleanup function, this function will run when the component unmounts, it is optional*/}
            console.clear();
            console.log("Cleanup Initiated")
        }
    },[count]) 
    {/* ^ This is the array of dependencies. Any change to them will run the useEffect functionality */}
    {/* A blank array, [], is also valid. It just means useEffect will only run on component mounting */}
    {/* useEffect is a good hook for api/fetch calls as it will run before re renders */}

    return (
        <div>
            <h1>{count}</h1>
            <h2>Hi will log everytime count re renders and on mount</h2>
            <button onClick={increaseCount}>Increment</button>
        </div>
    )
}

export default App