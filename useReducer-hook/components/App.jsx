import React, { useReducer } from "react"

function reducer(state, action) { {/* The reducer function takes the current state and an action (function that gets called and the return value is stored) */}
    switch(action.type) {
        case 'increment':
            return state + 1;
        case 'decrement':
            return state - 1;
        default:
            return state;
    }
    {/* A switch statement is used to return different functionality depending on the type of action. Never mutate the state here (ex: state++ do state + 1 instead) */}
}

function App() {
    const [state, dispatch] = useReducer(reducer, 0);
    {/* useReducer uses a reducer function and initial state */}
    {/* useReducer passes a state value and a dispatch function */}
    return (
        <>
            <h1>State: {state}</h1>
            <button onClick={() => dispatch({type: 'increment'})}>State +1</button> {/* The parameter in the dispatch will become the action parameter in the reducer function */}
            <button onClick={() => dispatch({type: 'decrement'})}>State -1</button> {/* Best practice for using a dispatch is to pass in an object with a type */}
        </>
    )
}

export default App